// Check cheat codes
if (keyboard_check(vk_control) && room == Modelling_Room) { // To end model session
  obj_model_controller.state = obj_model_controller.STATE_DONE;
  show_message('State done');
} else if (keyboard_check(vk_control) && room == lcm) { // To end game with success
  show_message("Forcing success");
  // If LCM found, take success action
  if (global.problem_type[global.num_bridge_segments] == global.LCM) {
    var meet;
    meet = obj_player_A.jump * obj_player_B.jump * global.GRID_SPACE_WIDTH;
    obj_player_A.x += meet;
    obj_player_B.x += meet;
    global.problem_value[global.num_bridge_segments] = obj_player_A.jump * obj_player_B.jump;
    with obj_player_B end_lcm();
  } else if (global.problem_type[global.num_bridge_segments] == global.GCD) {
    obj_player_B.has_key = true;
    obj_player_B.x = obj_treasure.x;
    obj_player_B.jump = 1;
    with obj_player_B end_gcd();
  }
}

