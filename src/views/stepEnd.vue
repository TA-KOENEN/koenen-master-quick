<template>
  <div>
    <ToolbarAuth :name="'Starter template'" />
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
    question_g: {
      get() {
        return this.$store.state.quick.question_g;
      },
    },
    question_h: {
      get() {
        return this.$store.state.quick.question_h;
      },
    },
    question_i: {
      get() {
        return this.$store.state.quick.question_i;
      },
    },
    question_j: {
      get() {
        return this.$store.state.quick.question_j;
      },
    },
    question_k: {
      get() {
        return this.$store.state.quick.question_k;
      },
    },
    question_l: {
      get() {
        return this.$store.state.quick.question_l;
      },
    },
    question_m: {
      get() {
        return this.$store.state.quick.question_m;
      },
    },
    question_n: {
      get() {
        return this.$store.state.quick.question_n;
      },
    },
    question_o: {
      get() {
        return this.$store.state.quick.question_o;
      },
    },
    question_p: {
      get() {
        return this.$store.state.quick.question_p;
      },
    },
    question_q: {
      get() {
        return this.$store.state.quick.question_q;
      },
    },
    question_r: {
      get() {
        return this.$store.state.quick.question_r;
      },
    },
    question_s: {
      get() {
        return this.$store.state.quick.question_s;
      },
    },
    question_t: {
      get() {
        return this.$store.state.quick.question_t;
      },
    },
    question_u: {
      get() {
        return this.$store.state.quick.question_u;
      },
    },
    question_v: {
      get() {
        return this.$store.state.quick.question_v;
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
    text_d: {
      get() {
        return this.$store.state.quick.text_d;
      },
    },
    text_e: {
      get() {
        return this.$store.state.quick.text_e;
      },
    },
    text_f: {
      get() {
        return this.$store.state.quick.text_f;
      },
    },
    text_g: {
      get() {
        return this.$store.state.quick.text_g;
      },
    },
    text_h: {
      get() {
        return this.$store.state.quick.text_h;
      },
    },
    text_i: {
      get() {
        return this.$store.state.quick.text_i;
      },
    },
    text_j: {
      get() {
        return this.$store.state.quick.text_j;
      },
    },
    text_k: {
      get() {
        return this.$store.state.quick.text_k;
      },
    },
    text_l: {
      get() {
        return this.$store.state.quick.text_l;
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
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        question_j: this.question_j,
        question_k: this.question_k,
        question_l: this.question_l,
        question_m: this.question_m,
        question_n: this.question_n,
        question_o: this.question_o,
        question_p: this.question_p,
        question_q: this.question_q,
        question_r: this.question_r,
        question_s: this.question_s,
        question_t: this.question_t,
        question_u: this.question_u,
        question_v: this.question_v,
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
        text_d: this.text_d,
        text_e: this.text_e,
        text_f: this.text_f,
        text_g: this.text_g,
        text_h: this.text_h,
        text_i: this.text_i,
        text_j: this.text_j,
        text_k: this.text_k,
        text_l: this.text_l,
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
      this.$router.push({ name: "stepThirteen" });
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
