import uuid from 'uuid';

// ADD_EXPENSE
export const addRecipe = (
  {
    name = '',
    instructions = '',
    ingredients = ''
  } = {}
) => ({
  type: 'ADD_RECIPE',
  recipe: {
    id: uuid(),
    name,
    instructions,
    ingredients
  }
});

// REMOVE_RECIPE
export const removeRecipe = ({ id } = {}) => ({
  type: 'REMOVE_RECIPE',
  id
});

// EDIT_RECIPE
export const editRecipe = (id, updates) => ({
  type: 'EDIT_RECIPE',
  id,
  updates
});
