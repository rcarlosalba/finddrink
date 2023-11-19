<script setup>
import { useDrinksStore } from '../stores/drinks';
const drinksStore = useDrinksStore();
</script>

<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="drink in drinksStore.recipes"
      :key="drink.idDrink"
      class="bg-white rounded shadow p-4"
    >
      <h2 class="text-center font-bold text-lg my-2">{{ drink.strDrink }}</h2>
      <img
        :src="drink.strDrinkThumb"
        :alt="drink.strDrink"
      />
      <div>
        <button
          class="px-6 py-2 bg-orange-400 hover:bg-orange-500 transition-colors text-white rounded-md mx-auto font-semibold block my-4"
          @click="drinksStore.getDrinkById(drink.idDrink)"
        >
          View Recipe
        </button>
      </div>
    </div>
  </div>
</template>
