#!/usr/bin/python2.5
#
# Copyright 2011 Maza Learn Pvt Ltd. All Rights Reserved.

# pylint: disable-msg=C6310

"""Channel 
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
from datamodel.game import Game

class GameUpdater():
  game = None

  def __init__(self, game):
    self.game = game

  def get_game_message(self):
    gameUpdate = {
      'board': self.game.board,
      'playerA': self.game.playerA.user_id(),
      'playerB': '' if not self.game.playerB else self.game.playerB.user_id(),
      'moveA': self.game.moveA,
    }
    return simplejson.dumps(gameUpdate)

  def send_update(self):
    message = self.get_game_message()
    channel.send_message(self.game.playerA.user_id() + self.game.key().id_or_name(), message)
    if self.game.playerB:
      channel.send_message(self.game.playerB.user_id() + self.game.key().id_or_name(), message)

  def make_move(self, position, player):
    if position >= 0 and player == self.game.playerA or user == self.game.playerB:
      if self.game.moveA == (player == self.game.playerA):
        boardList = list(self.game.board)
        if (boardList[position] == ' '):
          boardList[position] = 'X' if self.game.moveX else 'O'
          self.game.board = "".join(boardList)
          self.game.moveA = not self.game.moveA
          self.game.put()
          self.send_update()
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
      id = int(self.request.get('i'))
      GameUpdater(game).make_move(id, player)


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
                    moveX = True,
                    board = '         ')
        game.put()
      else:
        game = Game.get_by_key_name(game_key)
        if not game.playerB:
          game.playerB = player
          game.put()

      game_link = 'http://localhost:8080/?g=' + game_key

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