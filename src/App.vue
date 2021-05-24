<template>
  <div id="app">
      <Header />
      <Nav />
      <About />
      <Stack/>
      <Projects/>
      <ContactMe/>
      <Footer/>
  </div>
</template>

<script>
import Header from "./cmps/Header"
import Nav from "./cmps/Nav"
import About from "./cmps/About"
import Stack from "./cmps/Stack"
import Projects from './cmps/Projects.vue'
import Footer from './cmps/Footer.vue'
import ContactMe from './cmps/ContactMe.vue'

export default {
  name: "App",
  components: {
    Header,
    Nav,
    About,
    Stack,
    Projects,
    ContactMe,
    Footer,
  },
};
</script>
