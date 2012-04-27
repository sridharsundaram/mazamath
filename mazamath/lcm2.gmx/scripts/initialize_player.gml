var xval, num, jump;

xval = argument0;     // x-position for player
jump = argument1;     // Jump length for player

self.x = xval;
self.jump = jump;
self.count_x = 0;
self.min_segment_x = self.x;
self.max_segment_x = self.x;

