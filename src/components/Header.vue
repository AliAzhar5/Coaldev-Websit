<template>
  <header class="fixed w-full top-0 left-0 shadow-md bg-white z-50">
    <div class="container mx-auto flex items-center justify-between px-4 py-2">
      <!-- Logo with responsive margins -->
      <RouterLink to="/">
        <img
          src="@/assets/coaldev_logo.png"
          alt="Coaldev Logo"
          class="h-8 sm:h-10 md:h-12 lg:h-16 w-auto ml-2 sm:ml-4 md:ml-16 lg:ml-28"
        />
      </RouterLink>

      <!-- Mobile menu button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden p-2 text-gray-600"
      >
        <Bars3Icon v-if="!isMenuOpen" class="h-5 sm:h-6 w-5 sm:w-6" />
        <XMarkIcon v-else class="h-5 sm:h-6 w-5 sm:w-6" />
      </button>

      <!-- Navigation items with responsive layout -->
      <div
        :class="[
          'lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-6 mr-2 sm:mr-4 md:mr-16 lg:mr-20',
          'absolute lg:relative top-full left-0 right-0 lg:top-auto',
          'bg-white lg:bg-transparent p-4 lg:p-0',
          isMenuOpen ? 'flex flex-col' : 'hidden',
        ]"
      >
        <div
          class="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8"
        >
          <div
            class="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 text-base sm:text-lg md:text-xl font-merriweather text-gray-600 font-medium"
          >
            <RouterLink
              v-for="item in navitems"
              :key="item.id"
              :to="item.id"
              class="hover:text-[#008C96] transition-colors duration-300 cursor-pointer hover:decoration-[#008C96] hover:underline underline-offset-4 decoration-transparent"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </RouterLink>
          </div>
          <RouterLink
            to="/contact"
            class="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gray-700 hover:bg-[#008C96] active:bg-[#008C96] text-white text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 flex items-center gap-2 justify-center group"
            @click="isMenuOpen = false"
          >
            <ArrowRightIcon
              class="h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 group-active:translate-x-1 transition-transform duration-300"
            />
            Contact Us
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const isMenuOpen = ref(false);

const navitems = [
  { name: "Industries", id: "/industries" },
  { name: "Services", id: "/services" },
  { name: "About", id: "/about" },
  { name: "Pricing", id: "/pricing" },
];
</script>
