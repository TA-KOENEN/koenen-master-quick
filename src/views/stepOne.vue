<template>
  <div>
    <ToolbarAuth :name="'Design App'" />
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
                <base-radio
                  v-model="question_a"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja, ik geef mijn klanten de mogelijkheid van verschillende kleurenschema's."
                  optionB="Nee, een donker kleurenschema past niet binnen onze huisstijl."
                ></base-radio>
                <div v-if="question_a === 'ke2'">
                  <StatementText
                    :statement="'Vragen over een tweede kleurenschema worden overgeslagen.'"
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
