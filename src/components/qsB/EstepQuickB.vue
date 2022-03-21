<template>
  <div>
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
    <ta-slider-feeling v-model="sl_c" />
  </div>
</template>

<script>
export default {
  name: "EstepQuickB",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_c: {
      get() {
        return this.$store.state.quickAll.sl_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
