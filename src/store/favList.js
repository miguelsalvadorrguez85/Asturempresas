import { defineStore } from 'pinia';
//Uso de Contador de Storage Local de nuestro favoritos
export const favList = defineStore({
  //Section de nuestro propiedades
  state: () => {
    return { list: [] };
  },
  actions: {
    toggleFavButton(hero) {
      if (this.list.includes(hero)) {
        return this.removeHeroFromFavs(hero);
      }
      return this.addHeroToFavs(hero);
    },
    addHeroToFavs(hero) {
      if (!this.list.includes(hero)) {
        this.list.push(hero);
      }
      console.log(this.list);
    },
    removeHeroFromFavs(hero) {
      this.list = this.list.filter((currentHero) => currentHero.id != hero.id);
      console.log(this.list);
    },
  },
});
