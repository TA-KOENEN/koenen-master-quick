import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#FF0048",
        secondary: "#003895",
        accent: "#07C730",
        error: "#FF0048",
        info: "#FF0048",
        success: "#07C730",
        warning: "#2BA681",
        leftPanel: "#07C730",
        rightPanel: "#ffffff",
        textColor: "#000000",
        textColorLeft: "#000000",
        spec: "#003895",
      },
      dark: {
        primary: "#FF0048",
        secondary: "#003895",
        accent: "#07C730",
        error: "#FF0048",
        info: "#FF6C00",
        success: "#07C730",
        warning: "#2BA681",
        leftPanel: "#07C730",
        rightPanel: "#000000",
        textColor: "#ffffff",
        textColorLeft: "#ffffff",
        spec: "#FFEA00",
      },
    },
  },
});
