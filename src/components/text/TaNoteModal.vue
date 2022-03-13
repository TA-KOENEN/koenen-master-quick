<template>
  <v-dialog
    v-model="show"
    persistent
    max-width="600px"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="accent">
        <v-btn icon dark @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Toelichting</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div v-if="formal" class="ma-10">
        {{ noteAFormal }} <br />
        {{ noteBFormal }}
      </div>
      <div v-if="!formal" class="ma-10">
        {{ noteAInf }} <br />
        {{ noteBInf }}
      </div>
      <v-divider />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "TaNoteModal",
  props: [
    "visible",
    "noteAFormal",
    "noteBFormal",
    "noteAInf",
    "noteBInf",
    "formal",
  ],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>

<style scoped></style>
