// Get Move for player
var player;
player = argument0;

if (os_browser == browser_not_a_browser) {
  if (player == 'A') return obj_player_A.multiple;
  if (player == 'B') return obj_player_B.multiple;
  return 0;
}

return js_getMove(player);

