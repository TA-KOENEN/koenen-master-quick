<template>
  <div>
    <ToolbarAuth :name="'Optimaal financieel pakket'" />
    <report />
    <error-report />
    <div class="ma-0 pa-0">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          class="leftPanel justify-center"
          :class="{ 'full-page': $vuetify.breakpoint.mdAndUp }"
        >
          <div class="ma-10">
            <div v-if="formal">
              <text-left-end
                :head-text="textEnd.header"
                :text-a="textEnd.texta"
                :text-b="textEnd.textb"
                :text-c="textEnd.textc"
                :text-d="textEnd.textd"
                :text-e="textEnd.texte"
                :text-f="textEnd.textf"
                :text-g="textEnd.textg"
                :firstName="firstNameUser"
                :lastName="lastNameUser"
                :websiteTeam="website_team"
              />
            </div>
            <div v-if="!formal">
              <text-left-end
                :head-text="textEnd.headerInf"
                :text-a="textEnd.textaInf"
                :text-b="textEnd.textbInf"
                :text-c="textEnd.textcInf"
                :text-d="textEnd.textdInf"
                :text-e="textEnd.texteInf"
                :text-f="textEnd.textfInf"
                :text-g="textEnd.textgInf"
                :firstName="firstNameUser"
                :lastName="lastNameUser"
                :websiteTeam="website_team"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textEnd.header"
              :number="12"
              class="mb-5"
              :active="true"
            />
            <CustomDivider />
            <v-row class="mt-10 mb-10 justify-center">
              <btn-report :on-click="getReport" />
            </v-row>
            <CustomDivider />
            <v-row class="mt-10 mb-10">
              <v-spacer />
              <btn-back :onClick="backStep" />
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import textEind from "@/text/textEind.json";
import textData from "@/text/textApp.json";
import ResultService from "@/services/ResultService";
import AuthService from "@/services/AuthService";

export default {
  name: "stepEnd",
  components: {},
  data() {
    return {
      textEnd: textEind,
      textIntro: textData,
      formal: null,
      firstNameUser: null,
      lastNameUser: null,
      clientId: null,
      website_team: null,
    };
  },
  computed: {
    sl_a: {
      get() {
        return this.$store.state.quick.sl_a;
      },
    },
    sl_b: {
      get() {
        return this.$store.state.quick.sl_b;
      },
    },
    sl_c: {
      get() {
        return this.$store.state.quick.sl_c;
      },
    },
    sl_d: {
      get() {
        return this.$store.state.quick.sl_d;
      },
    },
    sl_e: {
      get() {
        return this.$store.state.quick.sl_e;
      },
    },
    sl_f: {
      get() {
        return this.$store.state.quick.sl_f;
      },
    },
    sl_g: {
      get() {
        return this.$store.state.quick.sl_g;
      },
    },
    sl_h: {
      get() {
        return this.$store.state.quick.sl_h;
      },
    },
    sl_i: {
      get() {
        return this.$store.state.quick.sl_i;
      },
    },
    sl_j: {
      get() {
        return this.$store.state.quick.sl_j;
      },
    },
    sl_k: {
      get() {
        return this.$store.state.quick.sl_k;
      },
    },
    sl_l: {
      get() {
        return this.$store.state.quick.sl_l;
      },
    },
    sl_m: {
      get() {
        return this.$store.state.quick.sl_m;
      },
    },
    sl_n: {
      get() {
        return this.$store.state.quick.sl_n;
      },
    },
    cb_a: {
      get() {
        return this.$store.state.quick.cb_a;
      },
    },
    cb_b: {
      get() {
        return this.$store.state.quick.cb_b;
      },
    },
    cb_c: {
      get() {
        return this.$store.state.quick.cb_c;
      },
    },
    cb_d: {
      get() {
        return this.$store.state.quick.cb_d;
      },
    },
    cb_e: {
      get() {
        return this.$store.state.quick.cb_e;
      },
    },
    cb_f: {
      get() {
        return this.$store.state.quick.cb_f;
      },
    },
    cb_g: {
      get() {
        return this.$store.state.quick.cb_g;
      },
    },
    question_a: {
      get() {
        return this.$store.state.quick.question_a;
      },
    },
    question_b: {
      get() {
        return this.$store.state.quick.question_b;
      },
    },
    question_c: {
      get() {
        return this.$store.state.quick.question_c;
      },
    },
    question_d: {
      get() {
        return this.$store.state.quick.question_d;
      },
    },
    question_e: {
      get() {
        return this.$store.state.quick.question_e;
      },
    },
    question_f: {
      get() {
        return this.$store.state.quick.question_f;
      },
    },
    text_a: {
      get() {
        return this.$store.state.quick.text_a;
      },
    },
    text_b: {
      get() {
        return this.$store.state.quick.text_b;
      },
    },
    text_c: {
      get() {
        return this.$store.state.quick.text_c;
      },
    },
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },

    async getReport() {
      // eslint-disable-next-line
      console.log("gaat goed");
      const payload = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
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
        sl_m: this.sl_m,
        sl_n: this.sl_n,
        cb_a: this.cb_a,
        cb_b: this.cb_b,
        cb_c: this.cb_c,
        cb_d: this.cb_d,
        cb_e: this.cb_e,
        cb_f: this.cb_f,
        cb_g: this.cb_g,
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
      };
      const payloadLog = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
      };
      try {
        this.disableBtnReport = true;
        await ResultService.getReport(payload);
        // eslint-disable-next-line no-undef
        await EventBus.$emit("reportSend", true);

        await this.sleep(1000);
        await AuthService.logout(payloadLog);
        localStorage.removeItem("clientId");
        localStorage.removeItem("firstNameClient");
        localStorage.removeItem("lastNameClient");
        localStorage.removeItem("emailClient");
        localStorage.removeItem("firstNameUser");
        localStorage.removeItem("lastNameUser");
        localStorage.removeItem("formal");
        localStorage.removeItem("token");
        localStorage.removeItem("website_team");
        this.$router.push({ path: "/Start" });
      } catch (error) {
        // eslint-disable-next-line no-undef
        EventBus.$emit("errReport", true);
        this.disableBtnReport = false;
      }
    },
    backStep() {
      this.$router.push({ name: "stepSeven" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
    this.clientId = JSON.parse(localStorage.getItem("clientId"));
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
    this.website_team = JSON.parse(localStorage.getItem("website_team"));
  },
};
</script>
