import moment from 'moment';

// Get visible recipes

export default (recipes, { text }) => {
  return recipes.filter((recipe) => {
    const textMatch = recipe.name.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  })
};
