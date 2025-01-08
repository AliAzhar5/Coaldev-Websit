<template>
  <div>
    <!-- Hero section -->
    <div class="relative h-[600px]">
      <div class="absolute inset-0">
        <img
          src="@/assets/service_image.jpg"
          alt="Services Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div class="relative z-10 pt-32 px-6 md:px-12 text-white">
        <p class="text-2xl text-white mx-4 sm:ml-24 mt-10 sm:mt-20">
          Home > <span class="text-[#008C96]">Services</span>
        </p>
        <h1
          class="text-2xl sm:text-4xl lg:text-6xl font-semibold mb-4 mx-4 sm:ml-24 mt-10 sm:mt-20"
        >
          SERVICES
        </h1>
        <p
          class="text-base sm:text-lg lg:text-xl mx-4 sm:ml-24 mt-5 max-w-[750px] leading-normal"
        >
          We offer comprehensive IT services designed to empower businesses with
          cutting-edge technology and tailored solutions
        </p>
      </div>
    </div>

    <!-- Services section header -->
    <div class="pt-16 px-6 md:px-12">
      <div class="mx-4 sm:ml-24">
        <h2
          class="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mt-10"
        >
          SERVICES WE <span class="text-[#008C96]">PROVIDE</span>
        </h2>
        <p
          class="text-base sm:text-lg lg:text-xl max-w-[750px] leading-normal text-gray-700"
        >
          At CoalDev, we provide a wide range of IT services tailored to meet
          your business needs. Our skilled professionals deliver innovative
          solutions across various industries, ensuring excellence in every
          project.
        </p>
      </div>
    </div>

    <!-- Existing services grid -->
    <div class="pt-10 sm:pt-10 px-4 sm:px-6 md:px-12">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16 mx-4 sm:ml-24 mb-12 sm:mb-24"
      >
        <div
          v-for="service in services"
          :key="service.name"
          class="bg-gray-50 p-6 shadow-md transition-all duration-500 ease-in-out hover:bg-gray-900 group border-l-4 border-gray-900"
        >
          <div class="flex items-center mb-4">
            <i
              :class="[
                service.icon,
                'text-4xl mr-4 text-gray-900 group-hover:text-white transition-colors duration-300',
              ]"
            ></i>
            <h2
              class="text-xl text-gray-900 font-bold group-hover:text-white transition-colors duration-300"
            >
              {{ service.name }}
            </h2>
          </div>
          <p
            class="text-gray-700 text-lg whitespace-pre-line ml-4 group-hover:text-white transition-colors duration-300"
          >
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    name: "Custom Software Development",
    icon: "fas fa-code",
    description: `• Tailored Solutions for Your Business
• Integration with Existing Systems
• Scalable and Secure Applications`,
  },
  {
    name: "Web Application Development",
    icon: "fas fa-globe",
    description: `• Customized Web Solutions
• Frontend Development
• Backend Development`,
  },
  {
    name: "Mobile App Development",
    icon: "fas fa-mobile-alt",
    description: `• Customized Mobile Solutions
• IOS & Android Development
• Cross-Platform Development`,
  },
  {
    name: "UI/UX Design",
    icon: "fas fa-paint-brush",
    description: `• Mobile App Design
• Web & Desktop Design
• Graphic Design Services`,
  },
  {
    name: "Cloud Computing",
    icon: "fas fa-cloud",
    description: `• Cloud-Based Solutions
• Scalable and Secure Applications
• Integration with Existing Systems`,
  },
  {
    name: "Quality Assurance",
    icon: "fas fa-check-circle",
    description: `• Manual Testing
• Automation Testing
• Functional Testing`,
  },
  {
    name: "Project Management",
    icon: "fas fa-tasks",
    description: `• Agile Methodologies
• Project Planning
• Risk Management`,
  },
  {
    name: "Artificial Intelligence",
    icon: "fas fa-brain",
    description: `• Customized AI Solutions
• Integration with Existing Systems
• AI Consultation`,
  },
  {
    name: "Generative AI",
    icon: "fas fa-robot",
    description: `• Customized AI Solutions
• LLM Development
• Integration with Existing Systems`,
  },
];
</script>
