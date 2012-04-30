// Initialize GCD problem
var xval, yval;

xval = argument0;
yval = argument1;

instance_activate_object(obj_key);
obj_key.visible = true;
instance_activate_object(obj_treasure);
obj_treasure.visible = true;
instance_deactivate_object(obj_player_A);
var rnd, key_rnd, treasure_rnd;
rnd[0] = maza_irandom_range(2,10);
rnd[1] = maza_irandom_range(2,10);
rnd[2] = maza_irandom_range(2,10);
key_rnd = rnd[0] * rnd[1];
treasure_rnd = rnd[1] * rnd[2];
if (key_rnd > treasure_rnd) {
  var t;
  t = treasure_rnd;
  treasure_rnd = key_rnd;
  key_rnd = t;
}
obj_treasure.x = xval + treasure_rnd * global.GRID_SPACE_WIDTH;
obj_treasure.y = yval - obj_player_B.sprite_height;
obj_treasure.num = treasure_rnd;
obj_key.x = xval + key_rnd * global.GRID_SPACE_WIDTH;
obj_key.y = yval - obj_player_B.sprite_height;
obj_key.num = key_rnd;
global.problem_num1[global.num_bridge_segments] = treasure_rnd;
global.problem_num2[global.num_bridge_segments] = key_rnd;
with obj_player {
  initialize_player(xval, 0);
}

create_wood_bridge(obj_player_B.x + global.GRID_SPACE_WIDTH, obj_player_B.y,
                   obj_treasure.x + global.GRID_SPACE_WIDTH, 1, obj_wood);
                   
// No idea why we need following line - seems to be bug in GM:HTML5
// view_visible[global.DASHBOARD_VIEW] = true;
view_visible[global.MAIN_VIEW] = true;
// Make the main vie show the treasure
view_object[global.MAIN_VIEW] = obj_treasure.id;
view_xview[global.MAIN_VIEW] = obj_treasure.x - 3 * global.GRID_SPACE_WIDTH;
obj_treasure.alarm[0] = room_speed * 3; // 3 seconds

