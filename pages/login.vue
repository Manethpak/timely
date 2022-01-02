<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Login to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        or
        <nuxt-link
          to="/register"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          >register</nuxt-link
        >
        to continue
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="submitLogin">
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div class="mt-1">
              <input
                v-model="username"
                id="username"
                name="username"
                autocomplete="username"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="mt-1">
              <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['protected'],
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async submitLogin() {
      try {
        const res = await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        if (res) {
          this.$notify({
            title: 'Successful',
            type: 'success',
            text: 'Login Completed',
          })
        }
      } catch (e) {
        this.$notify({
          title: 'Something went wrong',
          type: 'error',
          text: e.message,
        })
      }
    },
  },
}
</script>
