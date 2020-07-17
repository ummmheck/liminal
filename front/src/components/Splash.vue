<template>
  <div class="splash">
    <h1>
      <div v-for="(letter, index) in 'LIMINAL'" :key="index">
        <transition name="fade">
          <span v-if="availableLetters[index].isVisible">{{ letter }}</span>
        </transition>
      </div>
    </h1>
    <router-link
      class="btn btn-secondary"
      :style="
        availableLetters.every(letter => letter.isVisible)
          ? { visibility: 'visible' }
          : { visibility: 'hidden' }
      "
      to="/city/denver"
      aria-label="enter denver"
      >Enter Denver</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data() {
    return {
      availableLetters: [
        {
          isVisible: false,
          index: 0,
        },
        {
          isVisible: false,
          index: 1,
        },
        {
          isVisible: false,
          index: 2,
        },
        {
          isVisible: false,
          index: 3,
        },
        {
          isVisible: false,
          index: 4,
        },
        {
          isVisible: false,
          index: 5,
        },
        {
          isVisible: false,
          index: 6,
        },
      ],
      invisibleLetters: [],
    };
  },
  methods: {
    showLetters() {
      this.invisibleLetters = this.availableLetters.filter(letter => !letter.isVisible);
      const randomIndex = Math.floor(Math.random() * this.invisibleLetters.length);
      const letter = this.invisibleLetters[randomIndex];
      this.availableLetters[letter.index].isVisible = true;
      if (this.invisibleLetters.length - 1 > 0) {
        setTimeout(this.showLetters, Math.random() * (1000, 300) + 300);
      }
    },
  },
  mounted() {
    this.invisibleLetters = this.availableLetters;
    this.showLetters();
  },
};
</script>

<style lang="scss">
@import "../mixins.scss";

@font-face {
  font-family: Recorda;
  src: url(../assets/recorda.otf);
}

.splash {
  height: 100vh;
  background-color: black;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Recorda;
    font-size: 12rem;
    display: flex;
    justify-content: space-around;
    width: 100vw;

    @include breakpoint(tablet) {
      font-size: 8rem;
    }
    @include breakpoint(tablet) {
      font-size: 4rem;
    }

    div {
      width: 14%;
      display: flex;
      justify-content: center;
    }
  }
}

button:hover,
button:focus {
  background-color: #7c7f7f;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter {
  opacity: 0;
}
</style>
