import { defineStore } from 'pinia'
// import projectsJson from './json/data.json'

interface ProjectsState {
  projects: any[]
  loading: boolean
  error: any
}

type sortBy = 'position'

export const useProjectsStore = defineStore({
  id: 'projects',
  state: (): ProjectsState => ({
    projects: [],
    loading: false,
    error: null
  }),
  getters: {},
  actions: {
    async fetchProjects(sortBy?: sortBy) {
      this.projects = []
      this.loading = true
      try {
        let projects = await fetch('/data/projects.json').then((response) => response.json())
        if (sortBy) {
          projects = projects.sort((a: any, b: any) => (a[sortBy] < b[sortBy] ? -1 : 1))
        }
        this.projects = projects
        this.loading = false
      } catch (error) {
        this.loading = false
        this.error = error as any
      }
    },
    // async readProjects(sortBy?: sortBy) {
    //   this.projects = []
    //   this.loading = true
    //   let projects = { ...projectsJson }
    //   if (sortBy) {
    //     projects = projects.sort((a: any, b: any) => (a[sortBy] < b[sortBy] ? -1 : 1))
    //   }
    //   this.projects = projects
    //   this.loading = false
    // }
  }
})
