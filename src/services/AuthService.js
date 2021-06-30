import * as API from "@/services/API";

export default {
  async login(payload) {
    return API.apiClient.post("/loginchart", payload);
  },
  loginB(payload) {
    return API.apiClient.post("/loginchartb", payload);
  },
  logout(payload) {
    return API.apiClient.post("/logoutchart", payload);
  },
  getAuthUser() {
    return API.apiClient.get("/api/auth/auth");
  },
  getInfo(payload) {
    return API.apiClient.post("/getInfoChart", payload);
  },
};
