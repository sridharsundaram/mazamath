with obj_player { hspeed = 0; vspeed = 0;}

global.num_bridge_segments += 1;
var yval;
yval = obj_player_B.y - obj_player_B.sprite_height;
instance_create(global.num_bridge_segments * global.BRIDGE_WIDTH, yval, obj_bridge);
// Remove all old wood objects except the ones for the players
with obj_wood {
  instance_destroy();
}

goto_room(Modelling_Room);

