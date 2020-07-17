<template>
  <MglMap
    container="city-map"
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    :center.sync="center"
    :zoom="zoom"
  >
    <div v-for="place in places" :key="place.id">
      <MglMarker
        anchor="bottom"
        :coordinates="[place.centerLat, place.centerLong]"
      >
        <img
          src="../assets/marker.svg"
          slot="marker"
          v-b-toggle="`place-info-sidebar-${place.id}`"
          alt="marker pin"
        />
      </MglMarker>
      <PlaceInfo :place="place" />
    </div>
  </MglMap>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Mapbox from 'mapbox-gl';
import { MglMap, MglMarker } from 'vue-mapbox';
import PlaceInfo from './PlaceInfo.vue';

export default {
  name: 'Map',
  data() {
    return {
      defaultInput: '',
      accessToken: process.env.VUE_APP_MAPBOX_KEY,
      mapStyle: process.env.VUE_APP_MAPBOX_STYLE,
      center: [-104.9, 39.7],
      zoom: 8,
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  methods: {
    ...mapMutations(['showPlaceInfo', 'toggleMenu', 'fillPlaces']),
    async getPlaces() {
      const response = await fetch('http://localhost:3000/places/city/denver');
      this.fillPlaces(await response.json());
    },
  },
  computed: {
    ...mapState(['places']),
  },
  mounted() {
    this.getPlaces();
  },
  components: {
    MglMap,
    MglMarker,
    PlaceInfo,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: Recorda;
  src: url(../assets/recorda.otf);
}
</style>
