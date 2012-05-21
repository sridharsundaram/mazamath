var correct_state, incorrect_state, is_correct;
is_correct = argument0;
correct_state = argument1;
incorrect_state = argument2;

if (is_correct){
  sound_play(snd_celebrate);
  with instance_create(self.x, self.y, obj_delta_score) {
    self.delta_score = 100;
  }
  obj_model_controller.state = correct_state;
} else {
  sound_play(snd_explosion);
  with instance_create(self.x, self.y, obj_explosion) {
    self.delta_health = 2;
  }
  obj_model_controller.state = incorrect_state;
}
with obj_lcm { instance_destroy();}
with obj_hcf { instance_destroy();}
obj_whiteboard.counter = global.state_begin_counter[obj_model_controller.state];
obj_model_controller.alarm[0] = 100;

