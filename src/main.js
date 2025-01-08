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
// import ChatButton from "./components/ChatButton.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/services", component: Services },
  { path: "/industries", component: Industries },
  { path: "/industry/:name", component: IndustryDetails },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.component("Header", Header);
app.use(router).mount("#app");
