// Send Move for player
var multiple;
multiple = argument0;

switch(get_mode()) {
  case global.NOT_BROWSER: break;
  case global.GM_BROWSER: break;
  case global.BROWSER: js_sendMove(multiple);
}

