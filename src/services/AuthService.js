import * as API from "@/services/API";

export default {
  async login(payload) {
    return API.apiClient.post("/loginchart", payload);
  },
  loginB(payload) {
    return API.apiClient.post("/loginchartb", payload);
  },
  logout() {
    return API.apiClient.post("/logout");
  },
  getAuthUser() {
    return API.apiClient.get("/api/auth/auth");
  },
  getInfo(payload) {
    return API.apiClient.post("/getInfoChart", payload);
  },
};
