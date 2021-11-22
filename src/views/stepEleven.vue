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
                :head-text="textIntro[11].header"
                :text-a="textIntro[11].texta"
                :text-b="textIntro[11].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[11].headerInf"
                :text-a="textIntro[11].textaInf"
                :text-b="textIntro[11].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[11].header"
              :number="11"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[11].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[11].textcInf" />
                </div>

                <div class="mt-8">{{ textIntro[11].texte }}</div>
                <StatementText
                  :statement="'Voorbeeld van een kop en direct hieronder een scheidingslijn'"
                />
                <CustomDivider />
                <base-radio
                  v-model="question_t"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja, deze opmaak is prima"
                  optionB="Nee, ik wil dit wijzigen."
                ></base-radio>
                <div v-if="question_a === 'ke1'">
                  <div v-if="formal">
                    <StatementText :statement="textIntro[11].textd" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[11].textdInf" />
                  </div>
                  <div class="mt-8">{{ textIntro[11].texte }}</div>
                  <base-radio
                    v-model="question_u"
                    :error-messages="errors"
                    rules="required"
                    nrOptions="2"
                    optionA="Ja, deze opmaak is prima"
                    optionB="Nee, ik wil dit wijzigen."
                  ></base-radio>
                </div>
                <div v-if="question_t === 'ke2' || question_u === 'ke2'">
                  <base-val-area
                    :textA="'Welke wijzigingen mogen doorgevoerd worden?'"
                    :rules="'max:200'"
                    :label="'Wijzigingen'"
                    v-model="text_j"
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
    question_t: {
      get() {
        return this.$store.state.quick.question_t;
      },
      set(value) {
        this.$store.commit("quick/update_question_t", value);
      },
    },
    question_u: {
      get() {
        return this.$store.state.quick.question_u;
      },
      set(value) {
        this.$store.commit("quick/update_question_u", value);
      },
    },
    text_j: {
      get() {
        return this.$store.state.quick.text_j;
      },
      set(value) {
        this.$store.commit("quick/update_text_j", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepTwelve" });
    },
    backStep() {
      this.$router.push({ name: "stepTen" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
