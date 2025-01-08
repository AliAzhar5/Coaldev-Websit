<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Industries (now spans 6 columns) -->
        <div class="md:col-span-6">
          <h3 class="text-xl font-bold mb-4">INDUSTRIES</h3>
          <div class="grid grid-cols-2 gap-0">
            <!-- Column 1 -->
            <ul class="text-white space-y-1">
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Healthcare and Life Sciences</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Financial Services and Banking</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Retail and E-commerce</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]">Manufacturing</a>
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Transportation and Logistics</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Energy and Utilities</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]">Telecommunications</a>
              </li>
            </ul>
            <!-- Column 2 -->
            <ul class="text-white space-y-1">
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Pharmaceuticals and Biotechnology</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Media and Entertainment</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Real Estate and Property Management</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Agriculture and Farming</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Government and Public Sector</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Aerospace and Defense</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]"
                  >Hospitality and Tourism</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Services (spans 2 columns) -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-4">SERVICES</h3>
          <div class="grid grid-cols-2 gap-1">
            <!-- Column 1 -->
            <ul class="space-y-2 text-white">
              <li>
                <a href="#" class="hover:text-[#008C96]">Web Development</a>
              </li>
              <li>
                <a href="#" class="hover:text-[#008C96]">Mobile Development</a>
              </li>
            </ul>
            <!-- Column 2 -->
            <ul class="space-y-2 text-white">
              <li>
                <a href="#" class="hover:text-[#008C96]">Cloud Solutions</a>
              </li>
              <li><a href="#" class="hover:text-[#008C96]">Consulting</a></li>
            </ul>
          </div>
        </div>

        <!-- Find us on (spans 2 columns) -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-4">FIND US ON</h3>
          <ul class="space-y-2 text-white">
            <li>
              <a href="#" class="hover:text-[#008C96]"
                ><i class="fab fa-linkedin text-xl"></i> LinkedIn</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#008C96]"
                ><i class="fab fa-twitter text-xl"></i> Twitter</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#008C96]"
                ><i class="fab fa-instagram text-xl"></i> Instagram</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#008C96]"
                ><i class="fab fa-facebook text-xl"></i> Facebook</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-gray-800 mt-8 pt-8 text-white">
        <div class="flex items-center justify-between mt-4">
          <p>
            &copy; {{ new Date().getFullYear() }}
            <span class="font-bold">CoalDev</span>. All rights reserved.
          </p>
          <div class="flex items-center space-x-8">
            <a href="#" class="hover:text-[#008C96]">Privacy Policy</a>
            <a href="#" class="hover:text-[#008C96]">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
