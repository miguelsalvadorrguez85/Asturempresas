<script>
import { getCurrentPath } from '../services/getCurrentPath';
export default {
  props: {
    hero: Object,
  },
  components: {
    
  },
  methods: {
    getCurrentPath,
  },
};
</script>

<template>
  <div class="card">
    <div class="left-box left-box-fav">
      <img :src="hero.images.lg" :alt="hero.name" />
      
    </div>
    <div class="right-box">
      <ul class="info-list">
        <h2>{{ hero.name }}</h2>
        <li>
          Nº de empleados: 
          <span class="info">{{ hero.powerstats.intelligence }}</span>
        </li>
        <li>
          Facturación:
          <span class="info">{{ hero.powerstats.strength }} millones €</span>
        </li>
        <li>
          Velocidad:
          <span class="info">{{ hero.powerstats.speed }}</span>
        </li>
      </ul>
    
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 406px;
  height: 281px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top:20px;
  border: 3px solid grey;
}

.left-box {
  width: 168px;
  height: 222px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  background-color: var(--white);
  border-radius: 20px;
}

.right-box {
  width: 168px;
  height: 222px;
  background-color: var(--white);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  background-color: var(--white);
  border-radius: 20px;
}

li {
  list-style-type: none;
}

h2 {
  color: var(--text);
  font-size: 16px;
  margin-bottom: 10px;
}

p {
  color: var(--text);
}

.separated {
  margin-top: 8px;
}

.info {
  color: #3d423e;
}

.left-box-fav {
  width: 150px;
  height: 150px;
  margin-bottom: 70px;
}

.right-box-fav {
  height: auto;
}
</style>
