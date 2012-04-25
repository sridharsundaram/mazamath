// Create a wooden bridge from (x1, y1) to (x2, y2) 
var x1, y1, x2, y2, count_x, count_y, wood_obj;
x1 = argument0;
y1 = argument1;
x2 = argument2;
y2 = argument3;
count_x = argument4;
count_y = argument5;
wood_obj = argument6;

while (x1 <= x2) {
  i_wood = instance_create(x1, y1, wood_obj);
  i_wood.num = count_x;
  count_x += 1;
  x1 += global.GRID_SPACE_WIDTH;
  wood_obj = obj_wood;
}

y1 += global.GRID_SPACE_WIDTH;
x1 -= global.GRID_SPACE_WIDTH;
while (y1 < y2) {
  i_wood = instance_create(x1, y1, obj_wood);
  i_wood.num = count_y;
  count_y += 1;
  y1 += global.GRID_SPACE_WIDTH;
}


