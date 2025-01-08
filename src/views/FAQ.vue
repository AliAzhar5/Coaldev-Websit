<template>
  <main class="w-full">
    <section class="mt-40 w-full ml-4 sm:ml-10">
      <h1
        class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 mx-4 lg:ml-16"
      >
        FREQUENTLY ASKED <span class="text-[#008C96] italic">QUESTIONS</span>
      </h1>
      <div class="mt-10 mb-20">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="mb-6 sm:mb-4 w-full sm:w-3/4 ml-0 sm:ml-16"
        >
          <button
            @click="toggleAnswer(index)"
            class="relative w-full text-left bg-gray-50 text-gray-900 p-6 transition-all duration-500 ease-in-out border-l-4 border-gray-900 cursor-pointer group overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gray-900 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"
            ></div>
            <div class="relative z-10">
              <h2
                class="text-lg font-semibold text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white"
              >
                {{ item.question }}
              </h2>
            </div>
          </button>
          <!-- Answer Section -->
          <div
            v-bind:style="{
              maxHeight: item.show ? '1000px' : '0px',
            }"
            ref="answers"
            class="overflow-hidden transition-max-height duration-500 ease-in-out"
          >
            <div class="w-3/4 text-justify">
              <p class="text-gray-700 p-4">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, nextTick } from "vue";

const faqs = ref([
  {
    question: "Do you provide servers?",
    answer:
      "No, unless absolutely necessary. We’re not an infrastructure provider and we use the same cloud services everyone else uses, so it’s almost always more practical to use a client's cloud account right away. We’re used to working with all three major platforms (AWS, Google Cloud, Azure). In the rare cases where we do provide server infrastructure, we simply re-invoice the monthly bill.",
    show: false,
  },
  {
    question: "Are there maintenance costs involved?",
    answer:
      "Yes, there may be maintenance costs involved in software development for ongoing support, bug fixes, upgrades, or security patches. The costs will depend on the level of support required and can be outlined in a proposal or tailored to your specific needs.",
    show: false,
  },
  {
    question: "What will the team look for in my project?",
    answer:
      "The team assigned to your project will depend on the project requirements and scope, but typically includes project managers, developers, designers, quality assurance testers, and digital marketing specialists (if applicable). They will be skilled in the specific technologies and methodologies required for your project and will work collaboratively to ensure project success.",
    show: false,
  },
  {
    question: "How do you communicate with clients?",
    answer:
      "We prioritize clear and frequent communication with our clients throughout the development process. We use a variety of communication tools such as email, phone, and video conferencing to ensure that our clients are always informed and involved in the project.",
    show: false,
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for a project depends on the specific requirements and complexity of the project. We work closely with our clients to set realistic timelines and provide regular updates throughout the development process.",
    show: false,
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing model depends on the specific project and services required. We offer competitive and transparent pricing, and provide detailed proposals and contracts to ensure transparency.",
    show: false,
  },
  {
    question: "How do you ensure the quality of your work?",
    answer:
      "We have a rigorous quality assurance process in place that includes testing at various stages of development, continuous improvement, and feedback from clients.",
    show: false,
  },
  {
    question: "How services do you offer?",
    answer:
      "We offer a range of software services including custom software development, web development, blockchain, data science, mobile app development, quality assurance and testingL",
    show: false,
  },
  {
    question: "How do you ensure the quality of your work?",
    answer:
      "We have a rigorous quality assurance process in place that includes testing at various stages of development, continuous improvement, and feedback from clients.",
    show: false,
  },
]);

const toggleAnswer = async (index) => {
  // Collapse all answers except the toggled one
  faqs.value.forEach((faq, i) => {
    faq.show = i === index ? !faq.show : false;
  });
  await nextTick(); // Wait for DOM update
};
</script>
