<template>
  <div id="app">
    <div class="main-content">
      <router-link v-if="currentRoute !== 'splash'" to="/city/denver">
        <Nav/>
      </router-link>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: arial;
}

a {
  text-decoration: none;
  color: white;
}

p {
  color: black;
}

hr {
  color: black;
  background-color: black;
}
</style>
