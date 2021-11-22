import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vueVimeoPlayer from "vue-vimeo-player";
import "./vee-validate";
import "animate.css";
window.EventBus = new Vue();
Vue.config.productionTip = false;
Vue.use(vueVimeoPlayer);
import { ValidationObserver } from "vee-validate";
Vue.component("ValidationObserver", ValidationObserver);
import { ValidationProvider } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);

import BtnCont from "@/components/buttons/BtnCont";
Vue.component("btn-continue", BtnCont);
import BtnBack from "@/components/buttons/BtnBack";
Vue.component("btn-back", BtnBack);
import BtnReport from "@/components/buttons/BtnReport";
Vue.component("btn-report", BtnReport);

import baseRadio from "@/components/input/BaseRadio";
Vue.component("base-radio", baseRadio);
import BaseCheck from "@/components/input/BaseCheck";
Vue.component("base-check", BaseCheck);
import TaSlider2 from "@/components/core/ta-slider2";
Vue.component("ta-slider2", TaSlider2);
import TaSlider3 from "@/components/core/ta-slider3";
Vue.component("ta-slider3", TaSlider3);
import BaseValArea from "@/components/input/BaseValArea";
Vue.component("base-val-area", BaseValArea);

import customDivider from "@/components/CustomDivider";
Vue.component("CustomDivider", customDivider);
import ToolbarAuth from "@/components/core/Toolbar";
Vue.component("ToolbarAuth", ToolbarAuth);

import textLeft from "@/components/text-left/textLeft";
Vue.component("text-left", textLeft);
import StatementText from "@/components/StatementText";
Vue.component("StatementText", StatementText);
import StepText from "@/components/stepText";
Vue.component("step-text", StepText);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
