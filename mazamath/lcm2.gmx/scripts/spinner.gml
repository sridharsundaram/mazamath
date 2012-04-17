//////////////// Spinner Input ////////////////////
//
// Copyright Simon Donkers 27-1-2005
// www.simondonkers.com - gmmentor@simondonkers.com
// http://gamemaker.simondonkers.com/script/10
var x_spinner, y_spinner, min_value, max_value;
x_spinner := argument0
y_spinner := argument1
min_value := argument2
max_value := argument3
// place in the draw event
// value = the value initialise this variable your self!!!
// set 'treat uninitialised variables as value 0' to true
// example: spinner(5,5,0,255);
//
/////////////////////////////////////////////////////
y_spinner += 4; // To center in the grid
//x_pm = x_spinner coordinate plus and minus
x_pm := x_spinner + 10 + string_width(string(max_value));
//width_pm = the width and height of the plus and minus box
width_pm := 2.5 + string_height('1')/2;
//draw plusbox
draw_set_color(c_gray);
draw_rectangle(x_pm, y_spinner, x_pm + width_pm, y_spinner + width_pm, false);
draw_set_color(c_black);
draw_rectangle(x_pm, y_spinner, x_pm + width_pm, y_spinner + width_pm, true);
//draw minusbox
draw_set_color(c_gray);
draw_rectangle(x_pm, y_spinner + width_pm, x_pm + width_pm, y_spinner + 2*width_pm, false);
draw_set_color(c_black);
draw_rectangle(x_pm, y_spinner + width_pm, x_pm + width_pm, y_spinner + 2*width_pm, true);
// draw spinner box
draw_set_color(c_white);
draw_rectangle(x_spinner, y_spinner, x_pm, y_spinner + 2*width_pm, false);
draw_set_color(c_black);
draw_rectangle(x_spinner, y_spinner, x_pm, y_spinner + 2*width_pm, true);

draw_set_color(c_black);
draw_text(x_spinner + 5, y_spinner + 2, value);
//draw plus
draw_line(x_pm + width_pm/2, y_spinner + 2, x_pm + width_pm/2, y_spinner + width_pm - 2);
draw_line(x_pm + 2, y_spinner + width_pm/2, x_pm + width_pm - 2, y_spinner + width_pm/2);
//draw minus
draw_line(x_pm + 2,y_spinner + width_pm*1.5,x_pm + width_pm-2,y_spinner + width_pm*1.5);
current_date = date_current_datetime();
// Control sensitivity of spinner
if (not variable_local_exists("prev_date")) {
  prev_date := 0;
}

if (date_second_span(prev_date,current_date) < 0.08) {
  return value;
}
//if plus pressed
if (mouse_button = mb_left and value < max_value and mouse_x > x_pm and mouse_x < x_pm + width_pm and mouse_y > y_spinner and mouse_y < y_spinner + width_pm) {
  value += 1;
}
//minus pressed
if (mouse_button = mb_left and value > min_value and mouse_x > x_pm and mouse_x < x_pm + width_pm and mouse_y > y_spinner + width_pm and mouse_y < y_spinner + 2*width_pm) {
  value -= 1;
}
prev_date := current_date


