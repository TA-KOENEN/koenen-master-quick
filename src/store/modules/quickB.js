export const namespaced = true;

export const state = {
  sl_a: 0,
  sl_b: 0,
  sl_c: 0,
  sl_d: 0,
  question_a: "",
  question_b: "",
  question_c: "",
};
export const mutations = {
  update_sl_a(state, sl_a) {
    state.sl_a = sl_a;
  },
  update_sl_b(state, sl_b) {
    state.sl_b = sl_b;
  },
  update_sl_c(state, sl_c) {
    state.sl_c = sl_c;
  },
  update_sl_d(state, sl_d) {
    state.sl_d = sl_d;
  },
  update_question_a(state, question_a) {
    state.question_a = question_a;
  },
  update_question_b(state, question_b) {
    state.question_b = question_b;
  },
  update_question_c(state, question_c) {
    state.question_c = question_c;
  },
};
export const getters = {
  sl_a: (state) => {
    return state.sl_a;
  },
  sl_b: (state) => {
    return state.sl_b;
  },
  sl_c: (state) => {
    return state.sl_c;
  },
  sl_d: (state) => {
    return state.sl_d;
  },
  question_a: (state) => {
    return state.question_a;
  },
  question_b: (state) => {
    return state.question_b;
  },
  question_c: (state) => {
    return state.question_c;
  },
};
