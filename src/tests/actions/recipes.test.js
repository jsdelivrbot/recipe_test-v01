import { addRecipe, editRecipe, removeRecipe } from '../../actions/recipes';

test('should setup remove recipe action object', () => {
  const action = removeRecipe({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_RECIPE',
    id: '123abc'
  });
});

test('should setup edit recipe action object', () => {
  const action = editRecipe('123abc', { instrucions: 'New instructions' });
  expect(action).toEqual({
    type: 'EDIT_RECIPE',
    id: '123abc',
    updates: {
      instrucions: 'New instructions'
    }
  });
});

test('should setup add recipe action object with provided values', () => {
  const recipeData = {
    name: 'Pasta',
    ingredients: 'Pasta',
    instructions: 'Preparar a fuego lento'
  };
  const action = addRecipe(recipeData);
  expect(action).toEqual({
    type: 'ADD_RECIPE',
    recipe: {
      ...recipeData,
      id: expect.any(String)
    }
  });
});

test('should setup add recipe action object with default values', () => {
  const action = addRecipe();
  expect(action).toEqual({
    type: 'ADD_RECIPE',
    recipe: {
      id: expect.any(String),
      name: '',
      ingredients: '',
      instructions: ''
    }
  });
});
