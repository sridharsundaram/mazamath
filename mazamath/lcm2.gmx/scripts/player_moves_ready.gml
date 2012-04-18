// Return true if both players are ready to move
if (get_player_me() == global.PLAYER_BOTH) {
  if (instance_exists(obj_player_A) && instance_exists(obj_player_B)) {
    return obj_player_A.move_ready && obj_player_B.move_ready;
  }
  return false;
}

if (os_browser == browser_not_a_browser) {
  return false; // Dont know how to get distributed teamplay without a browser
}
return js_isReady();

