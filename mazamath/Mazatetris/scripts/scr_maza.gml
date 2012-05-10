{
draw_set_font(fnt_maza);
draw_set_color(c_blue);
draw_set_halign(fa_center);
draw_text_ext(room_width/2,100, 'What is the LCM of 5,6 ? Press the right key a) 11  b) 30 c) 60 d) 12',30, 150 );
screen_refresh() ;
keyboard_wait();
io_clear();
global.correct_answer="b";

// Adding MAZA CODE

}
