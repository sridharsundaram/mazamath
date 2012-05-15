// End GCD
if (self.x == obj_key.x) {
  self.has_key = true;
  obj_key.visible = false;
}
if (self.x == obj_treasure.x && self.has_key) { // Found
  global.problem_value[global.num_bridge_segments] = self.jump;
  var weld;
  // Weld the wood together
  weld = instance_create(self.x + global.GRID_SPACE_WIDTH, self.y - global.GRID_SPACE_WIDTH, obj_weld);
  with instance_create(self.x, self.y - global.GRID_SPACE_WIDTH, obj_delta_score) {
    delta_score = 100;
  }

  obj_sinhika.speed = 0;
  obj_sinhika.x = 0;
  obj_sinhika.y = 0;
  obj_treasure.visible = false;
  obj_key.visible = false;
  return 0;
}

