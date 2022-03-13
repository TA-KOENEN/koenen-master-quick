export const namespaced = true;

export const state = {
  sl_a: 5,
  sl_b: 5,
  sl_c: 5,
  sl_d: 5,
  sl_e: 5,
  sl_f: 5,
  question_a: "",
  question_b: "",
  question_c: "",
  question_d: "",
  question_e: "",
  text_a: null,
  text_b: null,
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
  update_sl_e(state, sl_e) {
    state.sl_e = sl_e;
  },
  update_sl_f(state, sl_f) {
    state.sl_f = sl_f;
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
  update_text_a(state, text_a) {
    state.text_a = text_a;
  },
  update_text_b(state, text_b) {
    state.text_b = text_b;
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
  sl_e: (state) => {
    return state.sl_e;
  },
  sl_f: (state) => {
    return state.sl_f;
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
  text_a: (state) => {
    return state.text_a;
  },
  text_b: (state) => {
    return state.text_b;
  },
};
