import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import store from "./shared/store";

import App from "./App.vue";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";


const routes = [
  { path: "/", component : Home },
  { path: "/about", component : About },
  { path: "/contact", component : Contact },
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  render: h=>h(App),
  router,
  store
});
