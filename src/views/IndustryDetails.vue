<template>
  <div>
    <!-- Hero section with background image -->
    <div class="relative h-[600px]">
      <div class="absolute inset-0">
        <img
          src="@/assets/subcategory.jpg"
          alt="Subcategory Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <!-- Content overlay -->
      <div class="relative z-10 pt-32 px-6 md:px-12 text-white">
        <p class="text-2xl text-white mx-4 sm:ml-24 mt-10 sm:mt-20">
          Home > Industries >
          <span class="text-[#448CA1]">Subcategories</span>
        </p>
        <h1
          class="text-2xl sm:text-4xl lg:text-6xl font-semibold mb-4 mx-4 sm:ml-24 mt-5 sm:mt-10"
        >
          {{ industryTitle }}
        </h1>
        <p
          class="text-sm sm:text-base lg:text-lg mx-4 mt-5 sm:ml-24 max-w-[750px] leading-normal content-justify"
        >
          At CoalDev, we provide innovative software solutions tailored to meet
          the diverse needs of various industries. Our expertise spans multiple
          subcategories, including advanced analytics, process automation,
          customer relationship management, supply chain optimization, and
          enterprise resource planning. Whether it's enhancing operational
          efficiency, improving customer engagement, or driving digital
          transformation, our solutions are designed to deliver measurable
          results and align seamlessly with your business goals.
        </p>
      </div>
    </div>

    <section class="mt-12 sm:mt-20">
      <h2
        class="text-xl sm:text-2xl font-semibold text-[#303539] mb-4 mx-4 sm:ml-12 md:ml-24"
      >
        SUBCATEGORIES:
      </h2>
      <div
        class="flex flex-row flex-wrap mx-4 sm:ml-12 md:ml-24 gap-4 sm:gap-6"
      >
        <div
          v-for="subcategory in subcategories"
          :key="subcategory.name"
          @click="selectedSubcategory = subcategory"
          class="bg-gray-50 p-4 transition-all duration-500 ease-in-out cursor-pointer group border-l-4 border-[#303539] relative overflow-hidden"
          :class="{ 'bg-[#303539]': selectedSubcategory === subcategory }"
        >
          <div
            class="absolute inset-0 bg-[#303539] transform"
            :class="
              selectedSubcategory === subcategory
                ? 'translate-x-0'
                : '-translate-x-full'
            "
          ></div>
          <div class="relative z-10">
            <div
              class="text-xl font-bold"
              :class="
                selectedSubcategory === subcategory
                  ? 'text-white'
                  : 'text-[#303539]'
              "
            >
              {{ subcategory.name }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="selectedSubcategory"
      class="mx-4 sm:ml-12 md:ml-24 mt-16 sm:mt-20 md:mt-24"
    >
      <h3
        class="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#303539] underline decoration-[#303539] mb-4 sm:mb-6"
      >
        {{ selectedSubcategory.name }}:
      </h3>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24 max-w-[1200px]"
      >
        <div
          v-for="(problem, index) in selectedSubcategory.problems"
          :key="index"
          class="bg-gray-50 p-8 transition-all duration-500 ease-in-out hover:bg-[#303539] group border-l-4 border-[#303539] relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-[#303539] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
          ></div>
          <div class="relative z-10">
            <h4
              class="text-xl text-[#303539] font-bold mb-4 group-hover:text-white transition-colors duration-300"
            >
              {{ problem }}
            </h4>
            <p
              class="text-[#303539] text-base group-hover:text-white transition-colors duration-300 text-justify"
            >
              {{ selectedSubcategory.description[index] }}
            </p>
            <div
              class="mt-6 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-44"
            >
              <router-link
                :to="{ name: 'Contact' }"
                class="text-sm font-semibold group-hover:text-white text-[#303539] flex items-center gap-2"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Contact Us for This Solution
              </router-link>
              <button
                @click.stop="toggleSolution(index)"
                class="text-sm font-semibold group-hover:text-white text-[#303539] flex items-center gap-2"
              >
                <svg
                  :class="{ 'rotate-180': openSolutions[index] }"
                  class="w-4 h-4 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                View Solution
              </button>
            </div>
            <div
              v-if="openSolutions[index]"
              class="mt-4 text-[#303539] group-hover:text-white transition-all duration-300"
              :class="{
                'opacity-100': openSolutions[index],
                'opacity-0': !openSolutions[index],
              }"
            >
              ### Dummy Data: Industry and Subcategory Solutions **Industry:**
              Manufacturing **Subcategories:** 1. **Supply Chain Management:**
              Modern supply chains are increasingly complex, requiring
              sophisticated solutions to optimize efficiency, reduce costs, and
              improve delivery timelines. At CoalDev, we offer cutting-edge
              software for real-time inventory tracking, supplier collaboration,
              and predictive analytics. Our tools help manufacturers maintain a
              lean inventory, reduce stockouts, and improve decision-making. -
              **Problems Addressed:** 1. Lack of visibility across the supply
              chain. 2. High costs due to overstocking and inefficient
              logistics. 3. Delayed communication between suppliers and
              manufacturers. - **Solutions Provided:** 1. Real-time dashboards
              with key supply chain metrics. 2. AI-powered demand forecasting
              and order automation. 3. Integration with IoT devices for tracking
              shipments and inventory. 2. **Process Automation:** Automating
              repetitive and time-consuming processes can save time, reduce
              human error, and improve productivity. Our solutions include
              robotics process automation (RPA), automated workflows, and
              intelligent document processing. With these tools, manufacturers
              can focus on innovation while routine tasks are handled
              seamlessly. - **Problems Addressed:** 1. Manual handling of
              production schedules and reports. 2. Inefficient resource
              allocation leading to downtime. 3. Difficulty in scaling
              operations without increasing headcount. - **Solutions Provided:**
              1. RPA for automating repetitive tasks like data entry. 2.
              Workflow management tools for better task allocation. 3.
              Predictive maintenance software to minimize unplanned downtime. 3.
              **Product Lifecycle Management (PLM):** Managing the entire
              lifecycle of a product, from concept to retirement, requires
              robust tools. CoalDev provides PLM solutions that streamline
              design, testing, and market deployment. These tools enable
              collaboration among design teams, track regulatory compliance, and
              accelerate time-to-market. - **Problems Addressed:** 1.
              Disconnected processes between R&D and production teams. 2.
              Difficulty in tracking product revisions and updates. 3. High
              costs due to inefficiencies in product testing. - **Solutions
              Provided:** 1. Centralized platforms for collaboration across
              teams. 2. Digital twin technology for virtual testing and
              prototyping. 3. Regulatory tracking systems for compliance
              reporting. 4. **Quality Management:** Ensuring consistent product
              quality is vital for maintaining customer trust. Our quality
              management software includes tools for monitoring production
              metrics, managing audits, and automating defect tracking. With
              data-driven insights, manufacturers can continuously improve their
              processes. - **Problems Addressed:** 1. Inconsistent product
              quality due to lack of standardization. 2. Time-consuming manual
              audits and inspections. 3. Difficulty in identifying and
              addressing defects promptly. - **Solutions Provided:** 1.
              Automated quality checks using machine learning algorithms. 2.
              Audit management software for streamlined inspections. 3. Root
              cause analysis tools for identifying defect sources. 5.
              **Sustainability and Energy Management:** Sustainability is no
              longer optional; it's a necessity for modern manufacturers. Our
              solutions help monitor energy usage, reduce waste, and ensure
              compliance with environmental regulations. With actionable
              insights, businesses can achieve their sustainability goals while
              saving costs. - **Problems Addressed:** 1. High energy costs due
              to inefficient systems. 2. Difficulty in meeting stringent
              environmental regulations. 3. Lack of transparency in waste
              management. - **Solutions Provided:** 1. Energy monitoring tools
              integrated with smart meters. 2. Reporting software for regulatory
              compliance. 3. Waste tracking systems to reduce material loss.
              With our comprehensive solutions, CoalDev ensures that
              manufacturing companies are equipped to tackle modern challenges
              and maintain a competitive edge in their industries.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { store } from "../components/Store.js";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const industryName = route.params.name;
const selectedSubcategory = ref(null);
const subcategories = ref([]);
const industryTitle = ref("");
const openSolutions = ref({});

const toggleSolution = (index) => {
  openSolutions.value[index] = !openSolutions.value[index];
};

onMounted(() => {
  const formattedName = industryName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const industry = store.industries.find(
    (industry) => industry.name.toLowerCase() === formattedName.toLowerCase()
  );

  if (industry) {
    industryTitle.value = industry.name;
    subcategories.value = industry.subcategories || [];
    if (subcategories.value.length > 0) {
      selectedSubcategory.value = subcategories.value[0];
    }
  } else {
    console.warn(`Industry "${formattedName}" not found`);
  }
});
</script>
