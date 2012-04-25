var splash, timer;
splash = argument0;
timer = argument1;

var xval, yval;

global.num_bridge_segments += 1;

if (global.num_bridge_segments == 0) {
  global.x_n = get_random_seed();
  obj_player_A.name = get_player_name('A');
  obj_player_B.name = get_player_name('B');
} else { // Create new bridge segment
  yval := obj_player_A.y;
  instance_create(global.num_bridge_segments * global.BRIDGE_WIDTH, yval, obj_bridge);
  // Remove all old wood objects except the ones for the players
  with obj_wood {
    if (obj_wood.player == "") {
      instance_destroy();
    }
  }
  global.move_number += 1;
}

xval = (global.num_bridge_segments + 1) * global.BRIDGE_WIDTH - obj_player_B.sprite_width;
yval = obj_player_B.y;

// Choose type of problem
if (global.num_bridge_segments mod 2 == 1) {
  global.problem = global.LCM;
  instance_deactivate_object(obj_surasa);
} else {
  global.problem = global.GCD;
  instance_activate_object(obj_surasa);
  var xrnd, yrnd;
  xrnd = maza_irandom_range(2,10);
  yrnd = maza_irandom_range(2,10);
  obj_surasa.x = xval + xrnd * global.GRID_SPACE_WIDTH;
  obj_surasa.y = yval + yrnd * global.GRID_SPACE_WIDTH;
  obj_surasa.begin_x = xval;
  obj_surasa.begin_y = yval;
  obj_surasa.num_x = xrnd;
  obj_surasa.num_y = yrnd;
}

// Reposition players A and B after all bridge segments
with obj_player {
  initialize_player(xval);
  if (global.problem == global.LCM) {
    self.jump = maza_irandom_range(2,10);
    (self.wood_id).num = self.jump;
  } else {
    global.problem = global.GCD;
    (self.wood_id).num = 1;
    self.jump = 1;
  }
}

if (global.problem == global.GCD) {
    create_wood_bridge(obj_player_B.x + global.GRID_SPACE_WIDTH, obj_player_B.y,
                       obj_surasa.x, obj_surasa.y,
                       1, 1, obj_wood);
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

