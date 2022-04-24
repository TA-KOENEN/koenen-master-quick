import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#DA291C",
        secondary: "#0033A0",
        accent: "#0033A0",
        error: "#DA291C",
        info: "#FF6C00",
        success: "#0033A0",
        warning: "#2BA681",
        leftPanel: "#CFD8DC",
        rightPanel: "#ffffff",
        roodt: "#D01F40",
        spec: "#003895",
      },
      dark: {
        primary: "#DA291C",
        secondary: "#0033A0",
        accent: "#0033A0",
        error: "#DA291C",
        info: "#FF6C00",
        success: "#0033A0",
        warning: "#2BA681",
        leftPanel: "#757575",
        rightPanel: "#000000",
        roodt: "#D01F40",
        spec: "#FFEA00",
      },
    },
  },
});
