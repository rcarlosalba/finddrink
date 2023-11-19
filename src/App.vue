<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Formulario from './components/Formulario.vue';
import Recipe from './components/Recipe.vue';
import Modal from './components/Modal.vue';
import Notification from './components/Notification.vue';

const route = useRoute();
const isHome = computed(() => {
  return route.name === 'home';
});
</script>

<template>
  <Header />
  <div v-if="isHome">
    <Formulario />
    <main>
      <Recipe />
    </main>
  </div>
  <div v-else>
    <div class="hero">Aquí va el hero</div>
  </div>
  <Modal />
  <Notification />
  <RouterView />
</template>
