<template>
  <div class="overflow-x-hidden">
    <div class="relative mt-[64px] pb-16">
      <div class="relative z-10">
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-32 lg:pt-40"
        >
          <div class="w-full">
            <p
              class="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#303539] mb-4 italic"
            >
              LET'S COLLABORATE
            </p>
            <p class="text-base sm:text-lg font-semibold text-[#303539] mb-4">
              Have a project in mind?
            </p>
            <p class="text-sm sm:text-base text-[#303539] mb-4">
              Tell us everything about your project or product, we'll be glad to
              help.
            </p>
            <!-- Contact information with icons -->
            <div class="flex flex-col gap-4 mt-8">
              <div class="flex items-center gap-3">
                <i class="fas fa-phone text-[#303539] text-xl"></i>
                <a
                  href="tel:+923486665515"
                  class="text-base sm:text-lg text-[#303539] hover:text-[#303539]"
                >
                  +92 348 6665515
                </a>
              </div>
              <div class="flex items-center gap-3">
                <i class="fas fa-envelope text-[#303539] text-xl"></i>
                <a
                  href="mailto:aalliiazhar@gmail.com"
                  class="text-base sm:text-lg lg:text-xl text-[#303539] hover:text-[#303539]"
                >
                  aalliiazhar@gmail.com.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- New Form Section -->
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16 lg:mt-20"
      >
        <h3 class="text-xl sm:text-2xl font-semibold text-[#303539] mb-4">
          PROJECT DETAILS
        </h3>
        <form
          @submit.prevent="handleSubmit"
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-[#303539]"
        >
          <!-- Left Column -->

          <div class="space-y-6">
            <div>
              <label class="block text-[#303539] text-sm font-bold mb-2"
                >Name <span class="text-red-500">*</span>
                <input
                  id="name"
                  autocomplete="name"
                  v-model="formData.name"
                  type="text"
                  required
                  @input="validateField('name')"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#303539] font-normal"
                  :class="{ 'border-red-500': validationErrors.name }"
                />
              </label>
              <p
                v-if="validationErrors.name"
                class="text-red-500 text-sm font-normal mt-1"
              >
                {{ validationErrors.name }}
              </p>
            </div>

            <div>
              <label class="block text-[#303539] text-sm font-bold mb-2">
                Email <span class="text-red-500">*</span>
                <input
                  id="email"
                  autocomplete="email"
                  v-model="formData.email"
                  type="email"
                  required
                  @input="validateField('email')"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#303539] font-normal"
                  :class="{ 'border-red-500': validationErrors.email }"
                />
              </label>
              <p
                v-if="validationErrors.email"
                class="text-red-500 text-sm font-normal mt-1"
              >
                {{ validationErrors.email }}
              </p>
            </div>

            <div>
              <label class="block text-[#303539] text-sm font-bold mb-2"
                >Phone Number <span class="text-red-500">*</span>
                <input
                  id="phone"
                  autocomplete="tel"
                  v-model="formData.phone"
                  type="tel"
                  required
                  @input="validateField('phone')"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#303539] font-normal"
                  :class="{ 'border-red-500': validationErrors.phone }"
                />
              </label>
              <p
                v-if="validationErrors.phone"
                class="text-red-500 text-sm font-normal mt-1"
              >
                {{ validationErrors.phone }}
              </p>
            </div>

            <div>
              <label class="block text-[#303539] text-sm font-bold mb-2">
                Industry <span class="text-red-500">*</span>
                <select
                  id="industry"
                  autocomplete="industry"
                  required
                  v-model="formData.industry"
                  @change="handleIndustryChange"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#303539] font-normal"
                  :class="{ 'border-red-500': validationErrors.industry }"
                >
                  <option value=""></option>
                  <option
                    v-for="industry in store.industries"
                    :key="industry.name"
                    :value="industry.name"
                  >
                    {{ industry.name }}
                  </option>
                </select>
              </label>
              <p
                v-if="validationErrors.industry"
                class="text-red-500 text-sm font-normal mt-1"
              >
                {{ validationErrors.industry }}
              </p>
            </div>

            <div>
              <label class="block text-[#303539] text-sm font-bold mb-2"
                >SubCategory <span class="text-red-500">*</span>
                <select
                  id="category"
                  autocomplete="category"
                  required
                  v-model="formData.category"
                  @change="validateField('category')"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#303539] font-normal"
                  :class="{ 'border-red-500': validationErrors.category }"
                >
                  <option value=""></option>
                  <option
                    v-for="subcategory in selectedIndustrySubcategories"
                    :key="subcategory.name"
                    :value="subcategory.name"
                  >
                    {{ subcategory.name }}
                  </option>
                </select>
              </label>
              <p
                v-if="validationErrors.category"
                class="text-red-500 text-sm font-normal mt-1"
              >
                {{ validationErrors.category }}
              </p>
            </div>

            <div>
              <label class="block text-[#303539] text-sm font-bold mb-2"
                >Project Name <span class="text-red-500">*</span>
                <input
                  id="projectName"
                  autocomplete="projectName"
                  v-model="formData.projectName"
                  type="text"
                  required
                  @input="validateField('projectName')"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#303539] font-normal"
                  :class="{ 'border-red-500': validationErrors.projectName }"
                />
              </label>
              <p
                v-if="validationErrors.projectName"
                class="text-red-500 text-sm font-normal mt-1"
              >
                {{ validationErrors.projectName }}
              </p>
            </div>

            <div>
              <label class="block text-[#303539] text-sm font-bold mb-2">
                Tell us more about your project

                <textarea
                  id="comments"
                  autocomplete="comments"
                  v-model="formData.comments"
                  rows="4"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#303539] resize-none font-normal"
                  placeholder="Share any additional details about your project..."
                ></textarea>
              </label>
            </div>
          </div>

          <!-- Right Column -->
          <div>
            <label class="block text-[#303539] text-sm font-bold mb-2"
              >Budget Range <span class="text-red-500">*</span>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                <div
                  @click="selectedBudget = '0-10k'"
                  :class="[
                    'px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border cursor-pointer transition-colors font-normal',
                    selectedBudget === '0-10k'
                      ? 'bg-[#303539] text-white border-[#303539]'
                      : 'border-[#303539] hover:border-[#303539]',
                  ]"
                >
                  $0 - $10k
                </div>
                <div
                  @click="selectedBudget = '10k-25k'"
                  :class="[
                    'px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border cursor-pointer transition-colors font-normal',
                    selectedBudget === '10k-25k'
                      ? 'bg-[#303539] text-white border-[#303539]'
                      : 'border-[#303539] hover:border-[#303539]',
                  ]"
                >
                  $10k - $25k
                </div>
                <div
                  @click="selectedBudget = '25k-plus'"
                  :class="[
                    'px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border cursor-pointer transition-colors font-normal',
                    selectedBudget === '25k-plus'
                      ? 'bg-[#303539] text-white border-[#303539]'
                      : 'border-[#303539] hover:border-[#303539]',
                  ]"
                >
                  $25k+
                </div>
              </div>
            </label>
            <p v-if="validationErrors.budget" class="text-red-500 text-sm mt-1">
              {{ validationErrors.budget }}
            </p>

            <!-- Services Section -->
            <div class="mt-4 sm:mt-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                What services do you need?

                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <div
                    v-for="service in services"
                    :key="service"
                    @click="
                      selectedServices.includes(service)
                        ? (selectedServices = selectedServices.filter(
                            (s) => s !== service
                          ))
                        : selectedServices.push(service)
                    "
                    :class="[
                      'px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full border cursor-pointer transition-colors font-normal',
                      selectedServices.includes(service)
                        ? 'bg-[#303539] text-white border-[#303539]'
                        : 'border-[#303539] hover:border-[#303539]',
                    ]"
                  >
                    {{ service }}
                  </div>
                </div>
              </label>
              <p
                v-if="validationErrors.services"
                class="text-red-500 text-sm mt-1"
              >
                {{ validationErrors.services }}
              </p>
            </div>

            <!-- Technologies Section -->
            <div class="mt-4 sm:mt-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Are There Any Technologies You Want To Specify?

                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <div
                    v-for="tech in technologies"
                    :key="tech"
                    @click="
                      selectedTechnologies.includes(tech)
                        ? (selectedTechnologies = selectedTechnologies.filter(
                            (t) => t !== tech
                          ))
                        : selectedTechnologies.push(tech)
                    "
                    :class="[
                      'px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full border cursor-pointer transition-colors font-normal',
                      selectedTechnologies.includes(tech)
                        ? 'bg-[#303539] text-white border-[#303539]'
                        : 'border-[#303539] hover:border-[#303539]',
                    ]"
                  >
                    {{ tech }}
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <div
            class="mt-6 sm:mt-8 flex justify-center col-span-1 lg:col-span-2"
          >
            <button
              class="w-full sm:w-auto bg-[#303539] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#448CA1] transition-colors font-normal"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { validateContactForm } from "@/utils/formValidation";
import { store } from "@/components/Store";

const selectedBudget = ref(null);
const selectedServices = ref([]);
const selectedTechnologies = ref([]);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  industry: "",
  category: "",
  projectName: "",
  comments: "",
});

const services = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Cloud Services",
  "Quality Assurance",
  "Project Management",
  "Artificial Intelligence",
  "Generative AI",
  "Data Science",
  "Data Analytics",
];

const technologies = [
  "Django",
  "Flask",
  "React",
  "React Native",
  "Vue",
  "Angular",
  "Node.js",
  "Python",
  "Java",
  "Tensorflow",
  "Ruby",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "PostgreSQL",
];

// Add new ref for validation errors
const validationErrors = ref({});
const selectedIndustrySubcategories = computed(() => {
  const selectedIndustry = store.industries.find(
    (industry) => industry.name === formData.value.industry
  );
  return selectedIndustry ? selectedIndustry.subcategories : [];
});

const handleIndustryChange = () => {
  formData.value.category = "";
  validateField("industry");
};

const validateField = (field) => {
  const dataToValidate = {
    ...formData.value,
    budget: selectedBudget.value,
    services: selectedServices.value,
    technologies: selectedTechnologies.value,
  };

  const { errors } = validateContactForm(dataToValidate);
  validationErrors.value[field] = errors[field];
};

const handleSubmit = async () => {
  try {
    const submissionData = {
      ...formData.value,
      budget: selectedBudget.value,
      services: selectedServices.value,
      technologies: selectedTechnologies.value,
    };

    const { isValid, errors } = validateContactForm(submissionData);
    validationErrors.value = errors;

    if (!isValid) {
      console.log("Validation errors:", errors);
      return;
    }

    console.log("Form submitted:", submissionData);
    formData.value = {
      name: "",
      email: "",
      phone: "",
      industry: "",
      category: "",
      projectName: "",
      comments: "",
    };
    selectedBudget.value = null;
    selectedServices.value = [];
    selectedTechnologies.value = [];

    alert("Thank you for your submission!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was an error submitting your form. Please try again.");
  }
};
</script>
