<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function scrollToSection(sectionId) {
  router.push({ path: '/', hash: `#${sectionId}` });
}
</script>

<template>
    <div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob">
        <path fill="#F6AD00" d="M32.7,-38C45.2,-28.4,60.2,-20.8,64.1,-9.7C67.9,1.4,60.6,16.1,53.6,33.4C46.5,50.7,39.8,70.6,28.3,72.6C16.8,74.6,0.6,58.6,-11,47.1C-22.6,35.5,-29.6,28.3,-40.9,18.8C-52.2,9.2,-67.6,-2.7,-71.3,-17.9C-75,-33.1,-66.9,-51.6,-53,-60.9C-39.2,-70.3,-19.6,-70.6,-4.8,-64.9C10.1,-59.2,20.1,-47.6,32.7,-38Z" transform="translate(100 100)" />
      </svg>
      <img src="@/assets/icons/onas.JPEG">
    </div>
    <div class="text">
        <h2>O NÁS</h2>
        <p>Zaoberáme komplexnými službami v oblasti nehnuteľností. Zabezpečujeme všetko od projektov, inštalácií až po posledný detail.</p>
        <button @click="scrollToSection('sluzby')">SLUŽBY</button>
    </div>
</template>

<style scoped>
.text {
  text-shadow: rgba(0, 0, 0, 0.10) 1.95px 1.95px 2.6px;
  width: 20%;
  text-align: left;
}
button {
  font-size: 18px;
  background: transparent;
  margin: 40px 10px 30px 0px;
  font-weight: bold;
  transition: all 0.2s;
  border-radius: 7px;
  padding: 15px 40px 15px 40px;
  background: linear-gradient(90deg, #0019FF, #0688FF);
  border: 5px solid #0688FF;
  color: white;
}
button:hover {
  background: #0688FF;
  color: #dbdbdb;
  cursor: pointer;
}
h2 {
    margin-left: 0;
    margin-bottom: -0.5vh;;
}
img {
  height: 30em;
  width: 33em;
  object-fit: cover;
  border-radius: 12px;
  border: 7px solid rgba(128, 128, 128, 0.1);
  z-index: 1;
  position: relative;
  margin: -3rem 0 0 -7rem; 
}
.blob {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 40rem;
  margin: -5rem 0 0 -5rem;
  filter: blur(300px);
}

@media (min-width: 1280px) and (max-width: 2000px) {
  img {
    margin-top: 1em;
    height: 25em;
    width: 28em;

  }
}
</style>