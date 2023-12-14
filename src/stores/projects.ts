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
    async fetchProjects(sortBy?: 'position') {
      this.projects = []
      this.loading = true
      try {
        let projects = await fetch('/data/projects.json').then((response) => response.json())
        if (sortBy) {
          projects = projects.sort((a: any, b: any) => (a[sortBy] < b[sortBy] ? -1 : 1))
          // console.log('sorting by year', projects)
        }
        this.projects = projects
        this.loading = false
      } catch (error) {
        this.loading = false
        this.error = error as any
      }
    }
  }
})
