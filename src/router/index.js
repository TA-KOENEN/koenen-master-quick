import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import LoginB from "../views/LoginB";
import Modules from "../views/Modules";
import Consultants from "@/views/Consultants";
import Projects from "@/views/Projects";
import Module1 from "@/views/Module1";
import Module2 from "@/views/Module2";
import Module3 from "@/views/Module3";
import Module4 from "@/views/Module4";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/loginB",
    name: "LoginB",
    component: LoginB,
  },
  {
    path: "/modules",
    name: "Modules",
    component: Modules,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/consultants",
    name: "consultants",
    component: Consultants,
  },
  {
    path: "/familie",
    name: "Module1",
    component: Module1,
  },
  {
    path: "/conflicten",
    name: "Module2",
    component: Module2,
  },
  {
    path: "/toekomstvisie",
    name: "Module3",
    component: Module3,
  },
  {
    path: "/waardenengedrag",
    name: "Module4",
    component: Module4,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
