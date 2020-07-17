import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    placeInfo: null,
    places: [],
    loggedIn: false,
  },
  mutations: {
    fillPlaces(state, places) {
      state.places = places;
    },
    showPlaceInfo(state, place) {
      state.placeInfo = place;
    },
    notShowPlaceInfo(state) {
      state.placeInfo = null;
    },
    login(state) {
      state.loggedIn = true;
    },
  },
  actions: {
  },
  modules: {
  },
});
