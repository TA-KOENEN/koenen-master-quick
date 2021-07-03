<template>
  <div>
    <Toolbar />
    <div v-if="loading">
      <loading />
    </div>
    <div v-if="saving">
      <saving />
    </div>
    <div class="ma-0 pa-0" v-if="!loading">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="accent d-flex justify-center">
          <v-card class="ma-10 transparent" outlined width="100%">
            <div v-if="memberData.step === 0">
              {{ textIntro[0].header }}
              <br /><br /><br /><br />
              {{ textIntro[0].texta }}
              <br /><br /><br />
              {{ textIntro[0].textb }}
              <br /><br /><br />
              {{ textIntro[0].textc }}
              <br /><br /><br />
              {{ textIntro[0].textd }}
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <div>'</div>
              </div>
            </div>
            <div v-if="memberData.step === 1">
              {{ textIntro[1].header }}
              <br /><br />
              {{ textIntro[1].texta }}
              <br /><br />
              {{ textIntro[1].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 2">
              {{ textIntro[2].header }}
              <br /><br />
              {{ textIntro[2].texta }}
              <br /><br />
              {{ textIntro[2].textb }}
              <br /><br />
              {{ textIntro[2].textc }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 3">
              {{ textIntro[3].header }}
              <br /><br />
              {{ textIntro[3].texta }}
              <br /><br />
              {{ textIntro[3].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 4">
              {{ textIntro[4].header }}
              <br /><br />
              {{ textIntro[4].texta }}
              <br /><br />
              {{ textIntro[4].textb }}
              <br /><br />
            </div>

            <div v-if="memberData.step === 5">
              {{ textIntro[5].header }}
              <br /><br />
              {{ textIntro[5].texta }}
              <br /><br />
              {{ textIntro[5].textb }}
              <br /><br />
              {{ textIntro[5].textc }}
              <br /><br />
              {{ textIntro[5].textd }}
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <div>.</div>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-card class="ma-10 transparent" outlined width="100%">
            <step-text
              :stepText="textIntro[0].header"
              :number="0"
              class="mb-5"
              :kleur="colorStep0"
            />
            <div id="step0" v-if="memberData.step === 0">
              <vimeo-player
                :video-id="vimeo.module_e"
                class="embed-container"
                :options="{ responsive: true }"
              ></vimeo-player>
              <v-row class="mt-10 mb-10">
                <btn-stop :on-click="stopModule" />
                <v-spacer />
                <btnnext :on-click="endStepIntro" />
              </v-row>
            </div>
            <step-text
              :stepText="textIntro[1].header"
              :number="1"
              class="mb-5"
              :kleur="colorStep1"
            />

            <div id="step1" v-if="memberData.step === 1">
              <CustomDivider />
              <StatementText :statement="textExample[0].question_a" />
              <dis-area v-model="textExample[0].answer_a" />
              <CustomDivider />
              <StatementText :statement="textExample[0].question_b" />
              <dis-area v-model="textExample[0].answer_b" />
              <CustomDivider />
              <StatementText :statement="textExample[0].question_c" />
              <dis-area v-model="textExample[0].answer_c" />
              <CustomDivider />
              <StatementText :statement="textExample[0].question_d" />
              <dis-area v-model="textExample[0].answer_d" />
              <CustomDivider />
              <v-row class="mt-10">
                <v-spacer />
                <btnback :on-click="backStep" />
                <btnnext :on-click="endStepA" />
              </v-row>
              <v-row class="mb-10">
                <btn-stop :on-click="stopModule" />
              </v-row>
            </div>
            <step-text
              :stepText="textIntro[2].header"
              :number="2"
              class="mb-5"
              :kleur="colorStep2"
            />
            <div id="step2" v-if="memberData.step === 2">
              <CustomDivider />
              <StatementText :statement="textExample[1].question_a" />
              <dis-area v-model="textExample[1].answer_a" />
              <CustomDivider />
              <StatementText :statement="textExample[1].question_b" />
              <dis-area v-model="textExample[1].answer_b" />
              <CustomDivider />
              <StatementText :statement="textExample[1].question_c" />
              <dis-area v-model="textExample[1].answer_c" />
              <CustomDivider />
              <StatementText :statement="textExample[1].question_d" />
              <dis-area v-model="textExample[1].answer_d" />
              <CustomDivider />
              <v-row class="mt-10">
                <v-spacer />
                <btnback :on-click="backStep" />
                <btnnext :on-click="endStepB" />
              </v-row>
              <v-row class="mb-10">
                <btn-stop :on-click="stopModule" />
              </v-row>
            </div>
            <step-text
              :stepText="textIntro[3].header"
              :number="3"
              class="mb-5"
              :kleur="colorStep3"
            />
            <div id="step3" v-if="memberData.step === 3">
              <v-form v-model="valid" ref="form">
                <CustomDivider />
                <StatementText :statement="Statements[0].statement" />
                <en-area v-model="memberData.question_a" />
                <CustomDivider />
                <StatementText :statement="Statements[1].statement" />
                <en-area v-model="memberData.question_b" />
                <CustomDivider />
                <StatementText :statement="Statements[2].statement" />
                <en-area v-model="memberData.question_c" />
                <CustomDivider />
                <StatementText :statement="Statements[3].statement" />
                <en-area v-model="memberData.question_d" />
                <CustomDivider />
                <StatementText :statement="Statements[4].statement" />
                <en-area v-model="memberData.question_e" />
                <CustomDivider />
                <StatementText :statement="Statements[5].statement" />
                <en-area v-model="memberData.question_f" />
                <CustomDivider />
                <div v-if="!valid" class="primary--text">
                  Let op u heeft het maximaal aantal tekens overschreden
                </div>
                <v-row class="mt-10">
                  <v-spacer />
                  <btnback :on-click="backStep" />
                  <v-btn
                    small
                    @click="endStepC"
                    :disabled="!valid"
                    :class="{ accent: valid, disabled: !valid }"
                    >Verder</v-btn
                  >
                </v-row>
                <v-row class="mb-10">
                  <btn-stop :on-click="stopModule" />
                </v-row>
              </v-form>
            </div>
            <step-text
              :stepText="textIntro[4].header"
              :number="4"
              class="mb-5"
              :kleur="colorStep4"
            />
            <div id="step4" v-if="memberData.step === 4">
              <v-form v-model="validB" ref="formB">
                <CustomDivider />
                <StatementText :statement="Statements[0].statement" />
                <en-area v-model="memberData.question_g" />
                <CustomDivider />
                <StatementText :statement="Statements[1].statement" />
                <en-area v-model="memberData.question_h" />
                <CustomDivider />
                <StatementText :statement="Statements[2].statement" />
                <en-area v-model="memberData.question_i" />
                <CustomDivider />
                <StatementText :statement="Statements[3].statement" />
                <en-area v-model="memberData.question_j" />
                <CustomDivider />
                <StatementText :statement="Statements[4].statement" />
                <en-area v-model="memberData.question_k" />
                <CustomDivider />
                <StatementText :statement="Statements[5].statement" />
                <en-area v-model="memberData.question_l" />
                <CustomDivider />
                <div v-if="!validB" class="primary--text">
                  Let op u heeft het maximaal aantal tekens overschreden
                </div>
                <v-row class="mt-10">
                  <v-spacer />
                  <btnback :on-click="backStep" />
                  <v-btn
                    small
                    @click="endStepC"
                    :disabled="!validB"
                    :class="{ accent: validB, disabled: !validB }"
                    >Verder</v-btn
                  >
                </v-row>
                <v-row class="mb-10">
                  <btn-stop :on-click="stopModule" />
                </v-row>
              </v-form>
            </div>

            <step-text
              :stepText="textIntro[5].header"
              :number="5"
              class="mb-5"
              :kleur="colorStep5"
            />
            <div id="step6" v-if="memberData.step === 5">
              <CustomDivider />
              <v-row class="mt-10 mb-10 justify-center">
                <v-btn
                  color="info"
                  x-large
                  :disabled="disableBtn"
                  @click="getReport"
                  >rapportage</v-btn
                >
              </v-row>
              <CustomDivider />
              <v-row class="mt-10 mb-10">
                <btnback :on-click="backStep" />
                <btn-stop :on-click="endModule" />
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Toolbar from "@/components/core/Toolbar";
import textData from "@/text/textE.json";
import textExtra from "@/text/moduleExtra.json";
import vimeoData from "@/text/vimeo.json";
import Loading from "@/components/core/loading";
import StatementService from "@/services/StatementService";
import ResultService from "@/services/ResultService";
import StepText from "@/components/stepText";
import Btnnext from "@/components/BtnNext";
import StatementText from "@/components/StatementText";
import Btnback from "@/components/BtnBack";
import CustomDivider from "@/components/CustomDivider";
import BtnStop from "@/components/BtnStop";
import Saving from "@/components/core/saving";
import disArea from "@/components/mod5/disArea";
import enArea from "@/components/mod5/enArea";
export default {
  components: {
    Saving,
    BtnStop,
    CustomDivider,
    Btnback,
    StatementText,
    Btnnext,
    StepText,
    Loading,
    Toolbar,
    enArea,
    disArea,
  },
  data() {
    return {
      valid: true,
      validB: true,
      disableBtn: false,
      valid2: false,
      valid3: false,
      valid4: false,
      colorStep0: "accent",
      colorStep1: "accent",
      colorStep2: "accent",
      colorStep3: "accent",
      colorStep4: "accent",
      colorStep5: "accent",
      colorStep6: "accent",
      colorStep7: "accent",
      colorStep8: "accent",
      stap: 0,
      saving: false,
      loading: false,
      loading1: false,
      error: null,
      kel1: "ja",
      kel2: "nee",
      kel3: "wellicht",
      vimeo: vimeoData,
      dataext: null,
      textIntro: textData,
      textExample: textExtra,
      memberData: {
        sl_a: null,
        sl_b: null,
        sl_c: null,
        sl_d: null,
        sl_e: null,
        sl_f: null,
        sl_g: null,
        sl_h: null,
        sl_i: null,
        sl_j: null,
        sl_k: null,
        sl_l: null,
        sl_m: null,
        sl_n: null,
        sl_o: null,
        sl_p: null,
        sl_q: null,
        sl_r: null,
        sl_s: null,
        sl_t: null,
        sl_u: null,
        sl_v: null,
        sl_w: null,
        sl_x: null,
        sl_y: null,
        sl_z: null,
        sl_za: null,
        sl_zb: null,
        sl_zc: null,
        ready_a: null,
        ready_b: null,
        ready_c: null,
        ready_d: null,
        ready_e: null,
        ready_f: null,
        ready_g: null,
        remark_a: "",
        remark_b: "",
        remark_c: "",
        remark_d: "",
        remark_e: "",
        remark_f: "",
      },
      persData: {
        first_name: "",
        last_name: "",
      },
      Statements: null,
    };
  },
  methods: {
    async endModule() {
      this.memberData.step = 0;
      await this.saveResults();
      await this.$router.push({ name: "Modules" });
    },

    stopModule() {
      this.$router.push({ name: "Modules" });
    },
    async backStep() {
      await this.$vuetify.goTo(0);
      this.memberData.step--;
    },
    async endStepIntro() {
      await this.$vuetify.goTo(0);
      this.memberData.step++;
    },
    async endStepA() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepB() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepC() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepD() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepE() {
      await this.$vuetify.goTo(20);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepF() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    saveResults() {
      const payload = {
        email: this.email,
        question_a: this.memberData.question_a,
        question_b: this.memberData.question_b,
        question_c: this.memberData.question_c,
        question_d: this.memberData.question_d,
        question_e: this.memberData.question_e,
        question_f: this.memberData.question_f,
        question_g: this.memberData.question_g,
        question_h: this.memberData.question_h,
        question_i: this.memberData.question_i,
        question_j: this.memberData.question_j,
        question_k: this.memberData.question_k,
        question_l: this.memberData.question_l,
        ready_a: this.memberData.ready_a,
        ready_b: this.memberData.ready_b,
        ready_c: this.memberData.ready_c,
        step: this.memberData.step,
        remark_a: this.memberData.remark_a,
        remark_b: this.memberData.remark_b,
      };
      this.saving = true;
      ResultService.saveResultE(payload).then(() => {
        console.log("saved answers");
        this.saving = false;
      });
    },

    getReport() {
      const payload = {
        email: this.email,
      };
      this.disableBtn = true;
      // eslint-disable-next-line no-undef
      EventBus.$emit("report", true);
      ResultService.getReportE(payload)
        .then(() => {})
        .finally(() => {
          this.disableBtn = false;
        });
    },

    getStatement() {
      this.loading = true;
      StatementService.getStatementE().then((response) => {
        console.log("statements terug");
        this.Statements = response.data.data;
        this.loading = false;
      });
    },
    getData() {
      const payload = {
        email: this.email,
      };
      this.loading1 = true;
      ResultService.getResultE(payload).then((response) => {
        console.log("dataklant terug");
        this.memberData = response.data.data.efsmodule;
        this.loading1 = false;
      });
    },
  },
  watch: {
    "memberData.step": function () {
      if (this.memberData.step === 0) {
        this.colorStep0 = "info";
      } else if (this.memberData.step === 1) {
        this.colorStep0 = "accent";
        this.colorStep1 = "info";
        this.colorStep2 = "accent";
      } else if (this.memberData.step === 2) {
        this.colorStep1 = "accent";
        this.colorStep2 = "info";
        this.colorStep3 = "accent";
        this.memberData.ready_a = true;
      } else if (this.memberData.step === 3) {
        this.colorStep2 = "accent";
        this.colorStep3 = "info";
        this.colorStep4 = "accent";
        this.memberData.ready_b = true;
      } else if (this.memberData.step === 4) {
        this.colorStep3 = "accent";
        this.colorStep4 = "info";
        this.colorStep5 = "accent";
        this.memberData.ready_c = true;
      } else if (this.memberData.step === 5) {
        this.colorStep4 = "accent";
        this.colorStep5 = "info";
        this.colorStep6 = "accent";
        this.memberData.ready_d = true;
      } else if (this.memberData.step === 6) {
        this.colorStep5 = "accent";
        this.colorStep6 = "info";
        this.colorStep7 = "accent";
        this.memberData.ready_e = true;
      } else if (this.memberData.step === 7) {
        this.colorStep6 = "accent";
        this.colorStep7 = "info";
        this.memberData.ready_f = true;
      }
    },
  },

  computed: {
    ...mapGetters("auth", ["email"]),
  },
  created() {
    this.getStatement();
    this.getData();
  },
};
</script>
