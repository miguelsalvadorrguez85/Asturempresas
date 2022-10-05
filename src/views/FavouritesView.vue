<script>
import { favList } from '../store/favList';
import HeroCard from '../components/HeroCard.vue';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(favList, ['list']),
  },
  components: { HeroCard },
};
</script>

<template>
  <h1>Superfavoritos</h1>
  <main class="fav">
    <HeroCard
      v-for="superheroe in this.list"
      :key="superheroe.id"
      :hero="superheroe"
    />
  </main>
</template>

<style>
.fav {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);
}
</style>
