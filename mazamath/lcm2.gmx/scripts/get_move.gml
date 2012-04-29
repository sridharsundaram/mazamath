// Get Move for player
var player;
player = argument0;

switch(get_mode()) {
  case global.NOT_BROWSER: 
  case global.GM_BROWSER: 
    if (player == 'A') return obj_player_A.multiple;
    if (player == 'B') return obj_player_B.multiple;
    return 0; 
  case global.BROWSER: return js_getMove(player);
}

