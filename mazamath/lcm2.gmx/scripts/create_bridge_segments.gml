// Draw bridge segments
var num_segments;
num_segments = argument0;

var xval, yval, i, bridge;
yval = obj_player_B.y - obj_player_B.sprite_height;
xval = global.BRIDGE_WIDTH;

for (i = 0; i < num_segments; i += 1) {
  bridge = instance_create(xval, yval, obj_bridge);
  bridge.problem_type = global.problem_type[i];
  bridge.problem_value = global.problem_value[i];
  bridge.num1 = global.problem_num1[i];
  bridge.num2 = global.problem_num2[i];
  xval += global.BRIDGE_WIDTH;
}

