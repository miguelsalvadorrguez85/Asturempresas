<script>
import { apiCall } from '../services/apiCall';
import HeroCardTest from '../components/HeroCardTest.vue';

export default {
  data() {
    return {
      superheroeList: null,
    };
  },
  components: { HeroCardTest },
  async created() {
    this.superheroeList = await apiCall();
  },
};
</script>

<template>
  <h1>Test</h1>
  <main class="test">
    <HeroCardTest
      v-for="superheroe in superheroeList"
      :key="superheroe.id"
      :hero="superheroe"
    />
  </main>
</template>

<style>
.test {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);
}
</style>
