import * as APIB from "@/services/APIB";

export default {
  getStatementA() {
    return APIB.apiClientB.get("/nlStatementsChartA");
  },
  getStatementB() {
    return APIB.apiClientB.get("/nlStatementsChartB");
  },
  getStatementC() {
    return APIB.apiClientB.get("/nlStatementsChartC");
  },
  getStatementD() {
    return APIB.apiClientB.get("/nlStatementsChartD");
  },
};
