import * as APIB from "@/services/APIB";

export default {
  getStatus(payload) {
    return APIB.apiClientB.post("/modulesChart", payload);
  },
};
