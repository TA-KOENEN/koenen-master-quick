<template>
  <div>
    <div class="ma-0 pa-0">
      <v-row no-gutters class="mt-10 mb-10">
        <h3 class="primary--text">Toegangscode</h3>
      </v-row>
    </div>
    <div v-if="formal" class="textColor--text">
      Beste {{ firstNameClient }} {{ lastNameClient }},
    </div>
    <div v-if="!formal" class="textColor--text">
      Beste {{ firstNameClient }},
    </div>
    <br /><br />
    <div v-if="formal" class="textColor--text">
      U heeft zojuist per mail een code ontvangen. Met deze code krijgt u
      toegang.<br />
      Let op deze code is 30 minuten geldig.
    </div>
    <div v-if="!formal" class="textColor--text">
      Je hebt zojuist per mail een code ontvangen. Met deze code krijg je
      toegang.<br />
      Let op deze code is 30 minuten geldig.
    </div>
    <v-row class="mt-15">
      <v-otp-input length="6" v-model="innerValue" required></v-otp-input>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TaSecurityCode",
  props: ["firstNameClient", "lastNameClient", "formal", "value"],
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
