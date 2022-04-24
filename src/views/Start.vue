<template>
  <v-container xs12 sm6 offset-sm3>
    <error-start />
    <v-row justify="center">
      <div class="hoofd" @click="start">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoA"
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
            class="logoB"
            src="img/tekst-wit.png"
            :width="imageHeight2"
            alt="logo"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="verder primary--text">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft"
          appear
        >
          <p class="logoC">Klik op het logo om verder te gaan <br /></p>
        </transition>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import errorStart from "@/components/core/errorStart";
import loginService from "@/utils/loginService";
export default {
  name: "Start",
  components: { errorStart },
  data() {
    return {
      firstNameClient: null,
      lastNameClient: "test",
      animated: false,
      tokkie: null,
      token: null,
      email: null,
      companyName: null,
      website_team: null,
      place: null,
      firstNameUser: null,
      lastNameUser: null,
      emailUser: null,
      telephoneUser: null,
      error: false,
      style: "formeel",
      quickId: null,
    };
  },

  methods: {
    start() {
      if (this.quickId === "quick_a") {
        this.beginA();
      } else if (this.quickId === "quick_b") {
        this.beginB();
      } else if (this.quickId === "quick_c") {
        this.beginC();
      } else if (this.quickId === "quick_d") {
        this.beginD();
      } else if (this.quickId === "quick_e") {
        this.beginE();
      } else if (this.quickId === "quick_h") {
        this.beginH();
      } else if (this.quickId === "quick_i") {
        this.beginI();
      } else if (this.quickId === "quick_j") {
        this.beginJ();
      } else if (this.quickId === "quick_k") {
        this.beginK();
      } else if (this.quickId === "quick_l") {
        this.beginL();
      } else if (this.quickId === "quick_m") {
        this.beginM();
      }
    },
    beginA() {
      const module = "moduleA";
      loginService.start(this.tokkie, module);
    },
    beginB() {
      const module = "moduleB";
      loginService.start(this.tokkie, module);
    },
    beginC() {
      const module = "moduleC";
      loginService.start(this.tokkie, module);
    },
    beginD() {
      const module = "moduleD";
      loginService.start(this.tokkie, module);
    },
    beginE() {
      const module = "moduleE";
      loginService.start(this.tokkie, module);
    },
    beginH() {
      const module = "moduleH";
      loginService.start(this.tokkie, module);
    },
    beginI() {
      const module = "moduleI";
      loginService.start(this.tokkie, module);
    },
    beginJ() {
      const module = "moduleJ";
      loginService.start(this.tokkie, module);
    },
    beginK() {
      const module = "moduleK";
      loginService.start(this.tokkie, module);
    },
    beginL() {
      const module = "moduleL";
      loginService.start(this.tokkie, module);
    },
    beginM() {
      const module = "moduleM";
      loginService.start(this.tokkie, module);
    },
  },
  mounted() {
    this.tokkie = JSON.parse(localStorage.getItem("tokkie"));
    this.quickId = JSON.parse(localStorage.getItem("quickId"));
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
  padding-top: 15vh;
}

.logoA {
  animation-duration: 3s;
}

.logoB {
  animation-duration: 1s;
  animation-delay: 3s;
}
.logoC {
  animation-duration: 1s;
  animation-delay: 3s;
}

.verder {
  animation-delay: 3s;
}

v-img {
  margin-left: 20px;
}
</style>
