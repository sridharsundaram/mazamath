var txtfile, i, read, seq_num, prev_seq_num;

txtfile = file_text_open_read("sundar_kaand.dt");
global.num_story = 0;
prev_seq_num = -1;
for (i = 0; !file_text_eof(txtfile); i += 1) {
  read = file_text_read_string(txtfile);
  seq_num = real(string_copy(read, 0, 3));
  if (prev_seq_num + 1 != seq_num) {
    global.story[i,0] = '';
    global.story[i,1] = '';
    i += 1;
  }
  prev_seq_num = seq_num;
  global.story[i,0] = string_copy(read, 5, 2);
  global.story[i,1] = string_copy(read, 8, string_length(read));
  read = file_text_readln(txtfile);
}
file_text_close(txtfile);
global.num_story = i;
global.current_story = 0;

