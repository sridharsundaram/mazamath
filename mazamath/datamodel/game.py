#!/usr/bin/python2.5
#
# Copyright 2011 Maza Learn Pvt Ltd. All Rights Reserved.

# pylint: disable-msg=C6310

from google.appengine.ext import db

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
  

