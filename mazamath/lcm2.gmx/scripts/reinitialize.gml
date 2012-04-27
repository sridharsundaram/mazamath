// Reinitialize Game
var xval, yval;

global.num_bridge_segments += 1;

if (global.num_bridge_segments > 0) { // Create new bridge segment
  yval := obj_player_B.y - obj_player_B.sprite_height;
  instance_create(global.num_bridge_segments * global.BRIDGE_WIDTH, yval, obj_bridge);
  // Remove all old wood objects except the ones for the players
  with obj_wood {
    instance_destroy();
  }
  global.move_number += 1;
}

xval = (global.num_bridge_segments + 1) * global.BRIDGE_WIDTH - obj_player_B.sprite_width;
yval = obj_player_B.y;
global.gcd_value = 0;
global.lcm_value = 0;

// Choose type of problem
if (global.problem == global.LCM) {
  initialize_lcm(xval, yval);
} else if (global.problem == global.GCD) {
  initialize_gcd(xval, yval);
}

with obj_sinhika {
  move_sinhika();
}

