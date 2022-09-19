<template>
  <div>
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
    <ta-slider-feeling v-model="sl_e" />
  </div>
</template>

<script>
export default {
  name: "EstepQuickP",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_e: {
      get() {
        return this.$store.state.quickAll.sl_e;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_e", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
