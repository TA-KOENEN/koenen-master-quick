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
                :head-text="textIntro[7].header"
                :text-a="textIntro[7].texta"
                :text-b="textIntro[7].textb"
                :text-c="textIntro[7].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[7].headerInf"
                :text-a="textIntro[7].textaInf"
                :text-b="textIntro[7].textbInf"
                :text-c="textIntro[7].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[7].header"
              :number="7"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[7].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[7].textcInf" />
                </div>
                <base-check
                  :label="'Inrichten koppelingen met andere systemen'"
                  v-model="cb_a"
                />
                <base-check
                  :label="'Stroomlijnen financiële processen'"
                  v-model="cb_b"
                />
                <base-check
                  :label="'Inrichten administratieve organisatie en bevoegdheden'"
                  v-model="cb_c"
                />
                <base-check
                  :label="'Aanreiken (financiële) kennis over de mogelijkheden van systemen'"
                  v-model="cb_d"
                />
                <base-check
                  :label="'Inzicht in liquiditeiten'"
                  v-model="cb_e"
                />
                <base-check :label="'Overig te weten'" v-model="cb_f" />

                <div v-if="cb_f">
                  <base-val-area
                    :textA="'Overig te weten:'"
                    :rules="'max:200'"
                    :label="'Overig'"
                    v-model="text_c"
                  />
                </div>

                <CustomDivider />
                <v-row class="mt-10">
                  <v-spacer />
                  <btn-back :onClick="backStep" />
                  <btn-continue :onClick="nextStep" :disabled="invalid" />
                </v-row>
              </form>
            </ValidationObserver>
            <div class="mt-10" />
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
  name: "stepSeven",
  components: {},
  data() {
    return {
      textIntro: textData,
      formal: null,
      sl_a: 0,
    };
  },
  computed: {
    question_l: {
      get() {
        return this.$store.state.quick.question_l;
      },
      set(value) {
        this.$store.commit("quick/update_question_l", value);
      },
    },
    cb_a: {
      get() {
        return this.$store.state.quick.cb_a;
      },
      set(value) {
        this.$store.commit("quick/update_cb_a", value);
      },
    },
    cb_b: {
      get() {
        return this.$store.state.quick.cb_b;
      },
      set(value) {
        this.$store.commit("quick/update_cb_b", value);
      },
    },
    cb_c: {
      get() {
        return this.$store.state.quick.cb_c;
      },
      set(value) {
        this.$store.commit("quick/update_cb_c", value);
      },
    },
    cb_d: {
      get() {
        return this.$store.state.quick.cb_d;
      },
      set(value) {
        this.$store.commit("quick/update_cb_d", value);
      },
    },
    cb_e: {
      get() {
        return this.$store.state.quick.cb_e;
      },
      set(value) {
        this.$store.commit("quick/update_cb_e", value);
      },
    },
    cb_f: {
      get() {
        return this.$store.state.quick.cb_f;
      },
      set(value) {
        this.$store.commit("quick/update_cb_f", value);
      },
    },
    text_c: {
      get() {
        return this.$store.state.quick.text_c;
      },
      set(value) {
        this.$store.commit("quick/update_text_c", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepEnd" });
    },
    backStep() {
      this.$router.push({ name: "stepSix" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
