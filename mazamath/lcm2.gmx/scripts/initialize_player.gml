var xval, num;

xval = argument0;     // x-position for player

self.x = xval;
self.count = 0;
self.x_min_segment = self.x;
self.x_max_segment = self.x;
self.jump = maza_irandom_range(2,10);
(self.wood_id).num = self.jump;

