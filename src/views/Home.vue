<template>
  <main class="w-full">
    <section class="mt-[64px] w-full">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 lg:pt-20 max-w-full"
      >
        <div class="flex flex-col lg:flex-row lg:items-center">
          <div class="w-full lg:w-2/3 order-2 lg:order-1">
            <h1
              class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-2 mx-4 lg:ml-16"
            >
              WE ARE <span class="text-[#008C96] italic">CODING</span>
              <br />
              YOUR WAY TO SUCCESS
            </h1>
            <div class="w-full lg:w-3/5 text-justify">
              <p
                class="text-base sm:text-lg lg:text-xl text-gray-700 mx-4 lg:ml-16 mt-6 lg:mt-10"
              >
                CoalDev is a software company specializes in developing,
                designing, and maintaining applications, systems, or platforms
                to address specific user needs and business challenges.
              </p>
            </div>
            <div class="flex gap-2 sm:gap-4 mx-4 lg:ml-16 mt-6 lg:mt-16">
              <RouterLink
                to="/industries"
                class="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 text-white rounded-full hover:bg-[#008C96] transition-colors duration-300 items-center gap-2 sm:gap-3 border-2 text-sm sm:text-base"
              >
                <ArrowRightIcon class="h-4 w-5 sm:h-6 sm:w-6" />
                Explore Industry Solutions
              </RouterLink>
            </div>
          </div>

          <!-- First Image -->
          <div class="w-full lg:w-2/5 order-1 lg:order-2">
            <img
              src="@/assets/computer2.png"
              alt="Computer Setup"
              class="w-full max-w-[100%] h-auto lg:mr-40 sm:max-w-[50%] md:max-w-[70%]"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Second Section -->
    <section class="py-20 w-full">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 lg:pt-20 max-w-full"
      >
        <div class="flex flex-col lg:flex-row lg:items-center">
          <div
            class="w-full lg:w-2/5 order-3 lg:order-1 px-4 lg:pl-32 lg:-mt-20"
          >
            <img
              src="@/assets/computer.png"
              alt="Computer Setup"
              class="w-full max-w-[100%] h-auto sm:max-w-[50%] md:max-w-[70%]"
            />
          </div>
          <div class="w-full lg:w-3/5 order-2 lg:order-2 lg:-mt-8 lg:ml-10">
            <h1
              class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 mx-4 lg:ml-16"
            >
              WE ARE COAL<span class="text-[#008C96] italic">DEV.</span>
            </h1>
            <div class="w-full lg:w-4/5 text-justify">
              <p
                class="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 mx-4 lg:ml-16 lg:mt-10 text-justify"
              >
                Whether you need a simple application or a complex web-based
                system, CoalDev can help you achieve your goals. We have a team
                of experienced developers who specialize in building tailored
                solutions to meet the specific needs of clients. With a focus on
                quality and customer satisfaction, CoalDev is the perfect choice
                for your next web development project.
              </p>
              <p
                class="text-base sm:text-lg lg:text-xl text-gray-700 mx-4 lg:ml-16 text-justify"
              >
                Our team of experienced developers and designers work together
                to create seamless, user-friendly applications that meet your
                specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 w-full">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 lg:pt-20 max-w-full"
      >
        <h2
          class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-2 mx-4 lg:ml-32"
        >
          WHY MANY COMPANIES
          <br />
          <span class="text-[#008C96] italic">CHOOSE</span> COAL<span
            class="text-[#008C96] italic"
            >DEV.</span
          >
        </h2>
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-10 sm:mt-8 lg:mt-16 sm:mb-8 lg:mb-16"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              class="bg-gray-50 border-l-4 border-gray-900 p-6 w-4/5 mx-auto text-left"
            >
              <h3 class="text-xl text-gray-900 font-bold">
                Deep Business Insight
              </h3>
              <p class="text-gray-700 mt-2">
                We have Big 4 DNA, which helps grasp complex things on the fly
                and understand business needs much deeper.
              </p>
            </div>
            <div
              class="bg-gray-50 border-l-4 border-gray-900 p-6 w-4/5 mx-auto"
            >
              <h3 class="text-xl text-gray-900 font-bold">
                Experienced In-House Team
              </h3>
              <p class="text-gray-700 mt-2">
                Talented professionals in software development, UI/UX design,
                and client experience ready to boost your innovations.
              </p>
            </div>
            <div
              class="bg-gray-50 border-l-4 border-gray-900 p-6 w-4/5 mx-auto"
            >
              <h3 class="text-xl text-gray-900 font-bold">
                Cutting-Edge Talent Selection
              </h3>
              <p class="text-gray-700 mt-2">
                Own a unique automated employee selection system, which allows
                us to process about 1000 candidates every month and select
                abnormally talented people for the team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
</script>
