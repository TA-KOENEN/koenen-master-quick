<template>
  <div class="text-center mt-15">
    <v-btn color="info" x-large @click="$emit('onClick')">
      <slot>Rapportage</slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "taBtnReport",
};
</script>

<style scoped></style>
