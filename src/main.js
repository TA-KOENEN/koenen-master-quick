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
import TaNotInterested from "@/components/message/TaNotInterested";
Vue.component("ta-not-interested", TaNotInterested);
import TaNewCode from "@/components/message/TaNewCode";
Vue.component("ta-new-code", TaNewCode);
import taTextLeft from "@/components/text/TaTextLeft";
Vue.component("ta-text-left", taTextLeft);
import taSteps from "@/components/text/TaSteps";
Vue.component("ta-steps", taSteps);
import taDividerOne from "@/components/core/taDividerOne";
Vue.component("ta-divider-one", taDividerOne);
import TaStatement from "@/components/text/TaStatement";
Vue.component("ta-statement", TaStatement);
import TaBetweenText from "@/components/text/TaBetweenText";
Vue.component("ta-between-text", TaBetweenText);
import TaNoteModal from "@/components/text/TaNoteModal";
Vue.component("ta-note-modal", TaNoteModal);
import TaArea from "@/components/form/TaArea";
Vue.component("ta-area", TaArea);
import TaValArea from "@/components/form/TaValArea";
Vue.component("ta-val-area", TaValArea);
import TaErrorForm from "@/components/form/TaErrorForm";
Vue.component("ta-error-form", TaErrorForm);
import TaCheckBox from "@/components/form/TaCheckBox";
Vue.component("ta-checkbox", TaCheckBox);
import TaRadio from "@/components/form/TaRadio";
Vue.component("ta-radio", TaRadio);
import TaValInput from "@/components/form/TaValInput";
Vue.component("ta-val-input", TaValInput);
import TaInput from "@/components/form/TaInput";
Vue.component("ta-input", TaInput);
import TaBtnCont from "@/components/buttons/taBtnCont";
Vue.component("ta-btn-cont", TaBtnCont);
import TaBtnBack from "@/components/buttons/taBtnBack";
Vue.component("ta-btn-back", TaBtnBack);
import TaSliderFeeling from "@/components/form/TaSliderFeeling";
Vue.component("ta-slider-feeling", TaSliderFeeling);
import TaSliderRating from "@/components/form/TaSliderRating";
Vue.component("ta-slider-rating", TaSliderRating);
import taBtnYes from "@/components/buttons/taBtnYes";
Vue.component("ta-btn-yes", taBtnYes);
import taBtnNo from "@/components/buttons/taBtnNo";
Vue.component("ta-btn-no", taBtnNo);
import TaLeftIntroScreen from "@/components/start/TaLeftIntroScreen";
Vue.component("ta-left-intro-screen", TaLeftIntroScreen);
import taBtnNewCode from "@/components/buttons/taBtnNewCode";
Vue.component("ta-btn-new-code", taBtnNewCode);

import TaSecurityCode from "@/components/login/TaSecurityCode";
Vue.component("ta-security-code", TaSecurityCode);

import customDivider from "@/components/CustomDivider";
Vue.component("CustomDivider", customDivider);
import ToolbarAuth from "@/components/core/Toolbar";
Vue.component("ToolbarAuth", ToolbarAuth);

import ErrorReport from "@/components/core/errorReport";
Vue.component("error-report", ErrorReport);
import Report from "@/components/core/report";
Vue.component("report", Report);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
