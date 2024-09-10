<script setup>
import { useLightbox } from '@/stores/lightbox-store';
import Lightbox from '@/components/lightbox.vue';

const store = useLightbox();

</script>

<template>
    <div>
        <img class="front" src="/images/projektovanie.png">
        <h2>Kvalitné <mark>PROJEKTOVANIE</mark> <br>je základ úspešnej stavby</h2>
        <p> Ponúkame kompletnú 2D projekciu, <br>3D vizualizáciu a administratívu.</p>
        <button @click="store.openLightbox(store.exterier)">GALÉRIA</button>
    </div>
</template>

<style scoped>
.front {
  position: relative;
  z-index: 1;
  margin-bottom: -3rem;
}
mark {
  color: #f6ad00;
  background: transparent;
  font-size: 50px;
  font-weight: bold;
}
h2 {
  font-weight: normal;
  margin-bottom: 3rem;
  line-height: 3.5rem;
}
img {
  height: 60vh;
}

button {
  font-size: 18px;
  background: transparent;
  margin: 30px 10px 30px 10px;
  font-weight: bold;
  transition: all 0.2s;
  border-radius: 7px;
  padding: 15px 38px 15px 38px;
  color: #f6ad00;
  border: 5px solid #f6ad00;
}
button:hover {
  background: #f6ad00;
  color: #dbdbdb;
  cursor: pointer;
}
</style>