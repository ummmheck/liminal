<template>
  <div>
    <b-navbar>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <b-nav-item-dropdown size="sm" text="Small" width="2rem" no-caret>
            <template v-slot:button-content>
              <img class="nav-icon" :src="search" alt="icon of magnifying glass" />
            </template>
            <b-dropdown-text style="width: 240px;">
              Enter a keyword to search for location...
            </b-dropdown-text>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-form>
              <div class="search-drop-item">
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </div>
            </b-dropdown-form>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown size="sm" text="Small" width="2rem" no-caret>
            <template v-slot:button-content>
              <img class="nav-icon" :src="filter" alt="icon of filter" />
            </template>
            <b-dropdown-text style="width: 240px;">
              Select a location type to filter map results...
            </b-dropdown-text>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#" width="10px">
              <div class="filter-drop-item">
                <span>Threshold</span>
                <img class="filter-icon" :src="door" alt="threshold to another place" />
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <div class="filter-drop-item">
                <span>Magical</span>
                <img class="filter-icon" :src="magic" alt="magic or assisting in magic" />
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <div class="filter-drop-item">
                <span>Haunted</span>
                <img class="filter-icon" :src="ghost" alt="haunted" />
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <div class="filter-drop-item">
                <span>Extra-Terrestrial</span>
                <img class="filter-icon" :src="alien" alt="extraterrestrial" />
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <div class="filter-drop-item">
                <span>Creature</span>
                <img class="filter-icon" :src="monster" alt="creature or monster" />
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <div class="filter-drop-item">
                <span>Psychic</span>
                <img class="filter-icon" :src="crystalBall" alt="can see into the future" />
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <div class="filter-drop-item">
                <span>Other</span>
                <img class="filter-icon" :src="more" alt="other" />
              </div>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item
            ><img @click="showNewModal = !showNewModal" class="nav-icon" :src="plus" alt="plus sign"
          /></b-nav-item>
          <New :show="showNewModal" />
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-brand><span class="logo">LIMINAL</span></b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
import New from '@/components/New.vue';
import alien from '@/assets/alien.svg';
import crystalBall from '@/assets/crystalBall.svg';
import door from '@/assets/door.svg';
import ghost from '@/assets/ghost.svg';
import magic from '@/assets/magic.svg';
import monster from '@/assets/monster.svg';
import more from '@/assets/more.svg';
import plus from '@/assets/plus.svg';
import search from '@/assets/search.svg';
import star from '@/assets/star.svg';
import info from '@/assets/info.svg';
import filter from '@/assets/filter.svg';
import key from '@/assets/key.svg';

export default {
  name: 'Nav',
  data() {
    return {
      showNewModal: false,
      alien,
      crystalBall,
      door,
      ghost,
      magic,
      monster,
      more,
      plus,
      search,
      star,
      info,
      filter,
      key,
    };
  },
  components: {
    New,
  },
};
</script>

<style lang="scss">
.navbar,
.navbar-expand {
  margin-top: 1rem;
  position: absolute !important;
  background-color: rgba(0, 0, 0, 0.5);
  top: 1rem;
  right: 0;
  left: 0;
  z-index: 999;
  color: white;
}

.logo {
  font-family: Recorda;
  font-size: 3rem;
  color: white;
}

.nav-icon {
  width: 30px;
  height: auto;
}

.filter-icon {
  width: 25px;
  height: auto;
}

.filter-drop-item {
  display: flex;
  justify-content: space-between;
}

.search-drop-item {
  display: flex;
  justify-content: space-around;
}
</style>
