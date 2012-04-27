// Initialize LCM problem
var xval, yval;
xval = argument0;
yval = argument1;

instance_deactivate_object(obj_key);
instance_deactivate_object(obj_treasure);
instance_activate_object(obj_player_A);
with obj_player {
  initialize_player(xval, maza_irandom_range(2,10));
}

