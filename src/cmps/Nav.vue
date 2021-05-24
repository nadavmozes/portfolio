<template>
  <div class="nav flex space-around">
    <button @click="aboutMe()">About Me</button>
    <button @click="myStack()">My Stack</button>
    <button @click="myProjects()">My Projects</button>
    <button @click="contactMe()">Contact Me</button>
  </div>
</template>

<script>
export default {
  methods: {
    aboutMe: () => {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
    },
    myStack: () => {
      window.scrollTo({
        top: 700,
        behavior: "smooth",
      });
    },
    myProjects: () => {
      window.scrollTo({
        top: 1100,
        behavior: "smooth",
      });
    },
    contactMe: () => {
      window.scrollTo({
        top: 1500,
        behavior: "smooth",
      });
    },
  },
};
</script>
