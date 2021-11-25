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
                :head-text="textIntro[1].header"
                :text-a="textIntro[1].texta"
                :text-b="textIntro[1].textb"
                :text-c="textIntro[1].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[1].headerInf"
                :text-a="textIntro[1].textaInf"
                :text-b="textIntro[1].textbInf"
                :text-c="textIntro[1].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[1].header"
              :number="1"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[1].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[1].textcInf" />
                </div>
                <statement-text :statement="textIntro[1].slider_a" />
                <ta-slider3 v-model="sl_a" />
                <statement-text :statement="textIntro[1].slider_b" />
                <ta-slider3 v-model="sl_b" />
                <statement-text :statement="textIntro[1].slider_c" />
                <ta-slider3 v-model="sl_c" />
                <statement-text :statement="textIntro[1].slider_d" />
                <ta-slider3 v-model="sl_d" />
                <statement-text :statement="textIntro[1].slider_e" />
                <ta-slider3 v-model="sl_e" />
                <statement-text :statement="textIntro[1].slider_f" />
                <ta-slider3 v-model="sl_f" />

                <div v-if="formal">
                  <StatementText :statement="textIntro[1].question_a" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[1].question_aInf" />
                </div>

                <base-radio
                  v-model="question_a"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja"
                  optionB="Nee"
                ></base-radio>
                <div v-if="question_a === 'ke1'">
                  <div v-if="formal">
                    <StatementText :statement="textIntro[1].question_b" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[1].question_bInf" />
                  </div>
                  <base-val-area
                    label="Functionaliteiten"
                    rules="max:250"
                    v-model="text_a"
                  />
                </div>

                <v-row class="mt-10">
                  <v-spacer />
                  <btn-continue
                    :onClick="nextStep"
                    :disabled="invalid"
                  ></btn-continue>
                </v-row>
              </form>
            </ValidationObserver>
            <CustomDivider />
            <div class="mt-10" />
            <step-text
              :stepText="textIntro[2].header"
              :number="2"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[3].header"
              :number="3"
              class="mb-5"
              :active="false"
            />

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
  name: "stepOne",
  components: {},
  data() {
    return {
      textIntro: textData,
      formal: null,
    };
  },
  computed: {
    question_a: {
      get() {
        return this.$store.state.quick.question_a;
      },
      set(value) {
        this.$store.commit("quick/update_question_a", value);
      },
    },
    sl_a: {
      get() {
        return this.$store.state.quick.sl_a;
      },
      set(value) {
        this.$store.commit("quick/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.quick.sl_b;
      },
      set(value) {
        this.$store.commit("quick/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.quick.sl_c;
      },
      set(value) {
        this.$store.commit("quick/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.quick.sl_d;
      },
      set(value) {
        this.$store.commit("quick/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.quick.sl_e;
      },
      set(value) {
        this.$store.commit("quick/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.quick.sl_f;
      },
      set(value) {
        this.$store.commit("quick/update_sl_f", value);
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
    text_a: {
      get() {
        return this.$store.state.quick.text_a;
      },
      set(value) {
        this.$store.commit("quick/update_text_a", value);
      },
    },
  },
  methods: {
    nextStep() {
      console.log("next Step works");
      this.$router.push({ name: "stepTwo" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
