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
                :head-text="textIntro[3].header"
                :text-a="textIntro[3].texta"
                :text-b="textIntro[3].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[3].headerInf"
                :text-a="textIntro[3].textaInf"
                :text-b="textIntro[3].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[3].header"
              :number="3"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[3].textb" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[3].textbInf" />
                </div>
                <base-radio
                  v-model="question_c"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja"
                  optionB="Nee"
                ></base-radio>
                <div v-if="question_c === 'ke1'">
                  <div v-if="formal">
                    <statement-text :statement="textIntro[3].slider_a" />
                  </div>
                  <div v-if="!formal">
                    <statement-text :statement="textIntro[3].slider_aInf" />
                  </div>
                  <ta-slider2 v-model="sl_g" />
                </div>
                <div v-if="question_c === 'ke2'">
                  <div v-if="formal">
                    <statement-text :statement="textIntro[3].question_a" />
                  </div>
                  <div v-if="!formal">
                    <statement-text :statement="textIntro[3].question_aInf" />
                  </div>
                  <base-radio
                    v-model="question_d"
                    :error-messages="errors"
                    rules="required"
                    nrOptions="3"
                    optionA="Ja"
                    optionB="Nee"
                    optionC="Weet niet / onbekend"
                  ></base-radio>
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
              :stepText="textIntro[4].header"
              :number="4"
              class="mb-5"
              :active="false"
            />
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
    question_c: {
      get() {
        return this.$store.state.quick.question_c;
      },
      set(value) {
        this.$store.commit("quick/update_question_c", value);
      },
    },
    question_d: {
      get() {
        return this.$store.state.quick.question_d;
      },
      set(value) {
        this.$store.commit("quick/update_question_d", value);
      },
    },

    sl_g: {
      get() {
        return this.$store.state.quick.sl_g;
      },
      set(value) {
        this.$store.commit("quick/update_sl_g", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepFour" });
    },
    backStep() {
      this.$router.push({ name: "stepTwo" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
