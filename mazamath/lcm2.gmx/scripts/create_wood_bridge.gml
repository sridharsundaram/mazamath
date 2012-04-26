// Create a wooden bridge from (x1, y1) to (x2, y1) 
var x1, y1, x2, y2, count_x, count_y, wood_obj;
x1 = argument0;
y1 = argument1;
x2 = argument2;
count_x = argument3;
wood_obj = argument4;

while (x1 < x2) {
  i_wood = instance_create(x1, y1, wood_obj);
  i_wood.num = count_x;
  count_x += 1;
  x1 += global.GRID_SPACE_WIDTH;
  wood_obj = obj_wood;
}

