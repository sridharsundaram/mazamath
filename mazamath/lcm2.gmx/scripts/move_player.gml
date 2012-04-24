// Move the player - given multiple and direction (-ve multiple indicates backward)
self.multiple = get_move(self.player);
self.move_number += 1;
sound_play(self.sound);
self.start_jump[global.X] = self.x;
self.start_jump[global.Y] = self.y;
if (path_exists(self.path)) {
  path_delete(self.path);
}

self.jumping = abs(self.multiple) + 1;
// Scale the path to match jump size
self.path = path_duplicate(self.original_path);
var length;
length = path_get_x(self.path, 1) - path_get_x(self.path, 0);
if (self.multiple == 0) {
  path_scale(self.path, 0, 1);
} else {
  path_scale(self.path, (self.jump * global.GRID_SPACE_WIDTH)/length, 1);
}

// Rotate the path to match jump direction
var positive;
positive = self.multiple >= 0;
path_rotate(self.path, global.rotate_angle[positive, self.dir]);

health -= 2; // uses up energy to move
path_start(self.path, 30 /* speed */, 0 /*endaction */,false /* absolute*/);
// Having moved, player is no longer ready to move
self.move_ready = false;

