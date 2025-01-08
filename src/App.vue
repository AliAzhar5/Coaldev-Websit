<template>
  <div>
    <Header />
    <RouterView />
    <!-- <ChatButton /> -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { RouterView } from "vue-router";
// import ChatButton from "@/components/ChatButton.vue";
</script>
