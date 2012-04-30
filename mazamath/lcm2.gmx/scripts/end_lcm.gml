// End LCM
with obj_player {
  self.current_count = (self.x - self.min_segment_x) div global.GRID_SPACE_WIDTH;
}
if (obj_player_A.current_count != 0 && 
    obj_player_A.current_count == obj_player_B.current_count && 
    obj_player_B.current_count mod obj_player_B.jump == 0 && 
    obj_player_A.current_count mod obj_player_A.jump == 0 && 
    obj_player_B.jumping == 0 and obj_player_A.jumping == 0) {
  global.problem_value[global.num_bridge_segments] = self.current_count;
  var weld;
  weld = instance_create(obj_player_A.x, obj_player_A.y, obj_weld); // Weld the wood together
  with instance_create(obj_player_A.x, obj_player_A.y - global.GRID_SPACE_WIDTH, obj_delta_score) {
    delta_score = 100;
  }

  obj_sinhika.speed = 0;
  obj_sinhika.x = 0;
  obj_sinhika.y = 0;
  return 0;
} 

