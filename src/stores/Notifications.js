import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useNotificationsStore = defineStore('notifications', () => {
  const text = ref('');
  const error = ref(false);
  const show = ref(false);

  function resetNotifications() {
    setTimeout(() => {
      text.value = '';
      error.value = false;
      show.value = false;
    }, 3000);
  }

  return {
    text,
    error,
    show,
    resetNotifications,
  };
});
