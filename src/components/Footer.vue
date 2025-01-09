<template>
  <footer class="bg-[#091924] text-white py-8 px-4 sm:px-20">
    <div class="max-w-[1440px] mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div class="col-span-1">
          <h3 class="text-lg font-semibold mb-4 flex items-center space-x-2">
            <span>INDUSTRIES</span>
            <button
              @click="toggleIndustries"
              class="sm:hidden flex items-center flex-shrink-0 ml-auto"
            >
              <span
                :class="{ 'rotate-180': showIndustries }"
                class="transform transition-transform"
              >
                &#9660;
              </span>
            </button>
          </h3>
          <div class="grid grid-cols-2 gap-2">
            <div class="sm:hidden">
              <div v-if="showIndustries" class="mt-2">
                <ul class="space-y-2 text-sm leading-tight">
                  <li
                    v-for="(industry, index) in firstColumnIndustries"
                    :key="index"
                  >
                    {{ industry.name }}
                  </li>
                </ul>
                <ul class="space-y-2 text-sm leading-tight">
                  <li
                    v-for="(industry, index) in secondColumnIndustries"
                    :key="index"
                  >
                    {{ industry.name }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Column 1 for larger screens -->
            <ul class="space-y-2 text-sm leading-tight sm:block hidden">
              <li
                v-for="(industry, index) in firstColumnIndustries"
                :key="index"
              >
                {{ industry.name }}
              </li>
            </ul>
            <!-- Column 2 for larger screens -->
            <ul class="space-y-2 text-sm leading-tight sm:block hidden">
              <li
                v-for="(industry, index) in secondColumnIndustries"
                :key="index"
              >
                {{ industry.name }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Services Section -->
        <div class="col-span-1 lg:ml-20">
          <h3 class="text-lg font-semibold mb-4 flex items-center space-x-2">
            <span>SERVICES</span>
            <button
              @click="toggleServices"
              class="sm:hidden flex items-center flex-shrink-0 ml-auto"
            >
              <span
                :class="{ 'rotate-180': showServices }"
                class="transform transition-transform"
              >
                &#9660;
              </span>
            </button>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="sm:hidden">
              <div v-if="showServices" class="mt-2">
                <ul class="space-y-2 text-sm leading-tight">
                  <li>Custom Software Development</li>
                  <li>Web App Development</li>
                  <li>Mobile App Development</li>
                  <li>UI/UX Design</li>
                  <li>AI Chatbots</li>
                </ul>
                <ul class="space-y-2 text-sm leading-tight">
                  <li>Quality Assurance</li>
                  <li>Cloud Computing</li>
                  <li>Artificial Intelligence</li>
                  <li>Generative AI</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>

            <!-- Column 1 for larger screens -->
            <ul class="space-y-2 text-sm leading-tight sm:block hidden">
              <li>Custom Software Development</li>
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>AI Chatbots</li>
            </ul>
            <!-- Column 2 for larger screens -->
            <ul class="space-y-2 text-sm leading-tight sm:block hidden">
              <li>Quality Assurance</li>
              <li>Cloud Computing</li>
              <li>Artificial Intelligence</li>
              <li>Generative AI</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        <!-- New Find Us On Section -->
        <div class="mt-8">
          <h3 class="text-lg font-semibold mb-4">FIND US ON</h3>
          <div class="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              class="text-white hover:text-blue-600"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" class="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              class="text-white hover:text-blue-400"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" class="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              class="text-white hover:text-blue-700"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" class="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              class="text-white hover:text-pink-600"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Line -->
      <div
        class="mt-8 pt-8 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
      >
        <div
          class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
        >
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Terms of Service</a>
        </div>
        <div class="text-sm text-center sm:text-left">
          <span>&copy; 2025 CoalDev. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref } from "vue";
import { store } from "@/components/Store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const firstColumnIndustries = computed(() => store.industries.slice(0, 7));
const secondColumnIndustries = computed(() => store.industries.slice(7));

const showIndustries = ref(false);
const showServices = ref(false);

const toggleIndustries = () => {
  showIndustries.value = !showIndustries.value;
};

const toggleServices = () => {
  showServices.value = !showServices.value;
};
</script>
