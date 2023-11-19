import { onMounted, ref, watch, computed } from 'vue';
import { defineStore } from 'pinia';
import { useDrinksStore } from './drinks';
import { useModalStore } from './modal';
import { useNotificationsStore } from './Notifications';

export const useFavoritesStore = defineStore('favoritos', () => {
  const modalStore = useModalStore();
  const drinksStore = useDrinksStore();
  const notificationsStore = useNotificationsStore();
  const favorites = ref([]);

  onMounted(() => {
    favorites.value = JSON.parse(localStorage.getItem('favorites')) || [];
  });

  watch(
    favorites,
    () => {
      syncLS();
    },
    { deep: true }
  );

  function syncLS() {
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  function areThereInLS(id) {
    const favLS = JSON.parse(localStorage.getItem('favorites')) || [];
    return favLS.some((fav) => fav.idDrink === id);
  }

  function deleteFavorite() {
    favorites.value = favorites.value.filter(
      (fav) => fav.idDrink !== drinksStore.recipe.idDrink
    );
    notificationsStore.show = true;
    notificationsStore.text = 'Deleted from favorites';
    notificationsStore.error = true;
    notificationsStore.resetNotifications();
  }

  function addFavorite() {
    favorites.value.push(drinksStore.recipe);
    notificationsStore.show = true;
    notificationsStore.text = 'Added to favorites';
    notificationsStore.error = false;
    notificationsStore.resetNotifications();
  }

  function manageFavorite() {
    if (areThereInLS(drinksStore.recipe.idDrink)) {
      deleteFavorite();
    } else {
      addFavorite();
    }
    modalStore.toggleModal();
  }

  const areThereInFavorites = computed(() => {
    return favorites.value.length > 0;
  });

  return {
    favorites,
    manageFavorite,
    areThereInLS,
    areThereInFavorites,
  };
});
