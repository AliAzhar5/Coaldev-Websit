<template>
  <main class="w-full">
    <section
      class="container mx-auto p-8 flex flex-col md:flex-row items-center pt-16 lg:pt-20 2xl:pt-32"
    >
      <div class="w-full md:w-1/2 text-left space-y-6">
        <h1
          class="text-3xl sm:text-4xl lg:text-6xl font-semibold italic text-[#303539] mb-2 mx-4 lg:ml-16 md:mt-12"
        >
          WE ARE <span class="text-[#448CA1]">CODING</span>
          <br />
          YOUR WAY TO SUCCESS
        </h1>
        <div class="w-full lg:3/4 text-justify">
          <p
            class="text-base sm:text-lg text-[#303539] mx-4 lg:ml-16 mt-6 lg:mt-10"
          >
            CoalDev is a software company specializes in developing, designing,
            and maintaining applications, systems, or platforms to address
            specific user needs and business challenges.
          </p>
        </div>
        <div class="flex gap-2 sm:gap-4 mx-4 lg:ml-16 mt-6 lg:mt-16">
          <RouterLink
            to="/industries"
            class="inline-flex px-6 sm:px-8 py-2 border-[#303539] bg-[#303539] text-white rounded-full hover:bg-[#448CA1] hover:border-[#448CA1] transition-colors duration-300 items-center gap-2 sm:gap-3 border-2 text-sm sm:text-base"
          >
            <ArrowRightIcon class="h-8 w-6" />
            Explore Industry Solutions
          </RouterLink>
        </div>
      </div>

      <!-- Right Image -->
      <div
        class="w-full md:w-1/2 mt-2 sm:-mt-12 lg:mt-16 relative overflow-hidden"
      >
        <img
          src="@/assets/cc2.jpg"
          alt="Team Collaboration"
          class="rounded-lg shadow-lg custom-clip transition-transform duration-500 transform hover:scale-105"
        />
      </div>
    </section>

    <section class="bg-[#303539] py-5 sm:py-10 lg:py-24 mt-4 sm:mt-8 lg:mt-24">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-10 max-w-full mt-4 sm:mt-8 md:mt-12"
      >
        <div class="flex flex-col lg:flex-row lg:items-center">
          <div
            class="w-full lg:w-2/5 order-2 lg:order-1 px-4 lg:pl-32 lg:-mt-20"
          >
            <img
              src="@/assets/computer.png"
              alt="Computer Setup"
              class="w-full max-w-[100%] h-auto sm:max-w-[50%] md:max-w-[90%] rounded-3xl"
            />
          </div>
          <div class="w-full lg:w-3/5 order-1 lg:order-2 lg:-mt-8 lg:ml-10">
            <h1
              class="text-3xl sm:text-4xl lg:text-6xl italic font-semibold text-white mb-4 mx-4 lg:ml-16"
            >
              WE ARE COALDEV
            </h1>
            <div class="w-full lg:w-4/5 text-justify">
              <p
                class="text-base sm:text-lg text-white mb-4 mx-4 lg:ml-16 lg:mt-10 text-justify"
              >
                Whether you need a simple application or a complex web-based
                system, CoalDev can help you achieve your goals. We have a team
                of experienced developers who specialize in building tailored
                solutions to meet the specific needs of clients. With a focus on
                quality and customer satisfaction, CoalDev is the perfect choice
                for your next web development project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full mt-32">
      <div class="container px-4 sm:px-6 lg:px-12 pt-20 lg:pt-20 max-w-full">
        <h2
          class="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#303539] mb-2 px-1 sm:px-10"
        >
          WHY MANY COMPANIES
          <br />
          <span class="text-[#008C96] italic">CHOOSE</span> COAL<span
            class="text-[#008C96] italic"
            >DEV.</span
          >
        </h2>
        <div
          class="container px-4 sm:px-6 lg:px-10 sm:mt-8 lg:mt-16 sm:mb-8 lg:mb-16"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              class="bg-gray-50 border-l-4 border-[#303539] p-6 w-4/5 text-left transition-all duration-500 ease-in-out hover:bg-[#303539] group relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-[#303539] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
              ></div>
              <h3
                class="text-xl text-[#303539] font-bold group-hover:text-white transition-colors duration-300 ease-in-out z-10 relative"
              >
                Deep Business Insight
              </h3>
              <p
                class="text-[#303539] mt-2 group-hover:text-white transition-colors duration-300 ease-in-out z-10 relative"
              >
                We have Big 4 DNA, which helps grasp complex things on the fly
                and understand business needs much deeper.
              </p>
            </div>

            <div
              class="bg-gray-50 border-l-4 border-[#303539] p-6 w-4/5 text-left transition-all duration-500 ease-in-out hover:bg-[#303539] group relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-[#303539] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
              ></div>
              <h3
                class="text-xl text-[#303539] font-bold group-hover:text-white transition-colors duration-300 ease-in-out z-10 relative"
              >
                Experienced In-House Team
              </h3>
              <p
                class="text-[#303539] mt-2 group-hover:text-white transition-colors duration-300 ease-in-out z-10 relative"
              >
                Talented professionals in software development, UI/UX design,
                and client experience ready to boost your innovations.
              </p>
            </div>
            <div
              class="bg-gray-50 border-l-4 border-[#303539] p-6 w-4/5 text-left transition-all duration-500 ease-in-out hover:bg-[#303539] group relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-[#303539] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
              ></div>
              <h3
                class="text-xl text-[#303539] font-bold group-hover:text-white transition-colors duration-300 ease-in-out z-10 relative"
              >
                Cutting-Edge Talent Selection
              </h3>
              <p
                class="text-[#303539] mt-2 group-hover:text-white transition-colors duration-300 ease-in-out z-10 relative"
              >
                Own a unique automated employee selection system, which allows
                us to process about 1000 candidates every month and select
                abnormally talented people for the team.
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

<style scoped>
.custom-clip {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
}
</style>
