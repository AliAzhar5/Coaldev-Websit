<template>
  <div>
    <!-- Backdrop Overlay -->
    <div
      v-if="isChatOpen"
      class="fixed inset-0 bg-black opacity-50 z-40"
      @click="openChat"
    ></div>

    <!-- Chat Button Icon -->
    <div
      class="fixed bottom-10 right-10 p-4 bg-gray-800 hover:bg-[#008C96] rounded-full cursor-pointer transition-all duration-500 hover:scale-110 flex items-center"
      @mouseover="showText = true"
      @mouseleave="showText = false"
      @click="openChat"
    >
      <ChatBubbleLeftRightIcon
        class="h-5 w-5 text-white transition-opacity duration-500"
      />
      <span
        v-if="showText"
        class="hidden lg:block text-white ml-2 transition-opacity duration-500"
      >
        Chat with Expert AI
      </span>
    </div>

    <!-- Chat Window -->
    <div
      v-if="isChatOpen"
      class="fixed bottom-0 right-0 w-full sm:w-[40%] h-[90%] bg-white rounded-t-lg z-50"
    >
      <!-- Chat Header -->
      <div class="bg-gray-800 text-white p-4 text-xl font-semibold">
        Expert AI
      </div>

      <!-- Chat Messages -->
      <div class="chat-messages flex-1 overflow-y-auto p-4">
        <div class="message p-2 bg-gray-100 rounded-lg mb-2">
          <p class="text-gray-700">Welcome! How can I assist you today?</p>
        </div>
      </div>

      <!-- Chat Input -->
      <div class="chat-input p-4 bg-gray-200 flex items-center">
        <input
          type="text"
          v-model="message"
          @keyup.enter="sendMessage"
          placeholder="Type your message..."
          class="flex-grow bg-gray-200 text-black p-2 rounded"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChatBubbleLeftRightIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const showText = ref(false);
const isChatOpen = ref(false);
const message = ref("");
const messages = ref([]);

const openChat = () => {
  isChatOpen.value = !isChatOpen.value; // Toggles chat window open/close
};

const sendMessage = () => {
  if (message.value.trim()) {
    messages.value.push(message.value); // Add message to the messages array
    message.value = ""; // Clear input field after sending message
  }
};
</script>

<style scoped>
/* Additional styles for chat window */
.chat-window {
  max-width: 800px;
  min-width: 600px;
}
</style>
