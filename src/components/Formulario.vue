<script setup>
import { useDrinksStore } from '../stores/drinks';
const drinksStore = useDrinksStore();

const handleSubmit = () => {
  drinksStore.getDrinksByCategoryAndIngredient();
};
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="ingredient"> Ingredient: </label>
        <input
          type="text"
          id="ingredient"
          v-model="drinksStore.searchObj.ingredient"
        />
      </div>
      <div>
        <label for="category">Category:</label>
        <select
          name="category"
          id="category"
          v-model="drinksStore.searchObj.category"
        >
          <option value="">--Select--</option>
          <option
            v-for="category in drinksStore.categories"
            :key="category.strCategory"
            :value="category.strCategory"
          >
            {{ category.strCategory }}
          </option>
        </select>
      </div>
      <button>Buscar</button>
    </form>
  </div>
</template>
