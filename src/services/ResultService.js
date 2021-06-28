import axios from "axios";

export default {
  getResultA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartA", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartA", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartA", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartB", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartB", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartB", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartC", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartC", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartC", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartD", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartD", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartD", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartE", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartE", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartE", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartF", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartF", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartF", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartG", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartG", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartG", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartH", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartH", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartH", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartI", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartI", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartI", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartJ", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartJ", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartJ", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartK", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartK", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartK", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartL", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartL", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartL", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartM", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartM", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartM", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartN", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartN", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartN", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultO(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultChartO", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultO(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updateChartO", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportO(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportChartO", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
