<template>
  <div class="mb-5 mt-5">
    <h4 v-if="formal" class="error--text">
      Er gaat iets mis! Bekijk uw antwoorden.
    </h4>
    <h4 v-if="!formal" class="error--text">
      Er gaat iets mis! Bekijk je antwoorden.
    </h4>
  </div>
</template>

<script>
export default {
  name: "TaErrorForm",
  props: ["formal"],
};
</script>

<style scoped></style>
