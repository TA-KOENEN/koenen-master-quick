<template>
  <v-container xs12 sm6 offset-sm3>
    <v-row justify="center">
      <div class="hoofd" @click="begin">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoo"
            :src="
              require(`@/assets/core/logo_${
                $vuetify.theme.dark ? 'light' : 'dark'
              }.png`)
            "
            :width="imageHeight"
            alt="logo"
            style="cursor: pointer"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="tekst mt-10">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoo2"
            src="img/tekst-wit.png"
            :width="imageHeight2"
            alt="logo"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="verder info--text">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft"
          appear
        >
          <p class="logoo3">
            Klik op het logo om verder te gaan <br /><br />
            Click on the logo to continue
          </p>
        </transition>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {
      animated: false,
      tokkie: null,
      token: null,
      email: null,
      companyName: null,
      place: null,
      firstNameUser: null,
      lastNameUser: null,
      emailUser: null,
      telephoneUser: null,
    };
  },

  methods: {
    begin() {
      this.$router.push({ name: "LoginFam" });
    },
  },

  computed: {
    // eslint-disable-next-line
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "350px";
        case "md":
          return "350px";
        case "lg":
          return "350px";
        case "xl":
          return "600px";
      }
    },
    // eslint-disable-next-line
    imageHeight2() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "250px";
        case "md":
          return "300px";
        case "lg":
          return "400px";
        case "xl":
          return "600px";
      }
    },
  },
};
</script>

<style scoped>
.hoofd {
  padding-top: 10vh;
}

.logoo {
  animation-duration: 3s;
}

.logoo2 {
  animation-duration: 1s;
  animation-delay: 3s;
}
.logoo3 {
  animation-duration: 1s;
  animation-delay: 3s;
}

.verder {
  animation-delay: 3s;
}

v-image {
  margin-left: 20px;
}
</style>
