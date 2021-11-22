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
                :head-text="textIntro[12].header"
                :text-a="textIntro[12].texta"
                :text-b="textIntro[12].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[12].headerInf"
                :text-a="textIntro[12].textaInf"
                :text-b="textIntro[12].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[12].header"
              :number="12"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[12].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[12].textcInf" />
                </div>
                <div class="mt-8 mb-8">{{ textIntro[12].texte }}</div>
                <vimeo-player
                  :video-id="vimeoData.intro"
                  class="embed-container"
                  :options="{ responsive: true }"
                ></vimeo-player>
                <base-radio
                  v-model="question_v"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja, deze video is prima"
                  optionB="Nee, ik wil dit wijzigen."
                ></base-radio>
                <div v-if="question_v === 'ke2'">
                  <base-val-area
                    :textA="'Welke wijzigingen mogen doorgevoerd worden?'"
                    :rules="'max:500'"
                    :label="'Wijzigingen'"
                    v-model="text_k"
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
import vimeoData from "@/text/vimeo.json";
export default {
  name: "stepSeven",
  components: {},
  data() {
    return {
      textIntro: textData,
      vimeoData: vimeoData,
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
    question_v: {
      get() {
        return this.$store.state.quick.question_v;
      },
      set(value) {
        this.$store.commit("quick/update_question_v", value);
      },
    },
    question_w: {
      get() {
        return this.$store.state.quick.question_w;
      },
      set(value) {
        this.$store.commit("quick/update_question_w", value);
      },
    },
    text_k: {
      get() {
        return this.$store.state.quick.text_k;
      },
      set(value) {
        this.$store.commit("quick/update_text_k", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepThirteen" });
    },
    backStep() {
      this.$router.push({ name: "stepEleven" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
