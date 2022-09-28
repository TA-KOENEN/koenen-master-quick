<template>
  <div>
    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-slider-feeling v-model="sl_b" />
  </div>
</template>

<script>
export default {
  name: "CstepQuickO",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_b: {
      get() {
        return this.$store.state.quickAll.sl_b;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
