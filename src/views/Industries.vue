<template>
  <div class="overflow-x-hidden">
    <div class="relative mt-[64px]">
      <div class="relative z-10">
        <div class="pt-20 px-6 md:px-12">
          <h1
            class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 mx-4 sm:ml-24 mt-10 sm:mt-20"
          >
            OUR EXPERTISE EXTENDS ACROSS
            <span class="text-[#008C96]">INDUSTRIES</span>
          </h1>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-700 mx-4 sm:ml-24 mt-5 max-w-[750px] leading-normal"
          >
            Our IT solutions company has extensive experience across a wide
            range of industries. No matter your niche, partnering with us
            ensures you receive high-quality, innovative solutions that set you
            apart from the competition.
          </p>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16 mx-4 sm:ml-24 mb-16 sm:mb-24"
          >
            <router-link
              :to="`/industry/${industry.name
                .toLowerCase()
                .replace(/\s+/g, '-')}`"
              v-for="industry in industries"
              :key="industry.name"
              class="bg-gray-50 p-6 transition-all duration-500 ease-in-out hover:bg-gray-900 group border-l-4 border-gray-900 relative overflow-hidden cursor-pointer"
            >
              <div
                class="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              ></div>
              <div class="relative z-10">
                <div class="flex items-center mb-4">
                  <div
                    class="text-4xl mr-4 text-gray-900 group-hover:text-white transition-colors duration-300"
                  >
                    <i :class="industry.icon"></i>
                  </div>
                  <h2
                    class="text-xl text-gray-900 font-bold group-hover:text-white transition-colors duration-300"
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
        <div class="relative">
          <div class="container mx-auto px-4 sm:px-10 py-10 sm:py-20">
            <div
              class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"
            >
              <div class="w-full lg:w-2/3 mt-0 lg:-mt-32">
                <p
                  class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 mx-4"
                >
                  INDUSTRIES WE <span class="text-[#008C96]">SERVE</span>
                </p>
                <p
                  class="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 mx-4"
                >
                  At Coaldev, we provide tailored IT solutions to transform
                  businesses across healthcare, finance, education, retail, and
                  more. From startups to enterprises, Coaldev delivers
                  cutting-edge technology to drive growth and efficiency in
                  every industry we serve.
                </p>
              </div>
              <div class="w-full lg:w-1/3 pl-0 lg:pl-20">
                <img
                  src="@/assets/industries.jpg"
                  alt="Computer Setup"
                  class="rounded-lg shadow-xl w-full max-w-[100%] h-auto"
                />
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
const industries = store.industries;
</script>
