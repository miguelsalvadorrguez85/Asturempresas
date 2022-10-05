<script>
import { mapActions } from 'pinia';
import { favList } from '../store/favList';

export default {
  props: {
    favHero: Object,
  },
  methods: {
    ...mapActions(favList, ['removeHeroFromFavs']),
  },
};
</script>

<template>
  <div @click="removeHeroFromFavs(favHero)" class="delete">
    <img src="./icons/DeleteButtonIcon.svg" />
  </div>
</template>

<style>
.delete {
  position: absolute;
  display: flex;
  justify-content: end;
  margin: 7px;
  align-items: flex-end;
  margin-top: 185px;
  left: 130px;
 
}
 
</style>
