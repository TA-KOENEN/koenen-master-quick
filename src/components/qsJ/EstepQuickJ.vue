<template>
  <div>
    <ta-statement :stat-text="statTextMulti[13]" :formal="formal" />
    <ta-val-area v-model="text_b" :label="'Onderwerpen'" :rules="'max:250'" />
  </div>
</template>

<script>
export default {
  name: "DstepQuickJ",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    text_b: {
      get() {
        return this.$store.state.quickAll.text_b;
      },
      set(value) {
        this.$store.commit("quickAll/update_text_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
