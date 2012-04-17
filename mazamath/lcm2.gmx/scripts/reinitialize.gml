var splash, timer;
splash = argument0;
timer = argument1;

var xval, yval;

global.num_bridge_segments += 1;

if (global.num_bridge_segments == 0) {
  global.x_n = 89765467; // Random number seed
} else { // Create new bridge segment
  yval := obj_player_A.y;
  instance_create(global.num_bridge_segments * global.bridge_width, yval, obj_bridge);
  // Remove all old wood objects except the ones for the players
  with obj_wood {
    if (obj_wood.player == "") {
      instance_destroy();
    }
  }
}

// Reposition players A and B after all bridge segments
xval = (global.num_bridge_segments + 1) * global.bridge_width - obj_player_B.sprite_width;
with obj_player {
  initialize_player(xval);
}

if (global.num_bridge_segments mod 5 == 0) {
  obj_help.splash = splash;
  obj_help.alarm[0] = timer;
}

if (global.num_bridge_segments >= 5) { // ON to stage 2
  global.level = 1;
}
if (global.level > 0) {
  // true
} else {
  // false
}

with obj_sinhika {
  move_sinhika();
}

