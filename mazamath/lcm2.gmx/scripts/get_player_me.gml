// Return which player I am
switch(get_mode()) {
  case global.NOT_BROWSER: return global.player_me;
  case global.GM_BROWSER: return global.player_me;
  case global.BROWSER: return global.PLAYER_BOTH; // js_getPlayerMe();
}
