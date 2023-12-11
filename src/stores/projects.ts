import { defineStore } from 'pinia'

interface ProjectsState {
  projects: any[]
  loading: boolean
  error: any
}

export const useProjectsStore = defineStore({
  id: 'projects',
  state: (): ProjectsState => ({
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
