// This is called once at the start to load some sample (100) generated questions for LCM and HCF

var txtfile, i, j, read;

// Read the lcm text file.
// The file is hardcoded of the form:
// Question
// Choice A, B, C, D, E [Correct choice starts with Ans:]


txtfile = file_text_open_read("lcmqs.txt");
for (i = 0; !file_text_eof(txtfile); i += 1) {
  // The question
  read = file_text_read_string(txtfile);
  global.lcm_questions[i,0] = read;

  // Choices
  for (j = 1; j < 6; j += 1) {
    read = file_text_readln(txtfile);
    read = file_text_read_string(txtfile);
    if (string_copy(read,0,4) == "Ans:"){
      read = string_copy(read,5,string_length(read));
      global.lcm_questions[i,6] = chr(j - 1 + ord('a'));
    }
    global.lcm_questions[i,j] = read;
  }

  read = file_text_readln(txtfile);  
  // Skip a blank line [Between two questions]
  read = file_text_readln(txtfile);
}
file_text_close(txtfile);


// Read the hcf text file.
// The file is hardcoded of the form:
// Question
// Choice A, B, C, D, E [Correct choice starts with Ans:]

txtfile = file_text_open_read("gcdqs.txt");
for (i = 0; !file_text_eof(txtfile); i += 1) {
  // The question
  read = file_text_read_string(txtfile);
  global.gcd_questions[i,0] = read;

  // Choices
  for (j = 1; j < 6; j += 1) {
    read = file_text_readln(txtfile);
    read = file_text_read_string(txtfile);
    if (string_copy(read,0,4) == "Ans:"){
      read = string_copy(read,5,string_length(read));
      global.gcd_questions[i,6] = chr(j - 1 + ord('a'));
    }
    global.gcd_questions[i,j] = read;
  }

  read = file_text_readln(txtfile);
  // Skip a blank line [Between two questions]
  read = file_text_readln(txtfile);
}
file_text_close(txtfile);

