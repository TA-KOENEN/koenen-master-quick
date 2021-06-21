<template>
  <v-radio-group
    v-model="joppie"
    :rules="[
      (v) =>
        !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord',
    ]"
    required
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
</template>

<script>
export default {
  name: "RadioThree",
  props: {
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
  data() {
    return {};
  },

  computed: {
    joppie: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style scoped></style>
