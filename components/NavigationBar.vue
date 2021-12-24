<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <nuxt-link
                to="/"
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
                >Dashboard</nuxt-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <div class="ml-3 relative" v-if="$auth.loggedIn">
            <div>
              <button
                type="button"
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                @click="profileDropdown = !profileDropdown"
                v-on-clickaway="closeDropdown"
              >
                <span class="sr-only">Open user menu</span>
                <div
                  class="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <span class="text-center font-semibold text-gray-900">{{
                    $auth.user.username[0].toUpperCase()
                  }}</span>
                </div>
              </button>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                v-show="profileDropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <nuxt-link
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Your Profile</nuxt-link
                >
                <div
                  @click="$auth.logout()"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Logout
                </div>
              </div>
            </transition>
          </div>

          <div v-else>
            <div class="flex space-x-10 text-white">
              <nuxt-link to="/login">Login</nuxt-link>
              <nuxt-link to="/register">Register</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      profileDropdown: false,
    }
  },
  methods: {
    closeDropdown() {
      this.profileDropdown = false
    },
  },
}
</script>

<style></style>
