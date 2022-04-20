import * as API from "@/services/API";

export default {
  loginA(payload) {
    return API.apiClient.post("/loginAscan", payload);
  },
  loginB(payload) {
    return API.apiClient.post("/loginBscan", payload);
  },
  loginC(payload) {
    return API.apiClient.post("/loginCscan", payload);
  },
  loginD(payload) {
    return API.apiClient.post("/loginDscan", payload);
  },
  loginE(payload) {
    return API.apiClient.post("/loginEscan", payload);
  },
  loginH(payload) {
    return API.apiClient.post("/loginHscan", payload);
  },
  loginI(payload) {
    return API.apiClient.post("/loginIscan", payload);
  },
  loginJ(payload) {
    return API.apiClient.post("/loginJscan", payload);
  },
  loginK(payload) {
    return API.apiClient.post("/loginKscan", payload);
  },
  loginL(payload) {
    return API.apiClient.post("/loginLscan", payload);
  },

  logout(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutCscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutA(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutAscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutB(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutBscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutC(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutCscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutD(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutDscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutE(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutEscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutH(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutHscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutI(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutIscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutJ(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutJscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutK(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutKscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  logoutL(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutLscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  notIntA(payload) {
    return API.apiClient.post("/notIntAscan", payload);
  },
  notIntB(payload) {
    return API.apiClient.post("/notIntBscan", payload);
  },
  notIntC(payload) {
    return API.apiClient.post("/notIntCscan", payload);
  },
  notIntD(payload) {
    return API.apiClient.post("/notIntDscan", payload);
  },
  notIntE(payload) {
    return API.apiClient.post("/notIntEscan", payload);
  },
  notIntH(payload) {
    return API.apiClient.post("/notIntHscan", payload);
  },
  notIntI(payload) {
    return API.apiClient.post("/notIntIscan", payload);
  },
  notIntJ(payload) {
    return API.apiClient.post("/notIntJscan", payload);
  },
  notIntK(payload) {
    return API.apiClient.post("/notIntKscan", payload);
  },
  notIntL(payload) {
    return API.apiClient.post("/notIntLscan", payload);
  },
};
