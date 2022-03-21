import Vue from "vue";
import Vuex from "vuex";
import * as auth from "@/store/modules/Auth";
import * as quickAll from "@/store/modules/quickAll";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    quickAll,
  },
});
