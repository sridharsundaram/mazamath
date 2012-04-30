// Initialize Stage for Game
var xval, yval;
create_bridge_segments(global.num_bridge_segments);
xval = (global.num_bridge_segments + 1) * global.BRIDGE_WIDTH - obj_player_B.sprite_width;
yval = obj_player_B.y;
global.problem_value[global.num_bridge_segments] = 0;
// 2 minutes == 120s to finish.
global.timer = room_speed * 120;

// Choose type of problem
if (global.problem_type[global.num_bridge_segments] == global.LCM) {
  initialize_lcm(xval, yval);
} else if (global.problem_type[global.num_bridge_segments] == global.GCD) {
  initialize_gcd(xval, yval);
} else {
  show_message('Unknown problem type: ' + global.problem_type[global.num_bridge_segments]);
}

with obj_sinhika {
  move_sinhika();
}

