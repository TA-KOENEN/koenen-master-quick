import axios from "axios";

export default {
  getStartA(payload) {
    return axios.post("/autoLoginAscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getStartB(payload) {
    return axios.post("/autoLoginBscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getStartC(payload) {
    return axios.post("/autoLoginCscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getStartD(payload) {
    return axios.post("/autoLoginDscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getStartE(payload) {
    return axios.post("/autoLoginEscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getStartH(payload) {
    return axios.post("/autoLoginHscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getStartI(payload) {
    return axios.post("/autoLoginIscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getStartJ(payload) {
    return axios.post("/autoLoginJscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getStartK(payload) {
    return axios.post("/autoLoginKscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },

  getNewCodeA(payload) {
    return axios.post("/newCodeAscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCodeB(payload) {
    return axios.post("/newCodeBscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCodeC(payload) {
    return axios.post("/newCodeCscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCodeD(payload) {
    return axios.post("/newCodeDscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCodeE(payload) {
    return axios.post("/newCodeEscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCodeH(payload) {
    return axios.post("/newCodeHscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCodeI(payload) {
    return axios.post("/newCodeIscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCodeJ(payload) {
    return axios.post("/newCodeJscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCodeK(payload) {
    return axios.post("/newCodeKscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },

  getReportA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportAscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportBscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportCscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportDscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportEscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportHscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportIscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportJscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportKscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
