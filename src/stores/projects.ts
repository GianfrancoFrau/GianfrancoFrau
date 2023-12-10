import { defineStore } from 'pinia'

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [],
    loading: false,
    error: null
  }),
  getters: {},
  actions: {
    async fetchProjects() {
      this.projects = []
      this.loading = true
      try {
        this.projects = await fetch('/data/projects.json').then((response) => response.json())
        this.loading = false
      } catch (error) {
        this.loading = false
        this.error = error as any
      }
    }
  }
})
