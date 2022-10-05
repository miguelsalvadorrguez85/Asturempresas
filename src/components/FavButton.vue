<script>
import { mapActions } from 'pinia';
import { favList } from '../store/favList';

export default {
  props: {
    favHero: Object,
  },
  methods: {
    ...mapActions(favList, ['addHeroToFavs']),
  },
};
</script>
<template>
  <div @click.prevent="addHeroToFavs(favHero)" class="addfavourite">
    <img src="./icons/FavButtonIcon.svg" />
  </div>
</template>

<style>
.addfavourite {
  display: flex;
  justify-content: end;
  margin: 7px;
}

</style>
