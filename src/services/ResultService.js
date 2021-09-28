import axios from "axios";

export default {
  getResultA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartA", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartA", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportA(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartA", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartB", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartB", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportB(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartB", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartC", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartC", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportC(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartC", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartD", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartD", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportD(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartD", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartE", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartE", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportE(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartE", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartF", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartF", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportF(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartF", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartG", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartG", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportG(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartG", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartH", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartH", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportH(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartH", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartI", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartI", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportI(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartI", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartJ", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartJ", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportJ(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartJ", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartK", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartK", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportK(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartK", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartL", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartL", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportL(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartL", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartM", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartM", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportM(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartM", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartN", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartN", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportN(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartN", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getResultO(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/resultlChartO", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveResultO(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/updatelChartO", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportO(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/reportlChartO", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
