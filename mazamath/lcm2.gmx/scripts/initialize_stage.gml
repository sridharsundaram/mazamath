// Initialize Stage for Game
var xval, yval;

xval = (global.num_bridge_segments + 1) * global.BRIDGE_WIDTH - obj_player_B.sprite_width;
yval = obj_player_B.y;
global.gcd_value = 0;
global.lcm_value = 0;
// 2 minutes == 120s to finish.
global.timer = room_speed * 120;

// Choose type of problem
if (global.problem == global.LCM) {
  initialize_lcm(xval, yval);
} else if (global.problem == global.GCD) {
  initialize_gcd(xval, yval);
}

with obj_sinhika {
  move_sinhika();
}

