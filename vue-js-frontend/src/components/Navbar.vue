<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
//import { Transition } from '@headlessui/vue'
</script>

<template>
  <nav class="bg-white shadow nav-class">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0">
          <RouterLink class="text-xl font-semibold text-gray-900" to="/"> Brand </RouterLink>
        </div>
        <div class="flex items-center space-x-4">
          <RouterLink class="" to="/signup"> Sign Up </RouterLink>
          <!-- User Dropdown -->
          <Menu as="div" class="relative">
            <MenuButton class="inline-flex items-center text-gray-700 hover:text-gray-900">
              User
              <svg
                class="ml-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </MenuButton>

            <MenuItems
              class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20"
            >
              <MenuItem>
                <RouterLink
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  to="/profile"
                >
                  User Profile
                </RouterLink>
              </MenuItem>
              <MenuItem>
                <RouterLink
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  to="/reset-password"
                >
                  Reset Password
                </RouterLink>
              </MenuItem>
              <MenuItem>
                <RouterLink
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  to="/signout"
                >
                  Sign Out
                </RouterLink>
              </MenuItem>
            </MenuItems>
          </Menu>

          <!-- Admin Dropdown -->
          <Menu as="div" class="relative">
            <MenuButton class="inline-flex items-center text-gray-700 hover:text-gray-900">
              Admin
              <svg
                class="ml-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </MenuButton>
            <Transition
              enter="transition ease-out duration-100"
              enter-from="transform opacity-0 scale-95"
              enter-to="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leave-from="transform opacity-100 scale-100"
              leave-to="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20"
              >
                <MenuItem>
                  <RouterLink
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/products"
                  >
                    Products
                  </RouterLink>
                </MenuItem>
                <MenuItem>
                  <RouterLink
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/orders"
                  >
                    Orders
                  </RouterLink>
                </MenuItem>
                <MenuItem>
                  <RouterLink
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/users"
                  >
                    Users
                  </RouterLink>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>

          <!-- Contact Link -->
          <!-- <RouterLink class="text-gray-700 hover:text-gray-900" to="/contact"> Contact </RouterLink> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Additional styles, if needed */
.nav-class {
  background-color: lightblue;
}
</style>
