#!/usr/bin/python2.4
#
# Copyright 2010 Google Inc. All Rights Reserved.

# pylint: disable-msg=C6310

"""Channel Tic Tac Toe

This module demonstrates the App Engine Channel API by implementing a
simple tic-tac-toe game.
"""

import datetime
import logging
import os
import random
import re
from django.utils import simplejson
from google.appengine.api import channel
from google.appengine.api import users
from google.appengine.ext import db
from google.appengine.ext import webapp
from google.appengine.ext.webapp import template
from google.appengine.ext.webapp.util import run_wsgi_app


class Game(db.Model):
  """All the data we store for a game"""
  MOVE_STATE_NOT_STARTED = -1
  MOVE_STATE_OVER = 0
  MOVE_STATE_READY = 3
  MOVE_STATE_AWAITING_A = 1
  MOVE_STATE_AWAITING_B = 2
  move_state = db.IntegerProperty()
  playerA = db.UserProperty()
  playerB = db.UserProperty()
  state = db.StringProperty()
  moveA = db.IntegerProperty()
  moveB = db.IntegerProperty()
  last_updated = db.DateTimeProperty(auto_now = True)
  

class GameUpdater():
  game = None

  def __init__(self, game):
    self.game = game

  def get_game_message(self):
    nameA = self.game.playerA.nickname() if self.game.playerA else ''
    nameA = nameA[0:nameA.find('@')]
    nameB = self.game.playerB.nickname() if self.game.playerB else ''
    nameB = nameB[0:nameB.find('@')]
    gameUpdate = {
      'state': self.game.state,
      'playerA': self.game.playerA.user_id(),
      'nameA': nameA,
      'playerB': '' if not self.game.playerB else self.game.playerB.user_id(),
      'nameB': nameB,
      'move_state': self.game.move_state,
      'moveA': self.game.moveA,
      'moveB': self.game.moveB,
      'random': random.randrange(0, 0x3FFFFFFF) 
    }
    return simplejson.dumps(gameUpdate)

  def send_update(self):
    message = self.get_game_message()
    if self.game.playerA:
      channel.send_message(self.game.playerA.user_id() + self.game.key().id_or_name(), message)
    if self.game.playerB:
      channel.send_message(self.game.playerB.user_id() + self.game.key().id_or_name(), message)

  def make_move(self, multiple, player):
    if player == self.game.playerA:
      self.game.moveA = multiple
      if self.game.move_state == Game.MOVE_STATE_READY:
        self.game.move_state = Game.MOVE_STATE_AWAITING_B
      elif self.game.move_state == Game.MOVE_STATE_AWAITING_A:
        self.game.move_state = Game.MOVE_STATE_READY
        self.send_update()
    elif player == self.game.playerB:
      self.game.moveB = multiple
      if self.game.move_state == Game.MOVE_STATE_READY:
        self.game.move_state = Game.MOVE_STATE_AWAITING_A
      elif self.game.move_state == Game.MOVE_STATE_AWAITING_B:
        self.game.move_state = Game.MOVE_STATE_READY
        self.send_update()
     
    self.game.put()
    return


class GameFromRequest():
  game = None;

  def __init__(self, request):
    player = users.get_current_user()
    game_key = request.get('g')
    if player and game_key:
      self.game = Game.get_by_key_name(game_key)

  def get_game(self):
    return self.game


class MovePage(webapp.RequestHandler):

  def post(self):
    game = GameFromRequest(self.request).get_game()
    player = users.get_current_user()
    if game and player:
      multiple = int(self.request.get('i'))
      GameUpdater(game).make_move(multiple, player)


class OpenedPage(webapp.RequestHandler):
  def post(self):
    game = GameFromRequest(self.request).get_game()
    GameUpdater(game).send_update()


class MainPage(webapp.RequestHandler):
  """The main UI page, renders the 'index.html' template."""

  def get(self):
    """Renders the main page. When this page is shown, we create a new
    channel to push asynchronous updates to the client."""
    player = users.get_current_user()
    game_key = self.request.get('g')
    game = None
    if player:
      if not game_key:
        game_key = player.user_id()
        game = Game(key_name = game_key,
                    playerA = player,
                    move_state = Game.MOVE_STATE_NOT_STARTED,
                    state = '         ')
        game.put()
      else:
        game = Game.get_by_key_name(game_key)
        if not game.playerB and not game.playerA == player:
          game.playerB = player
          game.move_state = Game.MOVE_STATE_READY
          game.put()

      game_link = 'http://localhost:8081/?g=' + game_key

      if game:
        token = channel.create_channel(player.user_id() + game_key)
        template_values = {'token': token,
                           'me': player.user_id(),
                           'game_key': game_key,
                           'game_link': game_link,
                           'initial_message': GameUpdater(game).get_game_message()
                          }
        path = os.path.join(os.path.dirname(__file__), 'index.html')

        self.response.out.write(template.render(path, template_values))
      else:
        self.response.out.write('No such game')
    else:
      self.redirect(users.create_login_url(self.request.uri))


application = webapp.WSGIApplication([
    ('/', MainPage),
    ('/opened', OpenedPage),
    ('/move', MovePage)], debug=True)


def main():
  run_wsgi_app(application)

if __name__ == "__main__":
  main()
