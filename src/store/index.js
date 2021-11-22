import Vue from "vue";
import Vuex from "vuex";
import * as auth from "@/store/modules/Auth";
import * as quick from "@/store/modules/Quick";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    quick,
  },
});
