<template>
  <footer class="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Industries Section -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold mb-4">Industries</h3>
          <div class="grid grid-cols-2 gap-4">
            <!-- Column 1 -->
            <ul class="space-y-2">
              <li
                v-for="(industry, index) in firstColumnIndustries"
                :key="index"
              >
                {{ industry.name }}
              </li>
            </ul>
            <!-- Column 2 -->
            <ul class="space-y-2">
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
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Column 1 -->
            <ul class="space-y-2">
              <li>Software Development</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
            </ul>
            <!-- Column 2 -->
            <ul class="space-y-2">
              <li>Quality Assurance</li>
              <li>Cloud Computing</li>
              <li>Artificial Intelligence</li>
              <li>Generative AI</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        <!-- Find Us On Section -->
        <div class="col-span-1 sm:col-span-2 lg:col-span-1 lg:ml-20">
          <h3 class="text-lg font-semibold mb-4">Find Us On</h3>
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
              >
                <i class="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
              >
                <i class="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
              >
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
              >
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
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
import { computed } from "vue";
import { store } from "@/components/Store"; // Adjust the path based on your store.js location

// Computed properties to extract industries
const firstColumnIndustries = computed(() => store.industries.slice(0, 7));
const secondColumnIndustries = computed(() => store.industries.slice(7));
</script>
