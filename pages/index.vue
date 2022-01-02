<template>
  <div>
    <div class="relative my-5">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300" />
      </div>
      <div class="relative flex items-center justify-between">
        <span class="pr-3 bg-white text-lg font-medium text-gray-900">
          Your Tasks
        </span>
        <button
          type="button"
          @click="openForm"
          class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <outline-plus-sm-icon
            class="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Add Task</span>
        </button>
      </div>
    </div>

    <utils-modal-form
      modalTitle="Add a new task"
      v-show="showForm"
      @closeForm="closeForm"
      @submit="createTask"
    />

    <utils-card-list />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      showForm: false,
    }
  },
  methods: {
    closeForm() {
      this.showForm = false
    },
    openForm() {
      this.showForm = true
    },
    async createTask(task) {
      try {
        await this.$store.dispatch('task/addTask', task)
        this.$notify({
          type: 'success',
          title: 'Added task successfully',
        })
        this.closeForm()
      } catch (e) {
        this.$notify({
          type: 'error',
          title: 'Error occured',
        })
      }
    },
  },
}
</script>
