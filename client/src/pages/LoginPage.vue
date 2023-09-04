<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Login</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              :class="{
                'border-red-500': errors.username,
                'border-gray-300': !errors.username
              }"
              v-model="username"
              autocomplete="username"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
            <div class="text-red-500" v-if="errors.username">{{ errors.username }}</div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              :class="{
                'border-red-500': errors.password,
                'border-gray-300': !errors.password
              }"
              v-model="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            <div class="text-red-500" v-if="errors.password">{{ errors.password }}</div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
      <div class="text-center text-red-500" v-if="loginError">{{ loginError }}</div>
      <div class="text-center text-green-500" v-if="loggedIn">Logged in successfully!</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '',
      password: '',
      errors: {},
      loginError: '', // To display authentication errors
      loggedIn: false, // To show a success message upon successful login
    };
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    async login() {
      this.errors = {};
      this.loginError = '';

      if (!this.username) {
        this.errors.username = 'Username is required.';
      }
      if (!this.password) {
        this.errors.password = 'Password is required.';
      }

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      try {
        const response = await this.loginUser({
          username: this.username,
          password: this.password,
        });

        if (response.success) {
          this.username = '';
          this.password = '';
        } else {
          this.loginError = 'Invalid username or password.';
        }
      } catch (error) {
        this.loginError = 'An error occurred. Please try again later.';
      }
    },
  },
};
</script>