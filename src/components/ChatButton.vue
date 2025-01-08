<!-- src/components/ChatIcon.vue -->
<template>
  <div
    class="fixed bottom-5 right-5 p-4 bg-[#008C96] rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
  >
    <ChatBubbleLeftRightIcon class="h-10 w-10 text-white" />
  </div>
</template>

<script setup>
import { ChatBubbleLeftRightIcon } from "@heroicons/vue/24/solid";
</script>
