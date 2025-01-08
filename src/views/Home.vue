<template>
  <main class="w-full">
    <section class="mt-[64px] w-full">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 lg:pt-40 max-w-full"
      >
        <div class="w-full">
          <p
            class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-2 mx-4 lg:ml-16"
          >
            WE ARE <span class="text-[#008C96] italic">CODING</span>
            <br />
            YOUR WAY TO SUCCESS
          </p>

          <p
            class="text-base sm:text-lg lg:text-xl text-gray-700 mx-4 lg:ml-16 mt-6 lg:mt-10"
          >
            CoalDev is a software company specializes in developing, designing,
            and maintaining applications, systems, or platforms to address
            specific user needs and business challenges.
          </p>

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
      </div>
    </section>

    <section class="py-20 w-full">
      <div class="container mx-auto px-4 sm:px-6 lg:px-10 py-20 max-w-full">
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"
        >
          <div class="w-full lg:w-2/3 lg:-mt-16">
            <p
              class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 mx-4 lg:ml-16"
            >
              WE ARE COAL<span class="text-[#008C96] italic">DEV.</span>
            </p>
            <div class="w-full h-0.5 bg-gray-200 my-8 mx-4 lg:ml-16"></div>
            <p
              class="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 mx-4 lg:ml-16 text-justify"
            >
              Whether you need a simple application or a complex web-based
              system, CoalDev can help you achieve your goals. We have a team of
              experienced developers who specialize in building tailored
              solutions to meet the specific needs of clients. With a focus on
              quality and customer satisfaction, CoalDev is the perfect choice
              for your next web development project.
            </p>
            <p
              class="text-base sm:text-lg lg:text-xl text-gray-700 mx-4 lg:ml-16 text-justify"
            >
              Our team of experienced developers and designers work together to
              create seamless, user-friendly applications that meet your
              specific needs.
            </p>
          </div>
          <div class="w-full lg:w-1/3 px-4 lg:pl-32 lg:-mt-20">
            <img
              src="@/assets/computer.jpg"
              alt="Computer Setup"
              class="w-full max-w-[100%] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/vue/24/solid";
</script>
