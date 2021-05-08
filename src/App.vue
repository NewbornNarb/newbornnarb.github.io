<template>
  <v-main>
    <v-app class="dark">
      <Navbar />
      <router-view></router-view>
      <Footer />
    </v-app>
  </v-main>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  data: () => ({
    drawer: false,
  }),
  $route: {
    immediate: true,
    handler(to, _from) {
      document.title = "Jesse Atter | " + to.name;
    },
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.dark {
  background: #272727 !important;
}
</style>