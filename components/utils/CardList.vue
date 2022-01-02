<template>
  <div>
    <ul role="list" class="space-y-3">
      <li
        v-for="item in tasks"
        :key="item.id"
        class="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md"
      >
        <div class="flex justify-between items-center">
          <div>
            <p class="text-gray-900 text-leading">
              {{ item.title }} - {{ item.status }}
            </p>
            <p class="text-gray-500 text-sm">
              {{ item.description }}
            </p>
          </div>
          <div class="flex space-x-2">
            <button
              type="button"
              class="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            >
              Start
            </button>
            <button
              type="button"
              class="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
            >
              Stop
            </button>
            <button
              type="button"
              class="p-1 hover:bg-gray-100 rounded-md focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
            >
              <outline-pencil-icon class="w-6 h-6 text-gray-500" />
            </button>
            <button
              type="button"
              class="p-1 hover:bg-gray-100 rounded-md focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
            >
              <outline-trash-icon class="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
        <transition>
          <div class="px-4 py-1">Tracking</div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch() {
    if (this.tasks == undefined) {
      await this.$store.dispatch('task/fetchTasks')
    }
  },
  computed: {
    tasks() {
      return this.$store.state.task.tasks
    },
  },
}
</script>
