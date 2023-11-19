import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useFavoritesStore } from './favoritos';
import { useDrinksStore } from './drinks';

export const useModalStore = defineStore('modal', () => {
  const favoritesStore = useFavoritesStore();
  const drinksStore = useDrinksStore();
  const showModal = ref(false);

  const textButton = computed(() => {
    return favoritesStore.areThereInLS(drinksStore.recipe.idDrink)
      ? 'Delete from favorites'
      : 'Add to favorites';
  });

  function toggleModal() {
    showModal.value = !showModal.value;
  }

  return {
    showModal,
    textButton,
    toggleModal,
  };
});
