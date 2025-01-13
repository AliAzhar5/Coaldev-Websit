import "./assets/main.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Header from "./components/Header.vue";
import ChatButton from "./components/ChatButton.vue";
import VueGtag from "vue-gtag";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add Font Awesome icons to the library
library.add(fas, fab);

// Lazy load route components
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("./views/Home.vue") },
  { path: "/services", component: () => import("./views/Services.vue") },
  { path: "/industries", component: () => import("./views/Industries.vue") },
  {
    path: "/industry/:name",
    component: () => import("./views/IndustryDetails.vue"),
  },
  { path: "/about", component: () => import("./views/About.vue") },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("./views/contact.vue"),
  },
  { path: "/faq", name: "FAQ", component: () => import("./views/FAQ.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

const app = createApp(App);
app.use(
  VueGtag,
  {
    config: { id: "G-J21S0WHF57" },
    appName: "CoalDev Website",
    debug: true,
    pageTrackerScreenviewEnabled: true,
  },
  router
);

app.component("Header", Header);
app.component("ChatButton", ChatButton);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router).mount("#app");
