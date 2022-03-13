<template>
  <div>
    <ta-statement :stat-text="statTextMulti[12]" :formal="formal" />
    <ta-val-area v-model="text_a" :label="'Andere vragen'" :rules="'max:250'" />
  </div>
</template>

<script>
export default {
  name: "AstepQuickE",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    text_a: {
      get() {
        return this.$store.state.quickE.text_a;
      },
      set(value) {
        this.$store.commit("quickE/update_text_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
