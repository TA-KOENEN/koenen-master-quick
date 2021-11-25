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
                :head-text="textIntro[6].header"
                :text-a="textIntro[6].texta"
                :text-b="textIntro[6].textb"
                :text-c="textIntro[6].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[6].headerInf"
                :text-a="textIntro[6].textaInf"
                :text-b="textIntro[6].textbInf"
                :text-c="textIntro[6].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[6].header"
              :number="6"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[6].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[6].textcInf" />
                </div>
                <base-radio
                  v-model="question_f"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja"
                  optionB="Nee"
                ></base-radio>

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
  name: "stepSix",
  components: {},
  data() {
    return {
      textIntro: textData,
      formal: null,
      sw_a: true,
    };
  },
  computed: {
    question_f: {
      get() {
        return this.$store.state.quick.question_f;
      },
      set(value) {
        this.$store.commit("quick/update_question_f", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepSeven" });
    },
    backStep() {
      this.$router.push({ name: "stepFive" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
