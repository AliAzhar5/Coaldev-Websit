<template>
  <div>
    <!-- Hero section with background image -->
    <div class="relative h-[600px]">
      <div class="absolute inset-0">
        <img
          src="@/assets/industry_image.jpg"
          alt="Industry Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <!-- Content overlay -->
      <div class="relative z-10 pt-32 px-6 md:px-12 text-white">
        <p class="text-2xl text-white mx-4 sm:ml-24 mt-10 sm:mt-20">
          Home > <span class="text-[#448CA1]">Industries</span>
        </p>
        <h1
          class="text-2xl sm:text-4xl lg:text-6xl font-semibold mb-4 mx-4 sm:ml-24 mt-10 sm:mt-20"
        >
          INDUSTRIES
        </h1>
        <p
          class="text-base sm:text-lg mx-4 sm:ml-24 mt-5 max-w-[750px] leading-normal text-white"
        >
          Empowering industries with innovative software solutions designed to
          streamline operations and enhance efficiency. Partner with us to
          transform your business through cutting-edge technology.
        </p>
      </div>
    </div>

    <!-- New section for original content -->
    <div class="container px-6 sm:px-12 py-12 text-left">
      <h2
        class="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 mt-10 italic"
      >
        OUR EXPERTISE EXTENDS ACROSS
        <span class="text-[#448CA1]">INDUSTRIES</span>
      </h2>
      <p
        class="text-base sm:text-lg lg:text-xl px-1 mt-5 max-w-[750px] leading-normal text-[#303539] text-justify"
      >
        Our IT solutions company has extensive experience across a wide range of
        industries. No matter your niche, partnering with us ensures you receive
        high-quality, innovative solutions that set you apart from the
        competition.
      </p>
    </div>

    <!-- Rest of the existing content -->
    <div class="text-left">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16 mx-4 sm:ml-10 mb-16 sm:mb-24 text-left"
      >
        <router-link
          :to="`/industry/${industry.name.toLowerCase().replace(/\s+/g, '-')}`"
          v-for="industry in industries"
          :key="industry.name"
          class="bg-gray-50 p-6 transition-all duration-500 ease-in-out hover:bg-[#303539] group border-l-4 border-[#303539] relative overflow-hidden cursor-pointer text-left"
        >
          <div
            class="absolute inset-0 bg-[#303539] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
          ></div>
          <div class="relative z-10">
            <div class="flex items-center mb-4">
              <div
                class="text-4xl mr-4 text-[#303539] group-hover:text-white transition-colors duration-300"
              >
                <i :class="industry.icon"></i>
              </div>
              <h2
                class="text-xl text-[#303539] font-bold group-hover:text-white transition-colors duration-300"
              >
                {{ industry.name }}
              </h2>
            </div>
            <p
              class="text-gray-700 text-lg whitespace-pre-line ml-4 group-hover:text-white transition-colors duration-300"
            >
              {{ industry.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from "../components/Store.js";
const industries = store.industries;
</script>
