<template>
  <div class="ma-0 pa-0">
    <ToolbarAuth :name="'Groei'" />
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
              <ta-btn-report
                v-else-if="currentStep === 6"
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
import leftText from "@/text/scanM/textLeft.json";
import stepText from "@/text/scanM/textStep.json";
import questionText from "@/text/scanM/textStatement.json";
import AstepQuickM from "@/components/qsM/AstepQuickM";
import BstepQuickM from "@/components/qsM/BstepQuickM";
import CstepQuickM from "@/components/qsM/CstepQuickM";
import DstepQuickM from "@/components/qsM/DstepQuickM";
import EstepQuickM from "@/components/qsM/EstepQuickM";
import ResultService from "@/services/ResultService";
import AuthService from "@/services/AuthService";
import TaBtnReport from "@/components/buttons/taBtnReport";
export default {
  name: "scanIndexG",
  components: {
    TaBtnReport,
    "a-step": AstepQuickM,
    "b-step": BstepQuickM,
    "c-step": CstepQuickM,
    "d-step": DstepQuickM,
    "e-step": EstepQuickM,
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
      totalSteps: 6,
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
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
        text_d: this.text_d,
        text_e: this.text_e,
        sl_a: this.sl_a,
        sl_b: this.sl_b,
        sl_c: this.sl_c,
        sl_d: this.sl_d,
        sl_e: this.sl_e,
        sl_f: this.sl_f,
        sl_g: this.sl_g,
        sl_h: this.sl_h,
        sl_i: this.sl_i,
        sl_j: this.sl_j,
        sl_k: this.sl_k,
        sl_l: this.sl_l,
      };
      const payloadLog = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
      };
      try {
        this.disableBtnReport = true;
        await ResultService.getReportM(payload);
        // eslint-disable-next-line no-undef
        await EventBus.$emit("reportSend", true);

        await this.sleep(1000);
        await AuthService.logoutM(payloadLog);
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
    sl_d: {
      get() {
        return this.$store.state.quickAll.sl_d;
      },
    },
    sl_e: {
      get() {
        return this.$store.state.quickAll.sl_e;
      },
    },
    sl_f: {
      get() {
        return this.$store.state.quickAll.sl_f;
      },
    },
    sl_g: {
      get() {
        return this.$store.state.quickAll.sl_g;
      },
    },
    sl_h: {
      get() {
        return this.$store.state.quickAll.sl_h;
      },
    },
    sl_i: {
      get() {
        return this.$store.state.quickAll.sl_i;
      },
    },
    sl_j: {
      get() {
        return this.$store.state.quickAll.sl_j;
      },
    },
    sl_k: {
      get() {
        return this.$store.state.quickAll.sl_k;
      },
    },
    sl_l: {
      get() {
        return this.$store.state.quickAll.sl_l;
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
    text_e: {
      get() {
        return this.$store.state.quickAll.text_e;
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
  created() {
    this.$store.commit("quickAll/update_sl_a", 5);
    this.$store.commit("quickAll/update_sl_b", 5);
    this.$store.commit("quickAll/update_sl_c", 5);
    this.$store.commit("quickAll/update_sl_d", 5);
    this.$store.commit("quickAll/update_sl_e", 5);
    this.$store.commit("quickAll/update_sl_f", 5);
    this.$store.commit("quickAll/update_sl_g", 5);
    this.$store.commit("quickAll/update_sl_h", 5);
    this.$store.commit("quickAll/update_sl_i", 5);
    this.$store.commit("quickAll/update_sl_j", 5);
    this.$store.commit("quickAll/update_sl_k", 5);
    this.$store.commit("quickAll/update_sl_l", 5);
  },
  beforeDestroy() {
    this.$store.dispatch("quickAll/setDefault");
  },
};
</script>

<style scoped></style>
