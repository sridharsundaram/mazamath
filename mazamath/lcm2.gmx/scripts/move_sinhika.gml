//self.y -= maza_irandom_range(2,8) * global.GRID_SPACE_WIDTH;
//self.x -= maza_irandom_range(2,8) * global.GRID_SPACE_WIDTH;
var player, distrance;
player = instance_nearest(self.x, self.y, obj_player);
if (player != noone) {
  distance = distance_to_point(player.x, player.y);
  move_towards_point(player.x, player.y, 2);
  self.alarm[0] = distance / 2 + 5;
}

