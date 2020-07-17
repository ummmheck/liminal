<template>
  <div class="sidenav">
<b-card no-body class="mh-100">
    <b-list-group flush>
      <b-list-group-item>
        <div class="item" v-b-toggle.search-collapse>
          <img :src="search" alt="search for location"/>
          <p>Search</p>
        </div>
      </b-list-group-item>
      <b-collapse id="search-collapse" v-model="searchOn">
        <b-list-group-item>
          search here
        </b-list-group-item>
      </b-collapse>
      <b-list-group-item v-b-toggle.filter-collapse>
        <div class="item">
          <img :src="filter" alt="filter locations"/>
          <p>Filter</p>
        </div>
      </b-list-group-item>
      <b-collapse id="filter-collapse" v-model="filterOn">
        <b-list-group-item>
          <b-card>
            <img :src="door" alt="threshold to another place"/>
            <img :src="magic" alt="magic or assisting in magic"/>
            <img :src="ghost" alt="haunted"/>
            <img :src="alien" alt="extraterrestrial"/>
            <img :src="monster" alt="creature or monster"/>
            <img :src="crystalBall" alt="can see into the future"/>
            <img :src="more" alt="other"/>
          </b-card>
        </b-list-group-item>
      </b-collapse>
      <b-list-group-item v-b-toggle.new-place-collapse>
        <div class="item">
          <img :src="plus" alt="add new place"/>
          <p>New Place</p>
        </div>
      </b-list-group-item>
      <b-collapse id="new-place-collapse" v-model="newPlaceOn">
        <b-list-group-item class="h-75 new-place">
         <New />
        </b-list-group-item>
      </b-collapse>
      <b-list-group-item class="hover-link">
        <router-link to="/about" class="action-link">
        <div class="item">
          <img :src="info" alt="information icon"/>
          <p>About</p>
        </div>
        </router-link>
      </b-list-group-item>
      <b-list-group-item v-b-toggle.user-actions-collapse>
        <div class="item">
          <img :src="key" alt="login, signup, or logout icon"/>
          <p>User Actions</p>
        </div>
      </b-list-group-item>
      <b-collapse id="user-actions-collapse" v-model="userActionsOn">
        <b-list-group-item>
          login/logout/settings/profile
        </b-list-group-item>
      </b-collapse>
    </b-list-group>
  </b-card>
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
  name: 'SideNav',
  data() {
    return {
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
      filterOn: false,
      searchOn: false,
      userActionsOn: false,
      newPlaceOn: false,
    };
  },
  components: {
    New,
  },
};
</script>

<style lang="scss">
.new-place {
  max-height: 50vh;
  overflow: scroll;
}
.sidenav {
  position: fixed;
  z-index: 1;
  top: 1.5rem;
  left: 2rem;
  width: 20%;
  height: 100vh;
  img {
    width: 25px;
    height: 25px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
  }
}

</style>
