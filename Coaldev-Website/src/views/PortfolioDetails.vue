<template>
  <div class="min-h-screen bg-gray-50 pt-24">
    <div v-if="project" class="container mx-auto px-4 py-8">
      <!-- Combined Navigation breadcrumb and Project Name -->
      <div
        class="bg-[#303539] text-white p-4 rounded-lg mb-8 min-h-[200px] background-image"
      >
        <div class="text-sm">
          <router-link to="/" class="hover:text-[#448CA1]">Home</router-link>
          <span class="mx-2">&gt;</span>
          <router-link to="/portfolio" class="hover:text-[#448CA1]"
            >Portfolio</router-link
          >
          <span class="mx-2">&gt;</span>
          <span>{{ project.name }}</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-bold mt-4">{{ project.name }}</h1>
      </div>

      <div class="space-y-6">
        <!-- Problem Statement -->
        <div class="bg-white border-l-4 border-[#303539] shadow-lg p-6">
          <h2 class="text-xl sm:text-3xl font-bold text-[#303539] mb-4">
            Problem Statement
          </h2>
          <p class="text-[#303539] text-justify">{{ project.problem }}</p>
        </div>

        <!-- Solution -->
        <div class="bg-white border-l-4 border-[#303539] shadow-lg p-6">
          <h2 class="text-xl sm:text-3xl font-bold text-[#303539] mb-4">
            Solution
          </h2>
          <p class="text-[#303539] text-justify">{{ project.solution }}</p>
        </div>

        <!-- Technology Stack and Services -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Technology Stack -->
          <div class="bg-white border-l-4 border-[#303539] shadow-lg p-6">
            <h2 class="text-xl sm:text-3xl font-bold text-[#303539] mb-4">
              Technology Stack
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul class="list-disc pl-4 space-y-2">
                <li
                  v-for="(tech, index) in firstHalfTech"
                  :key="tech"
                  class="text-[#303539]"
                >
                  {{ tech }}
                </li>
              </ul>
              <ul v-if="secondHalfTech.length" class="list-disc pl-4 space-y-2">
                <li
                  v-for="(tech, index) in secondHalfTech"
                  :key="tech"
                  class="text-[#303539]"
                >
                  {{ tech }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Services -->
          <div class="bg-white border-l-4 border-[#303539] shadow-lg p-6">
            <h2 class="text-xl sm:text-3xl font-bold text-[#303539] mb-4">
              Services
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul class="list-disc pl-4 space-y-2">
                <li
                  v-for="(service, index) in firstHalfServices"
                  :key="service"
                  class="text-[#303539]"
                >
                  {{ service }}
                </li>
              </ul>
              <ul
                v-if="secondHalfServices.length"
                class="list-disc pl-4 space-y-2"
              >
                <li
                  v-for="(service, index) in secondHalfServices"
                  :key="service"
                  class="text-[#303539]"
                >
                  {{ service }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Industry -->
        <div class="bg-white border-l-4 border-[#303539] shadow-lg p-6">
          <h2 class="text-xl sm:text-3xl font-bold text-[#303539] mb-4">
            Industry
          </h2>
          <ul class="list-disc pl-4 space-y-2">
            <li
              v-for="ind in project.industry"
              :key="ind"
              class="text-[#303539]"
            >
              {{ ind }}
            </li>
          </ul>
        </div>

        <!-- Website Link -->
        <div
          v-if="project.website_link"
          class="bg-white border-l-4 border-[#303539] shadow-lg p-6"
        >
          <h2 class="text-xl sm:text-3xl font-bold text-[#303539] mb-4">
            Website
          </h2>
          <a
            :href="project.website_link"
            target="_blank"
            class="text-[#448CA1] hover:underline inline-flex items-center gap-2"
          >
            <span>{{ project.website_link }}</span>
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const project = ref(null);

// Split technology stack into two columns if needed
const firstHalfTech = computed(() => {
  if (!project.value?.technology_stack) return [];
  const midpoint = Math.ceil(project.value.technology_stack.length / 2);
  return project.value.technology_stack.slice(0, midpoint);
});

const secondHalfTech = computed(() => {
  if (!project.value?.technology_stack) return [];
  const midpoint = Math.ceil(project.value.technology_stack.length / 2);
  return project.value.technology_stack.slice(midpoint);
});

// Split services into two columns if needed
const firstHalfServices = computed(() => {
  if (!project.value?.services) return [];
  const midpoint = Math.ceil(project.value.services.length / 2);
  return project.value.services.slice(0, midpoint);
});

const secondHalfServices = computed(() => {
  if (!project.value?.services) return [];
  const midpoint = Math.ceil(project.value.services.length / 2);
  return project.value.services.slice(midpoint);
});

const fetchProject = async () => {
  try {
    const projectsResponse = await axios.get(
      "http://127.0.0.1:8000/coaldev_backend/projects/"
    );

    // Find the project with matching ID
    const projectData = projectsResponse.data.find(
      (p) => p.id === parseInt(route.params.id)
    );

    if (!projectData) {
      console.error("Project not found");
      return;
    }

    project.value = projectData;
  } catch (error) {
    console.error("Error fetching project details:", error);
  }
};

onMounted(() => {
  fetchProject();
});
</script>

<style scoped>
.background-image {
  background-image: url("https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1663341408/1663341407.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
}
</style>
