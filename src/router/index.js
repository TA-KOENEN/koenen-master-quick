import Vue from "vue";
import VueRouter from "vue-router";
import stepOne from "@/views/stepOne.vue";
import stepTwo from "@/views/stepTwo.vue";
import stepThree from "@/views/stepThree";
import stepFour from "@/views/stepFour";
import stepFive from "@/views/stepFive";
import stepSix from "@/views/stepSix";
import stepSeven from "@/views/stepSeven";
import stepEight from "@/views/stepEight";
import stepNine from "@/views/stepNine";
import stepTen from "@/views/stepTen";
import stepEleven from "@/views/stepEleven";
import stepTwelve from "@/views/stepTwelve";
import stepThirteen from "@/views/stepThirteen";
import stepEnd from "@/views/stepEnd";
import LoginSecond from "../views/LoginSecond";
import Intro from "@/views/Intro";
import Start from "@/views/Start";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "Start",
      component: Start,
    },
    {
      path: "/intro",
      name: "Intro",
      component: Intro,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginSecond,
    },
    {
      path: "/een",
      name: "stepOne",
      component: stepOne,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/twee",
      name: "stepTwo",
      component: stepTwo,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/drie",
      name: "stepThree",
      component: stepThree,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/vier",
      name: "stepFour",
      component: stepFour,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/vijf",
      name: "stepFive",
      component: stepFive,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/zes",
      name: "stepSix",
      component: stepSix,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/zeven",
      name: "stepSeven",
      component: stepSeven,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/acht",
      name: "stepEight",
      component: stepEight,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/negen",
      name: "stepNine",
      component: stepNine,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/tien",
      name: "stepTen",
      component: stepTen,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/elf",
      name: "stepEleven",
      component: stepEleven,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/twaalf",
      name: "stepTwelve",
      component: stepTwelve,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/dertien",
      name: "stepThirteen",
      component: stepThirteen,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/einde",
      name: "stepEnd",
      component: stepEnd,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "*",
      component: Start,
      name: "Start",
    },
  ],
});

export default router;
