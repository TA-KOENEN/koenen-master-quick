<template>
  <div>
    <ToolbarAuth :name="'Starter template'" />
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
                :head-text="textIntro[9].header"
                :text-a="textIntro[9].texta"
                :text-b="textIntro[9].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[9].headerInf"
                :text-a="textIntro[9].textaInf"
                :text-b="textIntro[9].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[9].header"
              :number="9"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[9].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[9].textcInf" />
                </div>
                <div class="mt-8 mb-8">
                  <btn-back :onClick="doNothing" />
                  <btn-continue :onClick="doNothing" />
                  <btn-report :on-click="doNothing" />
                </div>
                <base-radio
                  v-model="question_p"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja, deze kleur is prima"
                  optionB="Nee, ik wil dit wijzigen."
                ></base-radio>
                <div v-if="question_a === 'ke1'">
                  <div v-if="formal">
                    <StatementText :statement="textIntro[9].textd" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[9].textdInf" />
                  </div>
                  <base-radio
                    v-model="question_q"
                    :error-messages="errors"
                    rules="required"
                    nrOptions="2"
                    optionA="Ja, deze kleur is prima"
                    optionB="Nee, ik wil dit wijzigen."
                  ></base-radio>
                </div>
                <div v-if="question_p === 'ke2' || question_q === 'ke2'">
                  <base-val-area
                    :textA="'Welke wijzigingen mogen doorgevoerd worden?'"
                    :rules="'max:200'"
                    :label="'Wijzigingen'"
                    v-model="text_h"
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
              :stepText="textIntro[10].header"
              :number="10"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[11].header"
              :number="11"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[12].header"
              :number="12"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[13].header"
              :number="13"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[14].header"
              :number="14"
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
      sw_a: true,
      sl_a: 0,
    };
  },
  computed: {
    question_a: {
      get() {
        return this.$store.state.quick.question_a;
      },
    },
    question_p: {
      get() {
        return this.$store.state.quick.question_p;
      },
      set(value) {
        this.$store.commit("quick/update_question_p", value);
      },
    },
    question_q: {
      get() {
        return this.$store.state.quick.question_q;
      },
      set(value) {
        this.$store.commit("quick/update_question_q", value);
      },
    },
    text_h: {
      get() {
        return this.$store.state.quick.text_h;
      },
      set(value) {
        this.$store.commit("quick/update_text_h", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepTen" });
    },
    backStep() {
      this.$router.push({ name: "stepEight" });
    },
    doNothing() {
      console.log("do nothing");
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
