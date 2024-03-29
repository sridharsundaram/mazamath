// Initialize Stage for Game
var xval, yval;
create_bridge_segments(global.num_bridge_segments);
xval = (global.num_bridge_segments + 1) * global.BRIDGE_WIDTH;
yval = obj_player_B.y;
global.problem_value[global.num_bridge_segments] = 0;
// 2 minutes == 120s to finish.
global.timer = room_speed * 120;

// Choose type of problem
if (global.problem_type[global.num_bridge_segments] == global.LCM) {
  initialize_lcm(xval, yval);
} else if (global.problem_type[global.num_bridge_segments] == global.GCD) {
  initialize_gcd(xval, yval);
  instance_create(obj_player_B.x - global.GRID_SPACE_WIDTH, obj_player_B.y, obj_slider2);
}

with obj_sinhika {
  move_sinhika();
}

