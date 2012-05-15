// Initialize LCM problem
var xval, yval;
xval = argument0;
yval = argument1;

instance_deactivate_object(obj_key);
instance_deactivate_object(obj_treasure);
instance_activate_object(obj_player_A);
with obj_player {
  initialize_player(xval - obj_player_A.sprite_width/2, maza_irandom_range(2,10));
}
global.problem_num1[global.num_bridge_segments] = obj_player_A.jump;
global.problem_num2[global.num_bridge_segments] = obj_player_B.jump;

