switch(get_mode()) {
  case global.NOT_BROWSER: 
  case global.GM_BROWSER: return 876238619;
  case global.BROWSER: return js_getRandomSeed();
}

