<script setup>
import { useWindowSize } from '@vueuse/core'
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const { width } = useWindowSize()
const showNav = ref(false);
</script>

<template>
  <div id="layout">
    <header>
      <div v-if="width > 500" class="navbar">
        <nav>
          <RouterLink :to="{ path: '/', hash: '#domov' }" >DOMOV</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#onas' }">O NÁS</RouterLink>
          <a href="/">
            <img class="logo" src="/images/logo.png">
          </a>
          <RouterLink :to="{ path: '/', hash: '#sluzby' }">SLUŽBY</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#kontakt' }">KONTAKT</RouterLink>
          </nav>
      </div>
      <div v-else>
          <div class="navbar">
            <a href="/">
              <img class="logo" src="/images/logo.png">
            </a>
          </div>
          <div class="hamburger-div">
            <img @click="showNav = !showNav" class="hamburger" src="/images/hamburger.png">
          </div>
          <nav v-if="showNav" >
              <RouterLink :to="{ path: '/', hash: '#domov' }" >DOMOV</RouterLink>
              <RouterLink :to="{ path: '/', hash: '#onas' }">O NÁS</RouterLink>
              <RouterLink :to="{ path: '/', hash: '#sluzby' }">SLUŽBY</RouterLink>
              <RouterLink :to="{ path: '/', hash: '#kontakt' }">KONTAKT</RouterLink>
          </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template> 

<style>
/* mobile responsive */
.hamburger-div {
  position: absolute;
  width:100%;
  display: flex;
  justify-content: right;
  top: 0;
  right: 0;
}
.hamburger {
  height: 2.5em;
  padding: 3em 1em 0 0;
}
html {
  scroll-behavior: smooth;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
}
h1 {
  font-size: 70px;
  margin: 5px;
  font-weight: bold;
}
h2 {
  font-size: 42px;
  margin: 5px;
  font-weight: bold;
}
h3 {
  font-size: 30px;
  margin: 5px;
  font-weight: bold;
}
p {
  font-size: 18px;
  font-weight: medium;
}
#layout {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
  margin: 0px;
  padding: 0px;
  background: #10101E;
  width: 100%;
}
body {
  margin: 0px;
}
nav {
  gap: 7px;
  position: absolute;
  font-size: 18px;
  top: 70px;
  text-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
  display: flex;
  z-index: 2;
}
nav a {
  color: #dbdbdb;
  padding: 20px 20px 20px 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: bold;
}
nav a:hover {
  transform: scale(1.2);
  
}
.logo {
  height: 150px;
  margin-top: -50px;
}
@media (min-width: 1280px) and (max-width: 2000px) {
  nav {
  gap: 7px;
  position: absolute;
  font-size: 16px;
  top: 40px;
  }
}
@media (max-width: 500px) {
   .navbar {
    padding-top: 4em;
   }
   nav {
    flex-direction: column;
    right: 0;
    gap: 0;
    top: 6em;
    background: #10101ed3;
    backdrop-filter: blur(90%);
   }
}
</style>
