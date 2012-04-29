// Return name of the player
var player;
player = argument0;
switch(get_mode()) {
  case global.NOT_BROWSER: return player;
  case global.GM_BROWSER: return player;
  case global.BROWSER: return js_getPlayerName(player);
}

