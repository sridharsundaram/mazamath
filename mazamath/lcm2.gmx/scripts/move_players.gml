// Move the player - given multiple (-ve multiple indicates backward)
with obj_player {
  self.multiple = get_move(self.player);
  sound_play(self.sound);
  self.jumping = abs(self.multiple) + 1;
  self.x_start_jump = self.x;
  if (path_exists(self.path)) {
    path_delete(self.path);
  }
  
  self.path = path_duplicate(self.original_path);
  length = path_get_x(self.path, 1) - path_get_x(self.path, 0);
  if (self.multiple == 0) {
    path_scale(self.path, 0, 1);
  } else {
    path_scale(self.path, (self.jump * global.GRID_SPACE_WIDTH)/length, 1);
  }
  
  if (self.multiple < 0) { 
    path_shift(self.path, self.multiple * global.GRID_SPACE_WIDTH, 0);
    path_reverse(self.path);
  }
  health -= 2; // uses up energy to move
  path_start(self.path, 30 /* speed */, 0 /*endaction */,false /* absolute*/);
  // Having moved, they are no longer ready to move
  self.move_ready = false;
}

