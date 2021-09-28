import * as API from "@/services/API";

export default {
  async login(payload) {
    return API.apiClient.post("/loginlchart", payload);
  },
  loginB(payload) {
    return API.apiClient.post("/loginlchartb", payload);
  },
  loginFam(payload) {
    return API.apiClient.post("/getInfolChart", payload);
  },
  logout(payload) {
    return API.apiClient.post("/logoutlchart", payload);
  },
  getAuthUser() {
    return API.apiClient.get("/api/auth/auth");
  },
  getInfo(payload) {
    return API.apiClient.post("/getInfolChart", payload);
  },
};
