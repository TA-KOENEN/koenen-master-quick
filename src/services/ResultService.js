import axios from "axios";

export default {
  getStart(payload) {
    return axios.post("/autoLoginFscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCode(payload) {
    return axios.post("/newCodeFscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },

  getReport(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportFscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
