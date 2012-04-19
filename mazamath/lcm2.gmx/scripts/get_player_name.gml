// Return name of the player
var player;
player = argument0;
if (os_browser == browser_not_a_browser) {
  return player;
  return get_string("Enter name for player " + string(player), string(player));
}
return js_getPlayerName(player);
