<script>
import { apiCall } from '../services/apiCall';
import HeroCard from '../components/HeroCard.vue';

export default {
  data() {
    return {
      superheroeList: null,
    };
  },
  components: { HeroCard },
  async created() {
    this.superheroeList = await apiCall();
  },
};
</script>

<template>
  
  <main class="home">
    <HeroCard
      v-for="superheroe in superheroeList"
      :key="superheroe.id"
      :hero="superheroe"
    />
  </main>
</template>

<style>
.home {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);
}
</style>
