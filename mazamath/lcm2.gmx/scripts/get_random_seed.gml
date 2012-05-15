switch(get_mode()) {
  case global.NOT_BROWSER: return irandom_range(879887656, 967654377);
  case global.GM_BROWSER: return 876238619;
  case global.BROWSER: return js_getRandomSeed();
}

