var txtfile, i, read, state;
global.actors = ds_map_create();
ds_map_add(global.actors, "hn", spr_hanuman);
ds_map_add(global.actors, "tb", spr_sampati);
ds_map_add(global.actors, "rn", spr_ravana);
ds_map_add(global.actors, "st", spr_sita);

txtfile = file_text_open_read("game.dt");
// First state must be INTRO state in file
state = obj_model_controller.STATE_INTRO;
i = 0;
while (!file_text_eof(txtfile)) {
  read = file_text_read_string(txtfile);
  file_text_readln(txtfile);
  // Ignore comment lines
  if (string_copy(read, 1, 2) == '//') continue;
  // State line - pick up the state
  if (string_digits(read) == read) {
    global.state_end_counter[state] = i;
    state = real(string_digits(read));
    global.state_begin_counter[state] = i;
    continue;
  }
  global.game_text[i] = read;
  i += 1;
}
global.state_end_counter[state] = i;
global.state_begin_counter[obj_model_controller.STATE_DONE] = 0;
file_text_close(txtfile);

