<template>
  <div class="overflow-x-hidden">
    <section class="relative h-[130vh] mt-[64px] mb-4 sm:mb-10 lg:mb-16">
      <div class="relative z-10">
        <div
          class="container mx-auto px-4 sm:px-6 md:px-10 pt-20 flex flex-col sm:flex-row items-center"
        >
          <div class="w-full sm:w-1/3 text-center sm:text-left px-10 sm:px-1">
            <h2
              class="text-3xl sm:text-4xl lg:text-6xl font-bold italic text-[#303539] mb-4"
            >
              OUR JOURNEY TO A LEADING
              <span class="text-[#448CA1]">SOFTWARE DEVELOPMENT</span> PARTNER
            </h2>
          </div>

          <!-- Right side for images -->
          <div
            class="relative w-full sm:w-2/3 flex flex-col sm:flex-row mt-32 mx-8 mr-48 sm:mr-1"
          >
            <!-- First image -->
            <img
              src="@/assets/mm.jpg"
              alt="Project Discussion"
              class="w-[300px] lg:w-[400px] rounded-lg absolute z-0 mr-12 sm:mr-1 lg:mr:2"
              style="
                top: 5%;
                left: 70%;
                transform: translate(-50%, -50%) rotate(-10deg);
              "
            />
            <!-- Second image -->
            <img
              src="@/assets/cc2.jpg"
              alt="Team Collaboration"
              class="w-[300px] lg:md:w-[400px] rounded-lg relative z-10 mt-32 sm:mt-36 lg:mt-28 mr-20 sm:mr-64 lg:mr-44 ml-8 mb-1 sm:mb-20"
              style="
                top: calc(50% + 50%);
                left: calc(25%);
                transform: translate(-5%, -5%) rotate(10deg);
              "
            />
          </div>
        </div>
      </div>
    </section>

    <div class="w-full bg-[#303539]">
      <div
        class="container mx-auto px-10 sm:px-16 md:px-32 py-10 sm:py-16 md:py-20"
      >
        <div class="text-center mt-4 sm:mt-10 md:mt-20 mb-5 sm:mb-10 md:mb-16">
          <p class="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
            OUR CUSTOMERS STAY
            <span class="text-[#448CA1]">100% SATISFIED</span> WITH OUR
            CONTRIBUTIONS TO THIER PROJECTS
          </p>
          <div
            class="flex justify-center gap-4 items-center mt-3 sm:mt-8 md:mt-12"
          >
            <RouterLink to="/contact">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="text-white h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 hover:text-[#448CA1] transition-colors duration-300"
              />
            </RouterLink>
            <RouterLink to="/contact">
              <p
                class="text-white text-base sm:text-lg md:text-xl font-medium hover:text-[#448CA1] transition-colors duration-300"
              >
                Let's Talk
              </p>
            </RouterLink>
          </div>
          <div class="mt-2 sm:mt-4 md:mt-4 flex justify-center">
            <RouterLink
              to="/contact"
              class="px-5 py-1 sm:py-2 md:py-3 bg-[#303539] hover:bg-[#448CA1] text-white text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 flex items-center gap-2 justify-center group border-2 border-white hover:border-[#448CA1] max-w-max"
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
              class="text-3xl sm:text-5xl md:text-7xl font-semibold text-[#303539] mb-4 ml-4 sm:ml-12 md:ml-24 italic"
            >
              OUR STORY
            </p>
            <p
              class="text-base sm:text-lg lg:text-xl text-[#303539] border-l-4 border-[#448CA1] mb-4 ml-4 sm:ml-12 md:ml-24 mt-8 sm:mt-10 md:mt-16 pl-4"
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
              class="text-base sm:text-lg md:text-xl text-[#303539] font-bold ml-0 sm:ml-10 max-w-[400px] leading-normal md:mt-16"
            >
              Our mission is to turn our extensive
              <span class="text-[#448CA1]">business expertise</span> and
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
