import * as API from "@/services/API";
import * as APIB from "@/services/APIB";
export default {
  async login(payload) {
    return API.apiClient.post("/loginchart", payload);
  },
  loginB(payload) {
    return API.apiClient.post("/loginchartb", payload);
  },
  testtoken(payload) {
    return APIB.apiClientB.post("/testtoken", payload);
  },
  logout() {
    return API.apiClient.post("/logout");
  },
  getAuthUser() {
    return API.apiClient.get("/api/auth/auth");
  },
};
