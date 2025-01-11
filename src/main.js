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
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add Font Awesome icons to the library
library.add(fas, fab);

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
    config: { id: "G-R53JELHZWR" },
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
