// This is called once at the start to load some sample (100) generated questions for LCM and HCF

var txtfile, i, read;

// Read the lcm text file.
// The file is hardcoded of the form:
// Question
// Choice A, B, C, D, E [Correct choice starts with Ans:]


txtfile = file_text_open_read("lcmqs.txt");
for (i = 0; !file_text_eof(txtfile); i += 1) {

  // The question
  read = file_text_read_string(txtfile);
  global.lcm_questions[i,0] = read;

  // Choice A
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "a";
  }
  global.lcm_questions[i,1] = read;

  // Choice B
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "b";
  }
  global.lcm_questions[i,2] = read;

  // Choice C
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "c";
  }
  global.lcm_questions[i,3] = read;

  // Choice D
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "d";
  }
  global.lcm_questions[i,4] = read;

  //Choice E
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.lcm_questions[i,6] = "e";
  }
  global.lcm_questions[i,5] = read;

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

  // Choice A
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.gcd_questions[i,6] = "a";
  }
  global.gcd_questions[i,1] = read;

  // Choice B
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.gcd_questions[i,6] = "b";
  }
  global.gcd_questions[i,2] = read;

  // Choice C
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.gcd_questions[i,6] = "c";
  }
  global.gcd_questions[i,3] = read;

  // Choice D
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.gcd_questions[i,6] = "d";
  }
  global.gcd_questions[i,4] = read;

  //Choice E
  read = file_text_readln(txtfile);
  read = file_text_read_string(txtfile);
  if (string_copy(read,0,4) == "Ans:"){
    read = string_copy(read,5,string_length(read));
    global.gcd_questions[i,6] = "e";
  }
  global.gcd_questions[i,5] = read;

  read = file_text_readln(txtfile);
  
  // Skip a blank line [Between two questions]
  read = file_text_readln(txtfile);
   
}
file_text_close(txtfile);

