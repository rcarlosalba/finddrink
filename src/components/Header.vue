<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="flex justify-between items-center mx-4 my-2">
    <div>
      <h1 class="text-xl md:text-3xl font-bold">Find Your Cocktail!</h1>
    </div>
    <nav>
      <RouterLink
        :to="{ name: 'home' }"
        class="mx-1"
        >Home</RouterLink
      >
      <RouterLink
        :to="{ name: 'favorites' }"
        class="mx-1"
        >Favorites</RouterLink
      >
    </nav>
  </header>
</template>
