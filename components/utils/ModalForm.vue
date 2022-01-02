<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-6 my-2"
      >
        <div class="block absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            @click="onClose"
            class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-right"
          >
            <span class="sr-only">Close</span>
            <outline-x-icon class="h-6 w-6" />
          </button>
        </div>
        <div class="text-center text-lg font-semibold top-3">
          {{ modalTitle }}
        </div>
        <form @submit.prevent="onSubmit" class="space-y-2">
          <!-- Title -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">
              Title
            </label>
            <div class="mt-1">
              <input
                v-model="task.title"
                type="text"
                id="title"
                name="title"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md resize-none p-2"
                placeholder="Doing chores!"
                required
              />
            </div>
          </div>
          <!-- Description -->
          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div class="mt-1">
              <textarea
                v-model="task.description"
                id="about"
                name="about"
                rows="3"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md resize-none p-2"
                placeholder="Clean the bathroom and wash the dishes!"
                required
              />
            </div>
          </div>
          <!-- Select status -->
          <div class="sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <div class="mt-1 flex justify-between">
              <select
                v-model="task.status"
                id="status"
                name="status"
                autocomplete="status-name"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-5/12 sm:text-sm border-gray-300 rounded-md"
              >
                <option>to do</option>
                <option>on going</option>
                <option>completed</option>
                <option>failed</option>
              </select>
              <button
                type="submit"
                class="inline-flex items-center px-5 py-1 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      default() {
        return {
          title: '',
          description: '',
          status: 'to do',
          owner: this.$auth.user.id,
        }
      },
      type: Object,
    },
    modalTitle: {
      type: String,
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.task)
    },
    onClose() {
      this.$emit('closeForm')
    },
  },
}
</script>
