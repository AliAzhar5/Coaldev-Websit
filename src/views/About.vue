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
              class="ml-4 sm:ml-12 lg:ml-24 mt-8 inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 text-white rounded-full hover:bg-[#008C96] transition-colors duration-300 items-center gap-2"
            >
              <ArrowRightIcon class="h-5 w-5" />
              Explore Industry Solutions
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="relative min-h-screen -mt-28">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20"
      >
        <div
          class="flex flex-col lg:flex-row items-center justify-between flex-wrap"
        >
          <div class="w-full lg:w-1/2 mt-0 lg:-mt-16">
            <p
              class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 ml-4 sm:ml-12 lg:ml-24"
            >
              OUR STORY
            </p>
            <p
              class="text-base sm:text-lg lg:text-xl text-gray-700 border-l-4 border-[#008C96] mb-4 ml-4 sm:ml-12 lg:ml-24 mt-12 sm:mt-16 lg:mt-24 pl-4"
            >
              CoalDev is a customer-centric information technology company and
              offers comprehensive, cost effective and efficient software
              solutions. We specializes in the domain of data science, custom
              software development, cloud and blockchain . At CoalDev, we
              believe in working closely with clients and adapting to
              innovations.
            </p>
          </div>
          <div class="w-full lg:w-1/2 pl-4 sm:pl-12 lg:pl-32 mt-10 lg:mt-20">
            <p
              class="text-base sm:text-lg lg:text-xl text-black font-bold ml-0 sm:ml-10 max-w-[400px] leading-normal lg:-mt-16"
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
