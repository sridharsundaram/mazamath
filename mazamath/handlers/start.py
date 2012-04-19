#!/usr/bin/python2.4
#
# Copyright 2010 Google Inc. All Rights Reserved.

# pylint: disable-msg=C6310

"""

This module is the start page for LCM game.
All in-progress LCM games are shown and new can be created.
"""

import os
from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.ext.webapp import template
from datamodel.game import Game
from datetime import datetime, timedelta
#from time import gmtime, strftime
# strftime("%Y-%m-%d %H:%M:%S", gmtime())

class StartPage(webapp.RequestHandler):
  """The main UI page, renders the 'index.html' template."""

  def get(self):
    """Renders the main page. """
    player = users.get_current_user()
    if not player:
      self.redirect(users.create_login_url(self.request.uri))
      return
    all_games = Game.all().filter('last_updated > ', datetime.now() - timedelta(minutes=10))
    template_values = { 'me': player,
                        'games': all_games,
                        'joinlink': 'http://localhost:8081/join?g=',
                      };
    path = os.path.join(os.path.dirname(__file__), '../html/start.html')                      
    self.response.out.write(template.render(path, template_values))
