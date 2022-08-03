import Home from '../views/Home.vue'
import About from '../views/About.vue'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Home , name:"home"},
  { path: "/about", component: About , name:"about" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});
