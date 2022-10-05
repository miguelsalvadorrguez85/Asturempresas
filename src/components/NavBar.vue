<script>
import { getCurrentPath } from '../services/getCurrentPath';
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    getCurrentPath,
    setName(username) {
      this.name = username;
    },
  },
};
</script>

<template>
  <h1>ASTUREMPRESAS</h1>
</template>

<style>
nav {
  padding: 10px 0;
}

a {
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 2px;
  color: var(--yellow);
  -webkit-text-stroke: 1px black;
}
</style>
