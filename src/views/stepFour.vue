<template>
  <div>
    <ToolbarAuth :name="'Optimaal financieel pakket'" />
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
              <text-left
                :head-text="textIntro[4].header"
                :text-a="textIntro[4].texta"
                :text-b="textIntro[4].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[4].headerInf"
                :text-a="textIntro[4].textaInf"
                :text-b="textIntro[4].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[4].header"
              :number="4"
              class="mb-5"
              :active="true"
            />
            <form ref="form">
              <CustomDivider />
              <div v-if="formal">
                <StatementText :statement="textIntro[4].textb" />
              </div>
              <div v-if="!formal">
                <StatementText :statement="textIntro[4].textbInf" />
              </div>
              <statement-text :statement="textIntro[4].slider_a" />
              <ta-slider2 v-model="sl_h" />
              <statement-text :statement="textIntro[4].slider_b" />
              <ta-slider2 v-model="sl_i" />
              <statement-text :statement="textIntro[4].slider_c" />
              <ta-slider2 v-model="sl_j" />
              <statement-text :statement="textIntro[4].slider_d" />
              <ta-slider2 v-model="sl_k" />
              <statement-text :statement="textIntro[4].slider_e" />
              <ta-slider2 v-model="sl_l" />
              <statement-text :statement="textIntro[4].slider_f" />
              <ta-slider2 v-model="sl_m" />

              <CustomDivider />
              <v-row class="mt-10">
                <v-spacer />
                <btn-back :onClick="backStep" />
                <btn-continue :onClick="nextStep" />
              </v-row>
            </form>
            <div class="mt-10" />
            <step-text
              :stepText="textIntro[5].header"
              :number="5"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[6].header"
              :number="6"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[7].header"
              :number="7"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[8].header"
              :number="8"
              class="mb-5"
              :active="false"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import textData from "@/text/textApp.json";

export default {
  name: "stepThree",
  components: {},
  data() {
    return {
      textIntro: textData,
      formal: null,
    };
  },
  computed: {
    sl_h: {
      get() {
        return this.$store.state.quick.sl_h;
      },
      set(value) {
        this.$store.commit("quick/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.quick.sl_i;
      },
      set(value) {
        this.$store.commit("quick/update_sl_i", value);
      },
    },
    sl_j: {
      get() {
        return this.$store.state.quick.sl_j;
      },
      set(value) {
        this.$store.commit("quick/update_sl_j", value);
      },
    },
    sl_k: {
      get() {
        return this.$store.state.quick.sl_k;
      },
      set(value) {
        this.$store.commit("quick/update_sl_k", value);
      },
    },
    sl_l: {
      get() {
        return this.$store.state.quick.sl_l;
      },
      set(value) {
        this.$store.commit("quick/update_sl_l", value);
      },
    },
    sl_m: {
      get() {
        return this.$store.state.quick.sl_m;
      },
      set(value) {
        this.$store.commit("quick/update_sl_m", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepFive" });
    },
    backStep() {
      this.$router.push({ name: "stepThree" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
