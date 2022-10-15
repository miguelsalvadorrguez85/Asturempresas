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
  
  <button>Añadir empresa +</button>

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

button {
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 3px;
  min-height: 10px;
}
</style>
