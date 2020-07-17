<template>
  <div>
    <div v-if="loggedIn">
      <!-- <SideNav/> -->
    </div>
    <!-- <div>im {{cityName}}</div> -->
    <PlaceInfo />
    <div id="city-map">
      <Map />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Map from '@/components/Map.vue';
import PlaceInfo from '@/components/PlaceInfo.vue';
import SideNav from '@/components/SideNav.vue';

export default {
  name: 'City',
  data() {
    return {
      cityName: this.$route.params.city,
    };
  },
  methods: {
    ...mapMutations(['login']),
  },
  computed: {
    ...mapState(['loggedIn']),
  },
  components: {
    Map,
    PlaceInfo,
    // SideNav,
  },
  mounted() {
    this.login();
  },
};
</script>

<style>
#city-map {
  height: 100vh;
}
</style>
