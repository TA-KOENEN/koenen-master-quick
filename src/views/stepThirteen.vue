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
                :head-text="textIntro[13].header"
                :text-a="textIntro[13].texta"
                :text-b="textIntro[13].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[13].headerInf"
                :text-a="textIntro[13].textaInf"
                :text-b="textIntro[13].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[13].header"
              :number="13"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[13].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[13].textcInf" />
                </div>

                <base-val-area
                  :textA="'Zijn er nog andere wijzigingen die doorgevoerd dienen te worden?'"
                  :rules="'max:200'"
                  :label="'Wijzigingen'"
                  v-model="text_l"
                />

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
    text_l: {
      get() {
        return this.$store.state.quick.text_l;
      },
      set(value) {
        this.$store.commit("quick/update_text_l", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepEnd" });
    },
    backStep() {
      this.$router.push({ name: "stepTwelve" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
