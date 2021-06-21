import * as APIB from "@/services/APIB";

export default {
  getResultA(payload) {
    return APIB.apiClientB.post("/resultChartA", payload);
  },
  saveResultA(payload) {
    return APIB.apiClientB.post("/updateChartA", payload);
  },
  getReportA(payload) {
    return APIB.apiClientB.post("/reportChartA", payload);
  },
  getResultB(payload) {
    return APIB.apiClientB.post("/resultChartB", payload);
  },
  saveResultB(payload) {
    return APIB.apiClientB.post("/updateChartB", payload);
  },
  getReportB(payload) {
    return APIB.apiClientB.post("/reportChartB", payload);
  },
  getResultC(payload) {
    return APIB.apiClientB.post("/resultChartC", payload);
  },
  saveResultC(payload) {
    return APIB.apiClientB.post("/updateChartC", payload);
  },
  getReportC(payload) {
    return APIB.apiClientB.post("/reportChartC", payload);
  },
  getResultD(payload) {
    return APIB.apiClientB.post("/resultChartD", payload);
  },
  saveResultD(payload) {
    return APIB.apiClientB.post("/updateChartD", payload);
  },
  getReportD(payload) {
    return APIB.apiClientB.post("/reportChartD", payload);
  },
};
