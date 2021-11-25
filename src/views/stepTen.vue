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
                :head-text="textIntro[10].header"
                :text-a="textIntro[10].texta"
                :text-b="textIntro[10].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[10].headerInf"
                :text-a="textIntro[10].textaInf"
                :text-b="textIntro[10].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[10].header"
              :number="10"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[10].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[10].textcInf" />
                </div>
                <div class="mt-8">{{ textIntro[10].texte }}</div>
                <base-radio
                  v-model="question_r"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja, deze opmaak is prima."
                  optionB="Nee, ik wil dit wijzigen."
                ></base-radio>
                <div v-if="question_a === 'ke1'">
                  <div v-if="formal">
                    <StatementText :statement="textIntro[10].textd" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[10].textdInf" />
                  </div>
                  <div class="mt-8">{{ textIntro[10].texte }}</div>
                  <base-radio
                    v-model="question_s"
                    :error-messages="errors"
                    rules="required"
                    nrOptions="2"
                    optionA="Ja, deze opmaak is prima."
                    optionB="Nee, ik wil dit wijzigen."
                  ></base-radio>
                </div>
                <div v-if="question_r === 'ke2' || question_s === 'ke2'">
                  <base-val-area
                    :textA="'Welke wijzigingen mogen doorgevoerd worden?'"
                    :rules="'max:200'"
                    :label="'Wijzigingen'"
                    v-model="text_i"
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
    question_r: {
      get() {
        return this.$store.state.quick.question_r;
      },
      set(value) {
        this.$store.commit("quick/update_question_r", value);
      },
    },
    question_s: {
      get() {
        return this.$store.state.quick.question_s;
      },
      set(value) {
        this.$store.commit("quick/update_question_s", value);
      },
    },
    text_i: {
      get() {
        return this.$store.state.quick.text_i;
      },
      set(value) {
        this.$store.commit("quick/update_text_i", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepEleven" });
    },
    backStep() {
      this.$router.push({ name: "stepNine" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
