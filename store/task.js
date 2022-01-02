export default {
  state: () => ({
    tasks: null,
  }),
  mutations: {
    SET(state, tasks) {
      state.tasks = tasks
    },
    ADD(state, newTask) {
      state.tasks.unshift(newTask)
    },
    REMOVE(state, id) {
      state.tasks.filter(id !== task.id)
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const res = await this.$axios.$get('/tasks/')
      commit('SET', res)
    },
    async addTask({ commit }, task) {
      const res = await this.$axios.$post('/tasks/', task)
      if (res) {
        commit('ADD', res)
        this._vm.$notify({
          title: 'Added new Task',
          type: 'success',
        })
      } else {
        this._vm.$notify({
          title: 'Something went wrong',
          type: 'error',
        })
      }
    },
  },
  getters: {},
}
