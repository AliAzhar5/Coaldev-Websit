<template>
  <div class="overflow-x-hidden">
    <div class="relative mt-[64px]">
      <div class="relative z-10">
        <h1
          class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 mx-4 sm:ml-12 md:ml-24 mt-16 sm:mt-24 md:mt-32"
        >
          {{ industryTitle }}
        </h1>

        <div class="subcategories">
          <h2
            class="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 mx-4 sm:ml-12 md:ml-24 mt-8 sm:mt-10"
          >
            Subcategories:
          </h2>
          <div
            class="flex flex-row flex-wrap mx-4 sm:ml-12 md:ml-24 gap-4 sm:gap-6"
          >
            <div
              v-for="subcategory in subcategories"
              :key="subcategory.name"
              @click="selectedSubcategory = subcategory"
              class="bg-gray-50 p-4 transition-all duration-500 ease-in-out cursor-pointer group border-l-4 border-gray-900 relative overflow-hidden"
              :class="{ 'bg-gray-900': selectedSubcategory === subcategory }"
            >
              <div
                class="absolute inset-0 bg-gray-900 transform"
                :class="
                  selectedSubcategory === subcategory
                    ? 'translate-x-0'
                    : '-translate-x-full'
                "
              ></div>
              <div class="relative z-10">
                <div
                  class="text-xl font-bold"
                  :class="
                    selectedSubcategory === subcategory
                      ? 'text-white'
                      : 'text-gray-900'
                  "
                >
                  {{ subcategory.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Display problems and solutions when subcategory is selected -->
        <div
          v-if="selectedSubcategory"
          class="problems-section mx-4 sm:ml-12 md:ml-24 mt-16 sm:mt-20 md:mt-24"
        >
          <h3
            class="text-2xl sm:text-3xl font-semibold text-gray-800 underline decoration-gray-800 mb-4 sm:mb-6"
          >
            {{ selectedSubcategory.name }}:
          </h3>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24 max-w-[1200px]"
          >
            <div
              v-for="(problem, index) in selectedSubcategory.problems"
              :key="index"
              class="bg-gray-50 p-8 transition-all duration-500 ease-in-out hover:bg-gray-900 group border-l-4 border-gray-900 relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              ></div>
              <div class="relative z-10">
                <h4
                  class="text-xl text-gray-900 font-bold mb-4 group-hover:text-white transition-colors duration-300"
                >
                  {{ problem }}
                </h4>
                <p
                  class="text-gray-700 text-base group-hover:text-white transition-colors duration-300 text-justify"
                >
                  {{ selectedSubcategory.description[index] }}
                </p>
                <!-- New Solution Section -->
                <div
                  class="mt-6 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-44"
                >
                  <button
                    @click.stop="toggleSolution(index)"
                    class="text-sm font-semibold group-hover:text-white text-gray-700 flex items-center gap-2"
                  >
                    View Solution
                    <svg
                      :class="{ 'rotate-180': openSolutions[index] }"
                      class="w-4 h-4 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <a
                    href="/contact"
                    class="text-sm font-semibold group-hover:text-white text-gray-700 flex items-center gap-2"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Contact Us for This Solution
                  </a>
                </div>
                <div
                  v-if="openSolutions[index]"
                  class="mt-4 text-gray-700 group-hover:text-white transition-all duration-300"
                  :class="{
                    'opacity-100': openSolutions[index],
                    'opacity-0': !openSolutions[index],
                  }"
                >
                  {{ selectedSubcategory.solutions[index] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from "../components/Store.js";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const industryName = route.params.name;
const selectedSubcategory = ref(null);
const subcategories = ref([]);
const industryTitle = ref("");
const openSolutions = ref({});

const toggleSolution = (index) => {
  openSolutions.value[index] = !openSolutions.value[index];
};

onMounted(() => {
  const formattedName = industryName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const industry = store.industries.find(
    (industry) => industry.name.toLowerCase() === formattedName.toLowerCase()
  );

  if (industry) {
    industryTitle.value = industry.name;
    subcategories.value = industry.subcategories || [];
    if (subcategories.value.length > 0) {
      selectedSubcategory.value = subcategories.value[0];
    }
  } else {
    console.warn(`Industry "${formattedName}" not found`);
  }
});
</script>
