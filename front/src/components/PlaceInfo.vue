<template>
  <div v-if="!!place">
    <b-sidebar
      backdrop-variant="light"
      :id="`place-info-sidebar-${place.id}`"
      :title="place.name"
      shadow
    >
      <b-card-group>
        <b-card>
          <template v-slot:header>
            {{ place.address }}
          </template>
          <b-card-text>
            {{ place.description }}
          </b-card-text>
          <!-- <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img> -->
          <template v-slot:footer>
            <pre>{{ place }}</pre>
          </template>
        </b-card>
      </b-card-group>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'PlaceInfo',
  props: ['place'],
};
</script>

<style>
.info-box {
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
}

.ex {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}

.card-group {
  height: 100%;
}
</style>
