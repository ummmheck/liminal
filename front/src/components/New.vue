<template>
  <b-modal v-model="show" title="New Place" @ok="handleOk">
    <b-form>
      <b-form-group id="name-of-place-group" label="Place" label-for="name-of-place-input">
        <div id="geocoder"></div>
      </b-form-group>
      <b-form-group
        id="why-this-place-group"
        label="What makes this place liminal?"
        label-for="why-this-place-textarea"
      >
        <b-form-textarea
          id="why-this-place-textarea"
          v-model="form.whyPlace"
          placeholder="Tell us about this place..."
          rows="5"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group label="How would you categorize this place?">
        <b-form-checkbox-group v-model="form.types" id="why-this-place-checkbox-group">
          <b-form-checkbox value="haunted">Haunted</b-form-checkbox>
          <b-form-checkbox value="magic">Magic</b-form-checkbox>
          <b-form-checkbox value="threshold">Threshold to Elsewhere</b-form-checkbox>
          <b-form-checkbox value="moonster">Monster/Creature</b-form-checkbox>
          <b-form-checkbox value="psychic">Promotes Psychic Abilities</b-form-checkbox>
          <b-form-checkbox value="aliens">Alien Hotspot</b-form-checkbox>
          <b-form-checkbox value="other">Other...</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import Vue from 'vue';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

export default {
  name: 'New',
  props: ['show'],
  data() {
    return {
      defaultInput: '',
      form: {
        types: [],
        placeName: '',
        whyPlace: '',
        accessToken: process.env.VUE_APP_MAPBOX_KEY,
      },
    };
  },
  methods: {
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // save the new place shit
    },
    renderGeocoder(feature) {
      return `<span>heyyyy${feature.place_name}</span>`;
    },
  },
  watch: {
    show() {
      if (this.show) {
        Vue.nextTick(() => {
          const geocoder = new MapboxGeocoder({
            accessToken: process.env.VUE_APP_MAPBOX_KEY,
          });
          geocoder.addTo('#geocoder');
          geocoder.setRenderFunction(this.renderGeocoder);
          geocoder.on('result', (result) => {
            console.log('res', result);
          });
        });
      }
    },
  },
};
</script>

<style lang="scss">
.mapboxgl-ctrl-geocoder {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .mapboxgl-ctrl-geocoder--input {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
  }

  .mapboxgl-ctrl-geocoder--button {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
  }

  .mapboxgl-ctrl-geocoder--icon-loading {
    display: none;
  }

  .mapboxgl-ctrl-geocoder--icon-search {
    display: none;
  }

  .suggestions-wrapper {
    position: absolute;
    top: 2rem;
    left: 0;
    z-index: 99;
    float: left;
    min-width: 2rem;
    padding: 2px 0;
    margin: 2px 0 0; // override default ul
    color: #212529;
    text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)
    list-style: none;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    .suggestions {
      list-style: none;
      li {
        display: block;
        width: 100%; // For `<button>`s
        padding: 5px 5px;
        clear: both;
        color: pink;
        text-align: inherit; // For `<button>`s
        text-decoration: none;
        white-space: nowrap; // prevent links from randomly breaking onto new lines
        background-color: transparent; // For `<button>`s
        border: 0; // For `<button>`s

        &.hover,
        &:hover {
          color: green;
        }

        &.active,
        &:active {
          color: blue;
          text-decoration: none;
        }

        &.disabled,
        &:disabled {
          color: red;
          pointer-events: none;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
