var txtfile, i, read;

txtfile = file_text_open_read("lcmqs.txt");
for (i = 0; !file_text_eof(txtfile); i += 1) {
  read = file_text_read_string(txtfile);
  global.lcm_questions[i,0] = read;

  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "a";
  }
  global.lcm_questions[i,1] = read;

  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "b";
  }
  global.lcm_questions[i,2] = read;

  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "c";
  }
  global.lcm_questions[i,3] = read;

  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "d";
  }
  global.lcm_questions[i,4] = read;

  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "e";
  }
  global.lcm_questions[i,5] = read;

  read = file_text_readln(txtfile);
  read = file_text_readln(txtfile);
     
}
file_text_close(txtfile);
/*
txtfile = file_text_open_read("hcf.dt");
for (i = 0; !file_text_eof(txtfile); i += 1) {
  read = file_text_read_string(txtfile);
  global.hcf_questions[i] = read;
  read = file_text_readln(txtfile);
}
file_text_close(txtfile);

return 1;
*/

