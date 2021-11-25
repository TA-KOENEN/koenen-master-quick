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
                :head-text="textIntro[5].header"
                :text-a="textIntro[5].texta"
                :text-b="textIntro[5].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[5].headerInf"
                :text-a="textIntro[5].textaInf"
                :text-b="textIntro[5].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[5].header"
              :number="5"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[5].textb" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[5].textbInf" />
                </div>
                <base-radio
                  v-model="question_e"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="5"
                  optionA="Direct na elke mutatie"
                  optionB="Dagelijks dienen alle resultaten te zijn bijgewerkt"
                  optionC="Zo snel mogelijk aan het einde van de kalendermaand"
                  optionD="Zo snel mogelijk aan het einde van het kwartaal"
                  optionE="Anders, namelijk"
                ></base-radio>
                <div v-if="question_e === 'ke5'">
                  <div v-if="formal">
                    <StatementText :statement="textIntro[5].textd" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[5].textdInf" />
                  </div>
                  <base-val-area
                    :textA="'Wat zijn de wensen, m.b.t. actualiteit?'"
                    :rules="'max:200'"
                    :label="'Anders'"
                    v-model="text_b"
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
    question_e: {
      get() {
        return this.$store.state.quick.question_e;
      },
      set(value) {
        this.$store.commit("quick/update_question_e", value);
      },
    },
    text_b: {
      get() {
        return this.$store.state.quick.text_b;
      },
      set(value) {
        this.$store.commit("quick/update_text_b", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepSix" });
    },
    backStep() {
      this.$router.push({ name: "stepFour" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
