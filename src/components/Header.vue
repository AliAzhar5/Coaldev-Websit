<template>
  <header class="fixed w-full top-0 left-0 shadow-md bg-white z-50">
    <div class="container mx-auto flex items-center justify-between px-4 py-2">
      <!-- Logo with responsive margins -->
      <RouterLink to="/">
        <img
          src="@/assets/coaldev_logo.png"
          alt="Coaldev Logo"
          class="h-12 sm:h-12 md:h-20 w-auto ml-2 sm:ml-4 md:ml-16"
        />
      </RouterLink>

      <!-- Mobile menu button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden p-2 text-[#303539]"
      >
        <Bars3Icon v-if="!isMenuOpen" class="h-5 sm:h-6 w-5 sm:w-6" />
        <XMarkIcon v-else class="h-5 sm:h-6 w-5 sm:w-6" />
      </button>

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
            class="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 font-sans text-base sm:text-lg md:text-lg text-gray-600 font-medium"
          >
            <RouterLink
              v-for="item in navitems"
              :key="item.id"
              :to="item.id"
              class="hover:text-[#448CA1] transition-colors duration-300 cursor-pointer hover:font-semibold hover:underline underline-offset-4 decoration-transparent hover:decoration-[#448CA1]"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </RouterLink>
          </div>
          <RouterLink
            to="/contact"
            class="px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 bg-[#303539] hover:bg-[#448CA1] text-white text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 flex items-center gap-2 justify-center group"
            @click="handleContactClick"
          >
            <ArrowRightIcon
              class="h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 font-manrope group-hover:translate-x-1 group-active:translate-x-1 transition-transform duration-300"
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
  { name: "FAQ", id: "/faq" },
];

const handleContactClick = () => {
  if (window.gtag) {
    window.gtag("event", "contact_us_click", {
      event_category: "Navigation",
      event_label: "Contact Us Button",
      value: 1,
    });
  } else {
    console.warn("Google Analytics is not initialized.");
  }
  isMenuOpen.value = false;
};
</script>
