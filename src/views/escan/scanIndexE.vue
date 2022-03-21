<template>
  <div class="ma-0 pa-0">
    <ToolbarAuth :name="'Juridische aspecten'" />
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
              <ta-btn-report
                v-else-if="currentStep === 8"
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
import leftText from "@/text/scanE/textLeft.json";
import stepText from "@/text/scanE/textStep.json";
import questionText from "@/text/scanE/textStatement.json";
import AstepQuickE from "@/components/qsE/AstepQuickE";
import BstepQuickE from "@/components/qsE/BstepQuickE";
import CstepQuickE from "@/components/qsE/CstepQuickE";
import DstepQuickE from "@/components/qsE/DstepQuickE";
import EstepQuickE from "@/components/qsE/EstepQuickE";
import FstepQuickE from "@/components/qsE/FstepQuickE";
import GstepQuickE from "@/components/qsE/GstepQuickE";
import ResultService from "@/services/ResultService";
import AuthService from "@/services/AuthService";
import TaBtnReport from "@/components/buttons/taBtnReport";
export default {
  name: "scanIndexE",
  components: {
    TaBtnReport,
    "a-step": AstepQuickE,
    "b-step": BstepQuickE,
    "c-step": CstepQuickE,
    "d-step": DstepQuickE,
    "e-step": EstepQuickE,
    "f-step": FstepQuickE,
    "g-step": GstepQuickE,
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
      totalSteps: 8,
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
        sl_a: this.sl_a,
        sl_b: this.sl_b,
        sl_c: this.sl_c,
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        question_g: this.question_g,
        question_h: this.question_h,
        text_a: this.text_a,
      };
      const payloadLog = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
      };
      try {
        this.disableBtnReport = true;
        await ResultService.getReportE(payload);
        // eslint-disable-next-line no-undef
        await EventBus.$emit("reportSend", true);

        await this.sleep(1000);
        await AuthService.logoutE(payloadLog);
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
    question_f: {
      get() {
        return this.$store.state.quickAll.question_f;
      },
    },
    question_g: {
      get() {
        return this.$store.state.quickAll.question_g;
      },
    },
    question_h: {
      get() {
        return this.$store.state.quickAll.question_h;
      },
    },
    sl_a: {
      get() {
        return this.$store.state.quickAll.sl_a;
      },
    },
    sl_b: {
      get() {
        return this.$store.state.quickAll.sl_b;
      },
    },
    sl_c: {
      get() {
        return this.$store.state.quickAll.sl_c;
      },
    },
    text_a: {
      get() {
        return this.$store.state.quickAll.text_a;
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
