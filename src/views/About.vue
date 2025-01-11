<template>
  <div class="overflow-x-hidden">
    <div class="relative h-[130vh] mt-[64px]">
      <div class="relative z-10">
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-40 lg:pt-60"
        >
          <div class="w-full">
            <p
              class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 ml-4 sm:ml-12 lg:ml-24"
            >
              ABOUT COAL<span class="text-[#008C96] italic">DEV.</span>
            </p>

            <p
              class="text-base sm:text-lg lg:text-xl text-gray-700 ml-4 sm:ml-12 lg:ml-24 mt-5 max-w-[600px] leading-normal"
            >
              CoalDev is a leading IT outsourcing company that offers the full
              range of software product development, from ideation and design to
              development and further maintenance. Our company is founded by
              savvy IT experts with roots in Big 4 consulting, so you can rely
              on our strategic vision and tech experience.
            </p>

            <RouterLink
              to="/industries"
              class="ml-4 sm:ml-12 lg:ml-24 mt-8 inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-[#091924] text-white rounded-full hover:bg-[#008C96] transition-colors duration-300 items-center gap-2"
            >
              <ArrowRightIcon class="h-5 w-5" />
              Explore Industry Solutions
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-[#091924]">
      <div
        class="container mx-auto px-10 sm:px-16 md:px-32 py-10 sm:py-16 md:py-20"
      >
        <div class="text-center mt-2 sm:mt-8 md:mt-20 mb-3 sm:mb-10 md:mb-16">
          <p class="text-white text-xl sm:text-3xl md:text-5xl font-bold">
            OUR CUSTOMERS STAY
            <span class="text-[#008C96]">100% SATISFIED</span> WITH OUR
            CONTRIBUTIONS TO THIER PROJECTS
          </p>
          <div
            class="flex justify-center gap-4 items-center mt-3 sm:mt-8 md:mt-12"
          >
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="text-white h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
            />
            <p class="text-white text-base sm:text-lg md:text-xl font-medium">
              Let's Talk
            </p>
          </div>
          <div class="mt-2 sm:mt-4 md:mt-4 flex justify-center">
            <RouterLink
              to="/contact"
              class="px-5 py-1 sm:py-2 md:py-3 bg-[#091924] hover:bg-[#009C86] text-white text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 flex items-center gap-2 justify-center group border-2 border-white hover:border-[#009C86] max-w-max"
              @click="isMenuOpen = false"
            >
              <ArrowRightIcon
                class="h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 group-hover:translate-x-1 group-active:translate-x-1 transition-transform duration-300"
              />
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="relative min-h-screen">
      <div
        class="container mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-between flex-wrap"
        >
          <div class="w-full md:w-1/2 mt-0 md:mt-16">
            <p
              class="text-2xl sm:text-4xl md:text-6xl font-semibold text-gray-800 mb-4 ml-4 sm:ml-12 md:ml-24"
            >
              OUR STORY
            </p>
            <p
              class="text-base sm:text-lg lg:text-xl text-gray-700 border-l-4 border-[#008C96] mb-4 ml-4 sm:ml-12 md:ml-24 mt-12 sm:mt-16 md:mt-24 pl-4"
            >
              CoalDev is a customer-centric information technology company and
              offers comprehensive, cost effective and efficient software
              solutions. We specializes in the domain of data science, custom
              software development, cloud and blockchain . At CoalDev, we
              believe in working closely with clients and adapting to
              innovations.
            </p>
          </div>
          <div class="w-full md:w-1/2 pl-4 sm:pl-12 md:pl-32 mt-10 md:mt-20">
            <p
              class="text-base sm:text-lg md:text-xl text-black font-bold ml-0 sm:ml-10 max-w-[400px] leading-normal md:mt-16"
            >
              Our mission is to turn our extensive
              <span class="text-[#008C96]">business expertise</span> and
              exceptional talents to impactful solutions for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
</script>
