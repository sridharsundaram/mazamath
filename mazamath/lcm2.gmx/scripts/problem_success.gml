var xval, yval
obj_sinhika.speed = 0;
obj_sinhika.x = 0;
obj_sinhika.y = 0;
/*
for (xval = global.prev_x - 8; xval < obj_me.x - global.GRID_SPACE_WIDTH; xval += global.GRID_SPACE_WIDTH) {
  instance_create(xval, yval, obj_weld)
} */
global.num_bridge_segments += 1;
if (global.num_bridge_segments > 0) {
  // Create new bridge segment
  var bridge_width;
  bridge_width = 4 * global.GRID_SPACE_WIDTH; // Dont know how to get sprite width
  yval := obj_monkey.y;
  instance_create(global.num_bridge_segments * bridge_width, yval, obj_bridge);
  
  // Reposition monkey and me after the newly created bridge segment
  xval := (global.num_bridge_segments + 1) * bridge_width;
  obj_monkey.x := xval;
  obj_me.x := xval;
  
  view_visible[global.ZOOM_VIEW] = true;
  sleep(100);
  splash_show_web(working_directory + "/Multiple.htm", 10000);
}

obj_me.count = 0;
num1 = irandom_range(2,10);
(obj_dashboard.me_wood_id).number = num1;
obj_me.jump = num1;

if (path_exists(obj_me.path)) {
  path_delete(obj_me.path);
}
obj_me.path = path_duplicate(path_me);
length = path_get_x(path_me, 1) - path_get_x(path_me, 0);
path_scale(obj_me.path, (obj_me.jump * 32.0)/length, 1);


obj_monkey.count = 0;
num2 = irandom_range(2,10);
(obj_dashboard.monkey_wood_id).number = num2;
obj_monkey.jump = num2;

if (path_exists(obj_monkey.path)) {
  path_delete(obj_monkey.path);
}
obj_monkey.path = path_duplicate(path_monkey);
length = path_get_x(path_monkey, 1) - path_get_x(path_monkey, 0);
path_scale(obj_monkey.path, (obj_monkey.jump * 32.0)/length, 1);


