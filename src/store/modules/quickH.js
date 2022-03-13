export const namespaced = true;

export const state = {
  sl_a: 0,
  question_a: "",
  question_b: "",
  question_c: "",
  question_d: "",
  question_e: "",
  cb_a: false,
  cb_b: false,
  cb_c: false,
  cb_d: false,
  cb_e: false,
  cb_f: false,
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
  update_cb_a(state, cb_a) {
    state.cb_a = cb_a;
  },
  update_cb_b(state, cb_b) {
    state.cb_b = cb_b;
  },
  update_cb_c(state, cb_c) {
    state.cb_c = cb_c;
  },
  update_cb_d(state, cb_d) {
    state.cb_d = cb_d;
  },
  update_cb_e(state, cb_e) {
    state.cb_e = cb_e;
  },
  update_cb_f(state, cb_f) {
    state.cb_f = cb_f;
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
  cb_a: (state) => {
    return state.cb_a;
  },
  cb_b: (state) => {
    return state.cb_b;
  },
  cb_c: (state) => {
    return state.cb_c;
  },
  cb_d: (state) => {
    return state.cb_d;
  },
  cb_e: (state) => {
    return state.cb_e;
  },
  cb_f: (state) => {
    return state.cb_f;
  },
};
