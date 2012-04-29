// Return true if both players are ready to move
if (get_player_me() == global.PLAYER_BOTH) {
  if (instance_exists(obj_player_A) && instance_exists(obj_player_B)) {
    return obj_player_A.move_ready && obj_player_B.move_ready;
  }
  return false;
}

switch(get_mode()) {
  case global.NOT_BROWSER: return false;
  case global.GM_BROWSER: return false;
  case global.BROWSER: return js_isReady();
}


