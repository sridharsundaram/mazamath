self.y -= maza_irandom_range(2,8) * global.GRID_SPACE_WIDTH;
self.x -= maza_irandom_range(2,8) * global.GRID_SPACE_WIDTH;
distance_player_A = distance_to_point(obj_player_A.x, obj_player_A.y);
distance_player_B = distance_to_point(obj_player_B.x, obj_player_B.y);
if (distance_player_A < distance_player_B) {
  move_towards_point(obj_player_A.x, obj_player_A.y, 2);
  self.alarm[0] = distance_player_A / 2 + 5;
} else {
  move_towards_point(obj_player_B.x, obj_player_B.y, 2);
  self.alarm[0] = distance_player_B / 2 + 5;
}


