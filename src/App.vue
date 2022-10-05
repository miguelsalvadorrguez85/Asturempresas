<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <img src="./assets/img/logo.png" alt="logo" /> 
      <NavBar />
    </div>
  </header>
  <RouterView />
  <footer>
    <p class="footer">&copy; Crazy House Team 2022</p>
  </footer>
</template>

<style>
@import '@/assets/base.css';

header {
  background-image: linear-gradient(to right, #3388bb 0%, #365983 100%);
  width: 100vw;
  min-height: 20px;
  padding: 0 35px;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper > img {
  height: 100px;
}
.footer {
  background-color: linear-gradient(to right, #3388bb 0%, #365983 100%);
  height: 71px;
  font-family: Kdam Thmor Pro, Arial, Helvetica, sans-serif;
  color: var(--white);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 31px;
}
</style>
