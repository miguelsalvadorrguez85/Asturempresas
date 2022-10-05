<script>
import { apiCall } from '../services/apiCall';
import CompanyCard from '../components/CompanyCard.vue';

export default {
  data() {
    return {
      superheroeList: null,
    };
  },
  components: { CompanyCard },
  async created() {
    this.superheroeList = await apiCall();
  },
};
</script>

<template>
  
  <main class="home">
    <CompanyCard
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
