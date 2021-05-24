<template>
  <div class="my-projects">
    <h2>My Projects</h2>
    <hr />
    <div class="projects-list flex space-evenly wrap">
      <div v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <img :src="project.img" :alt='project.name' class="project-img" />
        <p>Made with {{ project.technologies }}</p>
        <a :href="`${project.link}`">View Project</a>
        |
        <a :href="`${project.link}`">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
import { projectService } from "../services/projectService";
export default {
  data() {
    return {
      projects: null,
    };
  },
  methods: {
    async loadProjects() {
      this.projects = await projectService.query();
    },
  },
  async created() {
    this.loadProjects();
  },
};
</script>