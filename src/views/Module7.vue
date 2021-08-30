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
            </div>
            <div v-if="memberData.step === 6">
              {{ textIntro[6].header }}
              <br /><br />
              {{ textIntro[6].texta }}
              <br /><br />
              {{ textIntro[6].textb }}
              <br /><br />
              {{ textIntro[6].textc }}
              <br /><br />
              {{ textIntro[6].textd }}
            </div>
            <div v-if="memberData.step === 7">
              {{ textIntro[7].header }}
              <br /><br />
              {{ textIntro[7].texta }}
              <br /><br />
              <br /><br />
              {{ textIntro[7].textb }}
              <br /><br />
              {{ textIntro[7].textc }}
              <br /><br />
              {{ textIntro[7].textd }}
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
                :video-id="vimeo.module_g"
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
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[0].statement"
                    :note="Statements[0].note"
                    :comment="Statements[0].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_a" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[1].statement"
                    :note="Statements[1].note"
                    :comment="Statements[1].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_b" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[2].statement"
                    :note="Statements[2].note"
                    :comment="Statements[2].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_c" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[3].statement"
                    :note="Statements[3].note"
                    :comment="Statements[3].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_d" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_a"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepA)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[2].header"
              :number="2"
              class="mb-5"
              :kleur="colorStep2"
            />
            <div id="step2" v-if="memberData.step === 2">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[4].statement"
                    :note="Statements[4].note"
                    :comment="Statements[4].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_e" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[5].statement"
                    :note="Statements[5].note"
                    :comment="Statements[5].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_f" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[6].statement"
                    :note="Statements[6].note"
                    :comment="Statements[6].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_g" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[7].statement"
                    :note="Statements[7].note"
                    :comment="Statements[7].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_h" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[8].statement"
                    :note="Statements[8].note"
                    :comment="Statements[8].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_i" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_b"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepB)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[3].header"
              :number="3"
              class="mb-5"
              :kleur="colorStep3"
            />
            <div id="step3" v-if="memberData.step === 3">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[9].statement"
                    :note="Statements[9].note"
                    :comment="Statements[9].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_j" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[10].statement"
                    :note="Statements[10].note"
                    :comment="Statements[10].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_k" />
                  <StatementText
                    :statement="Statements[11].statement"
                    :note="Statements[11].note"
                    :comment="Statements[11].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_l" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[12].statement"
                    :note="Statements[12].note"
                    :comment="Statements[12].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_m" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_c"
                  />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepC)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[4].header"
              :number="4"
              class="mb-5"
              :kleur="colorStep4"
            />
            <div id="step4" v-if="memberData.step === 4">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[13].statement"
                    :note="Statements[13].note"
                    :comment="Statements[13].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_n" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[14].statement"
                    :note="Statements[14].note"
                    :comment="Statements[14].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_o" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[15].statement"
                    :note="Statements[15].note"
                    :comment="Statements[15].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_p" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[16].statement"
                    :note="Statements[16].note"
                    :comment="Statements[16].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_q" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[17].statement"
                    :note="Statements[17].note"
                    :comment="Statements[17].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_r" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[18].statement"
                    :note="Statements[18].note"
                    :comment="Statements[18].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_s" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[19].statement"
                    :note="Statements[19].note"
                    :comment="Statements[19].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_t" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[20].statement"
                    :note="Statements[20].note"
                    :comment="Statements[20].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_u" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_d"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepD)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[5].header"
              :number="5"
              class="mb-5"
              :kleur="colorStep5"
            />
            <div id="step5" v-if="memberData.step === 5">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[21].statement"
                    :note="Statements[21].note"
                    :comment="Statements[21].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_v" />
                  <StatementText
                    :statement="Statements[22].statement"
                    :note="Statements[22].note"
                    :comment="Statements[22].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_w" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[23].statement"
                    :note="Statements[23].note"
                    :comment="Statements[23].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_x" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[24].statement"
                    :note="Statements[24].note"
                    :comment="Statements[24].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_y" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[25].statement"
                    :note="Statements[25].note"
                    :comment="Statements[25].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_z" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[26].statement"
                    :note="Statements[26].note"
                    :comment="Statements[26].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_za" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[27].statement"
                    :note="Statements[27].note"
                    :comment="Statements[27].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zb" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_e"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepE)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>

            <step-text
              :stepText="textIntro[6].header"
              :number="6"
              class="mb-5"
              :kleur="colorStep6"
            />
            <div id="step6" v-if="memberData.step === 6">
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
import textData from "@/text/textG.json";
import vimeoData from "@/text/vimeo.json";
import Loading from "@/components/core/loading";
import TaSlider2 from "@/components/core/ta-slider2";
import StatementService from "@/services/StatementService";
import ResultService from "@/services/ResultService";
import StepText from "@/components/stepText";
import Btnnext from "@/components/BtnNext";
import StatementText from "@/components/StatementText";
import Btnback from "@/components/BtnBack";
import CustomDivider from "@/components/CustomDivider";
import BtnStop from "@/components/BtnStop";
import Saving from "@/components/core/saving";
import { ValidationObserver } from "vee-validate";
import BaseValArea from "@/components/input/BaseValArea";
export default {
  components: {
    BaseValArea,
    Saving,
    BtnStop,
    CustomDivider,
    Btnback,
    StatementText,
    Btnnext,
    StepText,
    TaSlider2,
    Loading,
    Toolbar,
    ValidationObserver,
  },
  data() {
    return {
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
      await this.$vuetify.goTo(20);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepC() {
      await this.$vuetify.goTo(20);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepD() {
      await this.$vuetify.goTo(20);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepE() {
      await this.$vuetify.goTo(20);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepF() {
      await this.$vuetify.goTo(20);
      await this.saveResults();
      this.memberData.step++;
    },
    saveResults() {
      const payload = {
        email: this.email,
        sl_a: this.memberData.sl_a,
        sl_b: this.memberData.sl_b,
        sl_c: this.memberData.sl_c,
        sl_d: this.memberData.sl_d,
        sl_e: this.memberData.sl_e,
        sl_f: this.memberData.sl_f,
        sl_g: this.memberData.sl_g,
        sl_h: this.memberData.sl_h,
        sl_i: this.memberData.sl_i,
        sl_j: this.memberData.sl_j,
        sl_k: this.memberData.sl_k,
        sl_l: this.memberData.sl_l,
        sl_m: this.memberData.sl_m,
        sl_n: this.memberData.sl_n,
        sl_o: this.memberData.sl_o,
        sl_p: this.memberData.sl_p,
        sl_q: this.memberData.sl_q,
        sl_r: this.memberData.sl_r,
        sl_s: this.memberData.sl_s,
        sl_t: this.memberData.sl_t,
        sl_u: this.memberData.sl_u,
        sl_v: this.memberData.sl_v,
        sl_w: this.memberData.sl_w,
        sl_x: this.memberData.sl_x,
        sl_y: this.memberData.sl_y,
        sl_z: this.memberData.sl_z,
        sl_za: this.memberData.sl_za,
        sl_zb: this.memberData.sl_zb,
        ready_a: this.memberData.ready_a,
        ready_b: this.memberData.ready_b,
        ready_c: this.memberData.ready_c,
        ready_d: this.memberData.ready_d,
        ready_e: this.memberData.ready_e,
        ready_f: this.memberData.ready_f,
        step: this.memberData.step,
        remark_a: this.memberData.remark_a,
        remark_b: this.memberData.remark_b,
        remark_c: this.memberData.remark_c,
        remark_d: this.memberData.remark_d,
        remark_e: this.memberData.remark_e,
        remark_f: this.memberData.remark_f,
      };
      this.saving = true;
      ResultService.saveResultG(payload).then(() => {
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
      ResultService.getReportG(payload)
        .then(() => {})
        .finally(() => {
          this.disableBtn = false;
        });
    },

    getStatement() {
      this.loading = true;
      StatementService.getStatementG().then((response) => {
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
      ResultService.getResultG(payload).then((response) => {
        console.log("dataklant terug");
        this.memberData = response.data.data.gfsmodule;
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
