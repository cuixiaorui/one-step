import { Home, About } from "./views";
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
