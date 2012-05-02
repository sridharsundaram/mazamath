// State Transition
with obj_model_controller {
  switch(state) {
    case STATE_INTRO: return STATE_STORY;
    case STATE_ENCOURAGE: return STATE_STORY;
    case STATE_STORY: return STATE_TRAINING;
    case STATE_TRAINING: return STATE_PROBLEM;
    case STATE_PROBLEM: return STATE_PROBLEM; // Next transition by button
    case STATE_HCF_CORRECT:
    case STATE_HCF_WRONG:
    case STATE_LCM_CORRECT:
    case STATE_LCM_WRONG: return STATE_DONE;
  }
  return STATE_DONE;
}
