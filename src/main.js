import "./assets/main.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Services from "./views/Services.vue";
import Industries from "./views/Industries.vue";
import About from "./views/About.vue";
import Header from "./components/Header.vue";
import IndustryDetails from "./views/IndustryDetails.vue";
import Contact from "./views/contact.vue";
import FAQ from "./views/FAQ.vue";
import ChatButton from "./components/ChatButton.vue";
import VueGtag from "vue-gtag";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/services", component: Services },
  { path: "/industries", component: Industries },
  { path: "/industry/:name", component: IndustryDetails },
  { path: "/about", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/faq", name: "FAQ", component: FAQ },
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
    config: { id: "G-06CXWV5M5J" }, // Replace with your actual Google Analytics ID
  },
  router
);

app.component("Header", Header);
app.component("ChatButton", ChatButton);
app.use(router).mount("#app");
