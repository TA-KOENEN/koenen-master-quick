export const namespaced = true;

export const state = {
  sl_a: 0,
  question_a: "",
  question_b: "",
  question_c: "",
  question_d: "",
  question_e: "",
  question_f: "",
  question_g: "",
};
export const mutations = {
  update_sl_a(state, sl_a) {
    state.sl_a = sl_a;
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
  update_question_d(state, question_d) {
    state.question_d = question_d;
  },
  update_question_e(state, question_e) {
    state.question_e = question_e;
  },
  update_question_f(state, question_f) {
    state.question_f = question_f;
  },
  update_question_g(state, question_g) {
    state.question_g = question_g;
  },
};
export const getters = {
  sl_a: (state) => {
    return state.sl_a;
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
  question_d: (state) => {
    return state.question_d;
  },
  question_e: (state) => {
    return state.question_e;
  },
  question_f: (state) => {
    return state.question_f;
  },
  question_g: (state) => {
    return state.question_g;
  },
};
