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
                :head-text="textIntro[7].header"
                :text-a="textIntro[7].texta"
                :text-b="textIntro[7].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[7].headerInf"
                :text-a="textIntro[7].textaInf"
                :text-b="textIntro[7].textbInf"
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
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[7].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[7].textcInf" />
                </div>

                <ta-slider2 v-model="sl_a" />
                <base-radio
                  v-model="question_l"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja, deze kleur is prima"
                  optionB="Nee, ik wil dit wijzigen."
                ></base-radio>
                <div v-if="question_a === 'ke1'">
                  <div v-if="formal">
                    <StatementText :statement="textIntro[7].textd" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[7].textdInf" />
                  </div>
                  <ta-slider2 v-model="sl_a" />
                  <base-radio
                    v-model="question_m"
                    :error-messages="errors"
                    rules="required"
                    nrOptions="2"
                    optionA="Ja, deze kleur is prima"
                    optionB="Nee, ik wil dit wijzigen."
                  ></base-radio>
                </div>
                <div v-if="question_l === 'ke2' || question_m === 'ke2'">
                  <base-val-area
                    :textA="'Welke wijzigingen mogen doorgevoerd worden?'"
                    :rules="'max:200'"
                    :label="'Wijzigingen'"
                    v-model="text_f"
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
            <step-text
              :stepText="textIntro[9].header"
              :number="9"
              class="mb-5"
              :active="false"
            />
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
      sl_a: 0,
    };
  },
  computed: {
    question_a: {
      get() {
        return this.$store.state.quick.question_a;
      },
    },
    question_l: {
      get() {
        return this.$store.state.quick.question_l;
      },
      set(value) {
        this.$store.commit("quick/update_question_l", value);
      },
    },
    question_m: {
      get() {
        return this.$store.state.quick.question_m;
      },
      set(value) {
        this.$store.commit("quick/update_question_m", value);
      },
    },
    text_f: {
      get() {
        return this.$store.state.quick.text_f;
      },
      set(value) {
        this.$store.commit("quick/update_text_f", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepEight" });
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
