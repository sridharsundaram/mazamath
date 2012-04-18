#!/usr/bin/python2.5
#
# Copyright 2011 Maza Learn Pvt Ltd. All Rights Reserved.

# pylint: disable-msg=C6310

from google.appengine.ext import db

class Game(db.Model):
  """All the data we store for a game"""
  playerA = db.UserProperty()
  playerB = db.UserProperty()
  board = db.StringProperty()
  moveA = db.BooleanProperty()  
