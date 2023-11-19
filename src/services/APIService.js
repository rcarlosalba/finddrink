import urlBase from '../lib/axios';

export default {
  getCategories() {
    return urlBase('/list.php?c=list');
  },
  getDrinksByCategoryAndIngredient({ category, ingredient }) {
    return urlBase(`/filter.php?c=${category}&i=${ingredient}`);
  },
  getDrinkById(id) {
    return urlBase(`/lookup.php?i=${id}`);
  },
};
