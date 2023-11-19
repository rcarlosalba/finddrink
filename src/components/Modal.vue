<script setup>
import { useModalStore } from '../stores/modal';
import { useDrinksStore } from '../stores/drinks';
import { useFavoritesStore } from '../stores/favoritos';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

const modalStore = useModalStore();
const drinksStore = useDrinksStore();
const favoritesStore = useFavoritesStore();

const thereIsIngredients = () => {
  const factsDiv = document.createElement('div');
  for (let i = 1; i <= 15; i++) {
    const noEmpty = drinksStore.recipe[`strIngredient${i}`] !== null;
    if (noEmpty) {
      const ingredient = drinksStore.recipe[`strIngredient${i}`];
      const measure = drinksStore.recipe[`strMeasure${i}`];
      const ingredientMeasure = document.createElement('p');
      ingredientMeasure.textContent = `${ingredient} - ${measure}`;
      factsDiv.appendChild(ingredientMeasure);
    }
  }
  return factsDiv;
};
</script>

<template>
  <TransitionRoot
    as="template"
    :show="modalStore.showModal"
  >
    <Dialog
      as="div"
      class="relative z-10"
      @close="modalStore.toggleModal"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
              <div>
                <div class="mt-3">
                  <DialogTitle
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    <h3 class="text-center font-bold text-lg my-2">
                      {{ drinksStore.recipe.strDrink }}
                    </h3>
                  </DialogTitle>
                  <img
                    :src="drinksStore.recipe.strDrinkThumb"
                    :alt="drinksStore.recipe.strDrink"
                    class="max-w-sm mx-auto object-cover"
                  />
                  <div class="mt-5">
                    <h4 class="text-center font-bold text-lg my-2">
                      Ingredients
                    </h4>
                    <div
                      class="grid grid-cols-2 gap-4"
                      v-html="thereIsIngredients().outerHTML"
                    ></div>
                    <p class="text-base mt-6 text-gray-500">
                      {{ drinksStore.recipe.strInstructions }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                <button
                  type="button"
                  class="w-full rounded bg-gray-600 p-3 font-bold text-white hover:bg-gray-700 transition-colors"
                  @click="modalStore.toggleModal"
                >
                  Cerrar
                </button>
                <button
                  class="w-full rounded bg-orange-600 p-3 font-bold text-white hover:bg-orange-700 transition-colors"
                  @click="favoritesStore.manageFavorite"
                >
                  {{ modalStore.textButton }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
