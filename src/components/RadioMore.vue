<template>
  <ValidationProvider :rules="rules" v-slot="{ errors, valid }">
    <v-radio-group
      v-model="innerValue"
      :succes="valid"
      :error-messages="errors"
      v-on="$listeners"
    >
      <v-radio value="ke1" color="info">
        <template v-slot:label>
          {{ chsA }}
        </template>
      </v-radio>
      <v-radio value="ke2" color="info">
        <template v-slot:label>
          {{ chsB }}
        </template>
      </v-radio>
      <v-radio value="ke3" color="info" v-if="number > 2">
        <template v-slot:label>
          {{ chsC }}
        </template>
      </v-radio>
      <v-radio value="ke4" color="info" v-if="number > 3">
        <template v-slot:label>
          {{ chsD }}
        </template>
      </v-radio>
      <v-radio value="ke5" color="info" v-if="number > 4">
        <template v-slot:label>
          {{ chsE }}
        </template>
      </v-radio>
    </v-radio-group>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "RadioMore",
  components: {
    ValidationProvider,
  },

  props: {
    rules: {
      type: [Object, String],
      default: "",
    },
    value: null,
    number: null,
    chsA: {
      type: String,
    },
    chsB: {
      type: String,
    },
    chsC: {
      type: String,
    },
    chsD: {
      type: String,
    },
    chsE: {
      type: String,
    },
  },
  data: () => ({
    innerValue: "",
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style scoped></style>
