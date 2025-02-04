<template>
  <footer class="bg-[#091924] text-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- SERVICES Column -->
        <div class="col-span-1">
          <h3 class="text-lg font-bold mb-4">SERVICES</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="service in services" :key="service.name">
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >{{ service.name }}</a
              >
            </li>
          </ul>
        </div>

        <!-- TECHNOLOGIES Column -->
        <div class="col-span-1">
          <h3 class="text-lg font-bold mb-4">TECHNOLOGIES</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Node.js</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Ruby on Rails</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >React.js</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Java</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >OpenAI</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Big Data</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >AI development</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Blockchain</a
              >
            </li>
          </ul>
        </div>

        <!-- INDUSTRIES Column -->
        <div class="col-span-1">
          <h3 class="text-lg font-bold mb-4">INDUSTRIES</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="industry in industries" :key="industry.name">
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >{{ industry.name }}</a
              >
            </li>
          </ul>
        </div>

        <!-- COMPANY Column -->
        <div class="col-span-1">
          <h3 class="text-lg font-bold mb-4">COMPANY</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Industries</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Portfolio</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >FAQ</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#448CA1] transition-colors duration-300"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section with Privacy Policy, Sitemap, DMCA -->
      <div class="mt-12 pt-8 border-t border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              class="text-sm hover:text-[#448CA1] transition-colors duration-300"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="text-sm hover:text-[#448CA1] transition-colors duration-300"
              >Terms and Consitions</a
            >
          </div>
          <div class="text-sm">© 2025 CoalDev. All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { store } from "@/components/Store";

const industries = store.industries;
const services = [
  {
    name: "Custom Software Development",
    icon: "fas fa-code",
  },
  {
    name: "Web Application Development",
    icon: "fas fa-globe",
  },
  {
    name: "Mobile Application Development",
    icon: "fas fa-mobile-alt",
  },
  {
    name: "UI/UX Design",
    icon: "fas fa-paint-brush",
  },
  {
    name: "Cloud Computing",
    icon: "fas fa-cloud",
  },
  {
    name: "Quality Assurance",
    icon: "fas fa-check-circle",
  },
  {
    name: "Project Management",
    icon: "fas fa-tasks",
  },
  {
    name: "Artificial Intelligence",
    icon: "fas fa-brain",
  },
  {
    name: "Generative AI",
    icon: "fas fa-robot",
  },
];
</script>
