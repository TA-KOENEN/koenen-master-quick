import Vue from "vue";
import VueRouter from "vue-router";
import Start from "@/views/Start";
import Eind from "@/views/Eind";

const loginA = () =>
  import("../views/ascan/loginScanA" /* webpackChunkName: "loginA" */);
const introA = () =>
  import("../views/ascan/introScanA" /* webpackChunkName: "introA" */);
const indexA = () =>
  import("../views/ascan/scanIndexA" /* webpackChunkName: "indexA" */);

const loginB = () =>
  import("../views/bscan/loginScanB" /* webpackChunkName: "loginB" */);
const introB = () =>
  import("../views/bscan/introScanB" /* webpackChunkName: "introB" */);
const indexB = () =>
  import("../views/bscan/scanIndexB" /* webpackChunkName: "indexB" */);

const loginC = () =>
  import("../views/cscan/loginScanC" /* webpackChunkName: "loginC" */);
const introC = () =>
  import("../views/cscan/introScanC" /* webpackChunkName: "introC" */);
const indexC = () =>
  import("../views/cscan/scanIndexC" /* webpackChunkName: "indexC" */);

const loginD = () =>
  import("../views/dscan/loginScanD" /* webpackChunkName: "loginD" */);
const introD = () =>
  import("../views/dscan/introScanD" /* webpackChunkName: "introD" */);
const indexD = () =>
  import("../views/dscan/scanIndexD" /* webpackChunkName: "indexD" */);

const loginE = () =>
  import("../views/escan/loginScanE" /* webpackChunkName: "loginE" */);
const introE = () =>
  import("../views/escan/introScanE" /* webpackChunkName: "introE" */);
const indexE = () =>
  import("../views/escan/scanIndexE" /* webpackChunkName: "indexE" */);

const loginH = () =>
  import("../views/hscan/loginScanH" /* webpackChunkName: "loginH" */);
const introH = () =>
  import("../views/hscan/introScanH" /* webpackChunkName: "introH" */);
const indexH = () =>
  import("../views/hscan/scanIndexH" /* webpackChunkName: "indexH" */);

const loginI = () =>
  import("../views/iscan/loginScanI" /* webpackChunkName: "loginI" */);
const introI = () =>
  import("../views/iscan/introScanI" /* webpackChunkName: "introI" */);
const indexI = () =>
  import("../views/iscan/scanIndexI" /* webpackChunkName: "indexI" */);

const loginJ = () =>
  import("../views/jscan/loginScanJ" /* webpackChunkName: "loginJ" */);
const introJ = () =>
  import("../views/jscan/introScanJ" /* webpackChunkName: "introJ" */);
const indexJ = () =>
  import("../views/jscan/scanIndexJ" /* webpackChunkName: "indexJ" */);

const loginK = () =>
  import("../views/kscan/loginScanK" /* webpackChunkName: "loginK" */);
const introK = () =>
  import("../views/kscan/introScanK" /* webpackChunkName: "introK" */);
const indexK = () =>
  import("../views/kscan/scanIndexK" /* webpackChunkName: "indexK" */);

const loginL = () =>
  import("../views/lscan/loginScanL" /* webpackChunkName: "loginL" */);
const introL = () =>
  import("../views/lscan/introScanL" /* webpackChunkName: "introL" */);
const indexL = () =>
  import("../views/lscan/scanIndexL" /* webpackChunkName: "indexL" */);

const loginM = () =>
  import("../views/mscan/loginScanM" /* webpackChunkName: "loginM" */);
const introM = () =>
  import("../views/mscan/introScanM" /* webpackChunkName: "introM" */);
const indexM = () =>
  import("../views/mscan/scanIndexM" /* webpackChunkName: "indexM" */);

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
      path: "/noodopvolging",
      name: "index_a",
      component: indexA,
    },
    {
      path: "/login-noodopvolging",
      name: "login_a",
      component: loginA,
    },
    {
      path: "/intro-noodopvolging",
      name: "intro_a",
      component: introA,
    },
    {
      path: "/familiestatuut",
      name: "index_b",
      component: indexB,
    },
    {
      path: "/login-familiestatuut",
      name: "login_b",
      component: loginB,
    },
    {
      path: "/intro-familiestatuut",
      name: "intro_b",
      component: introB,
    },
    {
      path: "/optimaal",
      name: "index_c",
      component: indexC,
    },
    {
      path: "/login-optimaal",
      name: "login_c",
      component: loginC,
    },
    {
      path: "/intro-optimaal",
      name: "intro_c",
      component: introC,
    },
    {
      path: "/resultaat",
      name: "index_d",
      component: indexD,
    },
    {
      path: "/login-resultaat",
      name: "login_d",
      component: loginD,
    },
    {
      path: "/intro-resultaat",
      name: "intro_d",
      component: introD,
    },
    {
      path: "/juridisch",
      name: "index_e",
      component: indexE,
    },
    {
      path: "/login-juridisch",
      name: "login_e",
      component: loginE,
    },
    {
      path: "/intro-juridisch",
      name: "intro_e",
      component: introE,
    },
    {
      path: "/exit-planning",
      name: "index_h",
      component: indexH,
    },
    {
      path: "/login-exit-planning",
      name: "login_h",
      component: loginH,
    },
    {
      path: "/intro-exit-planning",
      name: "intro_h",
      component: introH,
    },
    {
      path: "/cyber-security",
      name: "index_i",
      component: indexI,
    },
    {
      path: "/login-cyber-security",
      name: "login_i",
      component: loginI,
    },
    {
      path: "/intro-cyber-security",
      name: "intro_i",
      component: introI,
    },
    {
      path: "/IT-strategy",
      name: "index_j",
      component: indexJ,
    },
    {
      path: "/login-IT-strategy",
      name: "login_j",
      component: loginJ,
    },
    {
      path: "/intro-IT-strategy",
      name: "intro_j",
      component: introJ,
    },
    {
      path: "/prive-situatie",
      name: "index_k",
      component: indexK,
    },
    {
      path: "/login-prive-situatie",
      name: "login_k",
      component: loginK,
    },
    {
      path: "/intro-prive-situatie",
      name: "intro_k",
      component: introK,
    },
    {
      path: "/familie",
      name: "index_l",
      component: indexL,
    },
    {
      path: "/login-familie",
      name: "login_l",
      component: loginL,
    },
    {
      path: "/intro-familie",
      name: "intro_l",
      component: introL,
    },
    {
      path: "/groei",
      name: "index_m",
      component: indexM,
    },
    {
      path: "/login-groei",
      name: "login_m",
      component: loginM,
    },
    {
      path: "/intro-groei",
      name: "intro_m",
      component: introM,
    },

    {
      path: "/",
      name: "Start",
      component: Start,
    },
    {
      path: "/uitgelogd",
      name: "Eind",
      component: Eind,
    },
    {
      path: "*",
      component: Start,
      name: "Start",
    },
  ],
});

export default router;
