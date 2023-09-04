<template>
  <div class="bg-gray-100 min-h-screen flex">
    <!-- Sidebar -->
    <aside class="bg-gray-200 w-64 py-6 px-4 space-y-6">
      <!-- Sidebar Logo -->
      <div class="flex items-center justify-center space-x-2">
        <svg
          class="w-8 h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
         
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <h1 class="text-lg font-semibold text-indigo-600">Test UI</h1>
      </div>

      <!-- Sidebar Links -->
      <nav class="space-y-2">
        <router-link to="/articles" class="text-gray-600 hover:text-indigo-600">
          Articles
        </router-link>


      </nav>

      <!-- Logout Button -->
      <button @click="logout" class="w-full text-left text-gray-600 hover:text-indigo-600">
        Logout
      </button>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <!-- Top Navigation Bar -->
      <header class="flex justify-between items-center bg-gray-200 p-4 mb-8">
        <!-- Page Title -->
        <h1 class="text-2xl font-semibold text-gray-800">Your Page Title</h1>
        <!-- User Profile Menu (you can add your user profile dropdown here) -->
        <div class="relative">
          <!-- Example user profile dropdown -->
          <button
            class="text-gray-600 hover:text-indigo-600 focus:outline-none"
            @click="toggleUserMenu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- User Profile Dropdown (customize this as needed) -->
          <div
            v-if="userMenuOpen"
            class="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
          >
            <!-- Add your user profile menu items here -->
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
              Profile
            </a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
              Settings
            </a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
              Logout
            </a>
          </div>
        </div>
      </header>

    
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      userMenuOpen: false,
    };
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    logout() {
      
    },
    toggleUserMenu() {
      this.userMenuOpen = !this.userMenuOpen;
    },
  },
};
</script>

<style>
/* Add any custom CSS styles here if needed */
</style>