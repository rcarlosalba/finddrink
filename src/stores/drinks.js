import { ref, reactive, onMounted } from 'vue';
import { defineStore } from 'pinia';
import APIService from '../services/APIService';
import { useModalStore } from './modal';

export const useDrinksStore = defineStore('drinks', () => {
  const modalStore = useModalStore();
  const categories = ref([]);
  const searchObj = reactive({
    category: '',
    ingredient: '',
  });
  const recipes = ref([]);
  const recipe = ref({});

  onMounted(async function () {
    const {
      data: { drinks },
    } = await APIService.getCategories();
    categories.value = drinks;
  });

  async function getDrinksByCategoryAndIngredient() {
    const {
      data: { drinks },
    } = await APIService.getDrinksByCategoryAndIngredient(searchObj);
    recipes.value = drinks;
  }

  async function getDrinkById(id) {
    const {
      data: { drinks },
    } = await APIService.getDrinkById(id);
    recipe.value = drinks[0];
    modalStore.toggleModal();
  }

  return {
    categories,
    searchObj,
    recipes,
    recipe,
    getDrinksByCategoryAndIngredient,
    getDrinkById,
  };
});
