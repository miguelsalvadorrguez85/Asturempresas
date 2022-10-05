<script>
import { getCurrentPath } from '../services/getCurrentPath';
import StarRanking from './StarRanking.vue';
import EditButton from './EditButton.vue';
import DeleteButton from './DeleteButton.vue';
import FavButton from './FavButton.vue';
export default {
  props: {
    hero: Object,
  },
  components: {
    StarRanking,
    EditButton,
    DeleteButton,
    FavButton,
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
      <StarRanking v-if="getCurrentPath() == '/favourites'" :id="hero.id" />
    </div>
    <div class="right-box">
      <EditButton v-if="getCurrentPath() == '/favourites'" />
      <ul class="info-list">
        <h2>{{ hero.name }}</h2>
        <li>Nombre real:</li>
        <span class="info">{{ hero.biography.fullName }}</span>
        <p class="separated">Estadísticas:</p>
        <li>
          Inteligencia:
          <span class="info">{{ hero.powerstats.intelligence }}</span>
        </li>
        <li>
          Fuerza:
          <span class="info">{{ hero.powerstats.strength }}</span>
        </li>
        <li>
          Velocidad:
          <span class="info">{{ hero.powerstats.speed }}</span>
        </li>
        <li>
          Durabilidad:
          <span class="info">{{ hero.powerstats.durability }}</span>
        </li>
        <li>
          Poder:
          <span class="info">{{ hero.powerstats.power }}</span>
        </li>
        <li>
          Combate:
          <span class="info">{{ hero.powerstats.combat }}</span>
        </li>
      </ul>
      <DeleteButton
        :key="hero.id"
        :favHero="hero"
        v-if="getCurrentPath() == '/favourites'"
      />
      <FavButton
        v-if="getCurrentPath() == '/' && hero"
        :key="hero.id"
        :favHero="hero"
      />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 406px;
  height: 281px;
  background-color: var(--navy);
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
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
}

p {
  color: var(--text);
}

.separated {
  margin-top: 8px;
}

.info {
  color: var(--info);
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
