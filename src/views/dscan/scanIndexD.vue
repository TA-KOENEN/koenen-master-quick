<template>
  <div class="ma-0 pa-0">
    <ToolbarAuth :name="'Sturen op resultaat'" />
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="leftPanel justify-center"
        :class="{ 'full-page': $vuetify.breakpoint.mdAndUp }"
      >
        <div class="ma-10">
          <ta-text-left
            :step="currentStep"
            :text-in="textLeft"
            :formal="formal"
            :first-name-user="firstNameUser"
            :last-name-user="lastNameUser"
            :website-team="websiteTeam"
          />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="rightPanel justify-center">
        <div class="ma-10">
          <ta-steps
            :step-text="textStep[currentStep].text"
            :number="textStep[currentStep].id"
            class="mb-5"
            :active="true"
          />
          <ta-divider-one />
          <ValidationObserver
            ref="obs"
            v-slot="{ handleSubmit, invalid, validated }"
          >
            <v-form @submit.prevent="onSubmit">
              <a-step
                v-if="currentStep === 1"
                :stat-text-multi="textStat"
                :formal="formal"
              />
              <b-step
                v-else-if="currentStep === 2"
                :stat-text-multi="textStat"
                :formal="formal"
              />
              <c-step
                v-else-if="currentStep === 3"
                :stat-text-multi="textStat"
                :formal="formal"
              />
              <d-step
                v-else-if="currentStep === 4"
                :stat-text-multi="textStat"
                :formal="formal"
              />
              <e-step
                v-else-if="currentStep === 5"
                :stat-text-multi="textStat"
                :formal="formal"
              />
              <f-step
                v-else-if="currentStep === 6"
                :stat-text-multi="textStat"
                :formal="formal"
              />
              <g-step
                v-else-if="currentStep === 7"
                :stat-text-multi="textStat"
                :formal="formal"
              />
              <h-step
                v-else-if="currentStep === 8"
                :stat-text-multi="textStat"
                :formal="formal"
              />
              <ta-btn-report
                v-else-if="currentStep === 9"
                @onClick="getReport"
              />
            </v-form>
            <v-row class="mt-10">
              <v-spacer />
              <ta-error-form v-if="invalid && validated" :formal="formal" />
              <ta-btn-back :on-click="prevStep" v-if="currentStep > 1" />
              <ta-btn-cont
                @onClick="handleSubmit(onSubmit)"
                v-if="currentStep < totalSteps"
              />
            </v-row>
          </ValidationObserver>

          <ta-divider-one />
          <div v-for="item in filteredSteps" :key="item.id">
            <ta-steps
              :step-text="item.text"
              :number="item.id"
              class="mb-5"
              :active="false"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import leftText from "@/text/scanD/textLeft.json";
import stepText from "@/text/scanD/textStep.json";
import questionText from "@/text/scanD/textStatement.json";
import AstepQuickD from "@/components/qsD/AstepQuickD";
import BstepQuickD from "@/components/qsD/BstepQuickD";
import CstepQuickD from "@/components/qsD/CstepQuickD";
import DstepQuickD from "@/components/qsD/DstepQuickD";
import EstepQuickD from "@/components/qsD/EstepQuickD";
import FstepQuickD from "@/components/qsD/FstepQuickD";
import GstepQuickD from "@/components/qsD/GstepQuickD";
import HstepQuickD from "@/components/qsD/HstepQuickD";
import ResultService from "@/services/ResultService";
import AuthService from "@/services/AuthService";
import TaBtnReport from "@/components/buttons/taBtnReport";
export default {
  name: "scanIndexD",
  components: {
    TaBtnReport,
    "a-step": AstepQuickD,
    "b-step": BstepQuickD,
    "c-step": CstepQuickD,
    "d-step": DstepQuickD,
    "e-step": EstepQuickD,
    "f-step": FstepQuickD,
    "g-step": GstepQuickD,
    "h-step": HstepQuickD,
  },
  data() {
    return {
      textLeft: leftText,
      textStep: stepText,
      textStat: questionText,
      firstNameUser: null,
      lastNameUser: null,
      websiteTeam: null,
      formal: false,
      currentStep: 1,
      totalSteps: 9,
    };
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    prevStep() {
      this.$vuetify.goTo(0);
      this.currentStep--;
    },
    onSubmit() {
      this.$vuetify.goTo(0);
      this.currentStep++;
    },
    async getReport() {
      // eslint-disable-next-line
      console.log("gaat goed");
      const payload = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
        cb_a: this.cb_a,
        cb_b: this.cb_b,
        cb_c: this.cb_c,
        cb_d: this.cb_d,
        cb_e: this.cb_e,
        cb_f: this.cb_f,
        cb_g: this.cb_g,
        cb_h: this.cb_h,
        cb_i: this.cb_i,
        cb_j: this.cb_j,
        cb_k: this.cb_k,
        cb_l: this.cb_l,
        cb_m: this.cb_m,
        cb_n: this.cb_n,
        cb_o: this.cb_o,
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
        text_d: this.text_d,
      };
      const payloadLog = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
      };
      try {
        this.disableBtnReport = true;
        await ResultService.getReportD(payload);
        // eslint-disable-next-line no-undef
        await EventBus.$emit("reportSend", true);

        await this.sleep(1000);
        await AuthService.logoutD(payloadLog);
        localStorage.clear();
        this.$router.push({ name: "Eind" });
      } catch (error) {
        // eslint-disable-next-line no-undef
        EventBus.$emit("errReport", true);
        this.disableBtnReport = false;
      }
    },
  },
  computed: {
    cb_a: {
      get() {
        return this.$store.state.quickAll.cb_a;
      },
    },
    cb_b: {
      get() {
        return this.$store.state.quickAll.cb_b;
      },
    },
    cb_c: {
      get() {
        return this.$store.state.quickAll.cb_c;
      },
    },
    cb_d: {
      get() {
        return this.$store.state.quickAll.cb_d;
      },
    },
    cb_e: {
      get() {
        return this.$store.state.quickAll.cb_e;
      },
    },
    cb_f: {
      get() {
        return this.$store.state.quickAll.cb_f;
      },
    },
    cb_g: {
      get() {
        return this.$store.state.quickAll.cb_g;
      },
    },
    cb_h: {
      get() {
        return this.$store.state.quickAll.cb_h;
      },
    },
    cb_i: {
      get() {
        return this.$store.state.quickAll.cb_i;
      },
    },
    cb_j: {
      get() {
        return this.$store.state.quickAll.cb_j;
      },
    },
    cb_k: {
      get() {
        return this.$store.state.quickAll.cb_k;
      },
    },
    cb_l: {
      get() {
        return this.$store.state.quickAll.cb_l;
      },
    },
    cb_m: {
      get() {
        return this.$store.state.quickAll.cb_m;
      },
    },
    cb_n: {
      get() {
        return this.$store.state.quickAll.cb_n;
      },
    },
    cb_o: {
      get() {
        return this.$store.state.quickAll.cb_o;
      },
    },
    question_a: {
      get() {
        return this.$store.state.quickAll.question_a;
      },
    },
    question_b: {
      get() {
        return this.$store.state.quickAll.question_b;
      },
    },
    question_c: {
      get() {
        return this.$store.state.quickAll.question_c;
      },
    },
    question_d: {
      get() {
        return this.$store.state.quickAll.question_d;
      },
    },
    question_e: {
      get() {
        return this.$store.state.quickAll.question_e;
      },
    },
    text_a: {
      get() {
        return this.$store.state.quickAll.text_a;
      },
    },
    text_b: {
      get() {
        return this.$store.state.quickAll.text_b;
      },
    },
    text_c: {
      get() {
        return this.$store.state.quickAll.text_c;
      },
    },
    text_d: {
      get() {
        return this.$store.state.quickAll.text_d;
      },
    },

    filteredSteps() {
      return this.textStep.slice(this.currentStep + 1, this.totalSteps + 1);
    },
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
    this.websiteTeam = JSON.parse(localStorage.getItem("website_team"));
  },
  beforeDestroy() {
    this.$store.dispatch("quickAll/setDefault");
  },
};
</script>

<style scoped></style>
