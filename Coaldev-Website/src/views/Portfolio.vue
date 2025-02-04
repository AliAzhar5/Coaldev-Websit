<template>
  <div>
    <!-- Hero section with background image -->
    <div class="relative h-[600px]">
      <div class="absolute inset-0">
        <img
          src="@/assets/industry_image.jpg"
          alt="Portfolio Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <!-- Content overlay -->
      <div class="relative z-10 pt-32 px-6 md:px-12 text-white">
        <p class="text-2xl text-white mx-4 sm:ml-24 mt-10 sm:mt-20">
          Home &gt; <span class="text-[#448CA1]">Portfolio</span>
        </p>
        <h1
          class="text-2xl sm:text-4xl lg:text-6xl font-semibold mb-4 mx-4 sm:ml-24 mt-10 sm:mt-20"
        >
          OUR WORK
        </h1>
        <p
          class="text-base sm:text-lg mx-4 sm:ml-24 mt-5 max-w-[750px] leading-normal text-white"
        >
          Explore our diverse portfolio of successful projects across various
          industries.
        </p>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="text-left">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16 mx-4 sm:ml-10 mb-16 sm:mb-24 text-left"
      >
        <router-link
          v-for="project in projects"
          :key="project.id"
          :to="`/portfolio/${project.id}`"
          class="bg-gray-50 transition-all duration-500 ease-in-out hover:bg-[#303539] group border-l-4 border-[#303539] relative overflow-hidden cursor-pointer text-left"
        >
          <div
            class="absolute inset-0 bg-[#303539] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
          ></div>
          <div class="relative z-10">
            <img
              :src="project.image_url"
              :alt="project.name"
              class="w-full h-64 object-cover"
            />
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <h2
                  class="text-xl text-[#303539] font-bold group-hover:text-white transition-colors duration-300"
                >
                  {{ project.name }}
                </h2>
                <div
                  class="flex items-center gap-2 text-gray-600 group-hover:text-white"
                >
                  <i class="fas fa-eye"></i>
                  <span class="text-sm">{{ project.views || 0 }}</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="industry in project.industry"
                  :key="industry"
                  class="px-2 py-1 text-sm bg-gray-50 text-[#303539] group-hover:bg-[#303539] group-hover:text-white rounded transition-colors duration-300"
                >
                  {{ industry }}
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const projects = ref([]);
const apiUrl = import.meta.env.VITE_API_BASE_URL;

const fetchProjects = async () => {
  try {
    const [projectsResponse, imagesResponse] = await Promise.all([
      axios.get(`${apiUrl}/projects/`),
      axios.get(`${apiUrl}/images/`),
    ]);

    // Create a map of project IDs to their images
    const imageMap = new Map();
    if (Array.isArray(imagesResponse.data)) {
      imagesResponse.data.forEach((img) => {
        imageMap.set(img.project, img.image_url);
      });
    } else if (imagesResponse.data.data) {
      imageMap.set(
        imagesResponse.data.data.project,
        imagesResponse.data.data.image_url
      );
    }

    // Combine project data with images
    projects.value = projectsResponse.data.map((project) => ({
      ...project,
      image_url: imageMap.get(project.id) || "@/assets/default-project.jpg", // Use a default image if none is found
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

onMounted(() => {
  fetchProjects();
});
</script>
