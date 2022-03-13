import Vue from "vue";
import Vuex from "vuex";
import * as auth from "@/store/modules/Auth";
import * as quick from "@/store/modules/Quick";
import * as quickA from "@/store/modules/quickA";
import * as quickB from "@/store/modules/quickB";
import * as quickC from "@/store/modules/quickC";
import * as quickD from "@/store/modules/quickD";
import * as quickE from "@/store/modules/quickE";
import * as quickH from "@/store/modules/quickH";
import * as quickI from "@/store/modules/quickI";
import * as quickJ from "@/store/modules/quickJ";
import * as quickK from "@/store/modules/quickK";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    quick,
    quickA,
    quickB,
    quickC,
    quickD,
    quickE,
    quickH,
    quickI,
    quickJ,
    quickK,
  },
});
