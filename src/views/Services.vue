<template>
  <div class="overflow-x-hidden">
    <div class="relative mt-[64px]">
      <div class="relative z-10">
        <div class="pt-10 sm:pt-20 px-4 sm:px-6 md:px-12">
          <h1
            class="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 mb-4 mx-4 sm:ml-24 mt-12 sm:mt-24"
          >
            SERVICES WE <span class="text-[#008C96]">PROVIDE</span>
          </h1>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-700 mx-4 sm:ml-24 mt-4 sm:mt-5 max-w-[600px] leading-normal"
          >
            At CoalDev, we provide a wide range of IT services tailored to meet
            your business needs. Our skilled professionals deliver innovative
            solutions across various industries, ensuring excellence in every
            project.
          </p>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16 mx-4 sm:ml-24 mb-12 sm:mb-24"
          >
            <div
              v-for="service in services"
              :key="service.name"
              class="bg-gray-50 p-6 shadow-md transition-all duration-500 ease-in-out hover:bg-gray-900 group border-l-4 border-gray-900 relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              ></div>
              <div class="relative z-10">
                <div class="flex items-center mb-4">
                  <div
                    class="text-4xl mr-4 text-gray-900 group-hover:text-white transition-colors duration-300"
                  >
                    <i :class="service.icon"></i>
                  </div>
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
