<template>
  <div>
    <h3>{{ headText }}</h3>
    <br />
    {{ textA }}
    <br />
    <br />
    {{ textB }}
    <br />
    <br />
    {{ textC }}
    <br />
    <br />
    {{ textD }}
    <br />
    <br />
    {{ textE }}
    <br />
    <br />
    {{ firstName }} {{ lastName }}
    <br />
    <br />
    {{ textF }}
    {{ textG }}
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "textLeftEnd",
  props: [
    "headText",
    "textA",
    "textB",
    "textC",
    "textD",
    "textE",
    "textF",
    "textG",
    "firstName",
    "lastName",
  ],
};
</script>

<style scoped></style>
