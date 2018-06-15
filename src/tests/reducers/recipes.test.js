import recipesReducer from '../../reducers/recipes';
import recipes from '../fixtures/recipes';

test('should set default state', () => {
  const state = recipesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove recipe by id', () => {
  const action = {
    type: 'REMOVE_RECIPE',
    id: recipes[1].id
  };
  const state = recipesReducer(recipes, action);
  expect(state).toEqual([recipes[0], recipes[2]]);
});

test('should not remove recipes if id not found', () => {
  const action = {
    type: 'REMOVE_RECIPE',
    id: '-1'
  };
  const state = recipesReducer(recipes, action);
  expect(state).toEqual(recipes);
});

test('should add an recipe', () => {
  const recipe = {
    id: '109',
    name: 'Pasta',
    instructions: 'pasta',
    ingredients: 'hacer fuego lento'
  };
  const action = {
    type: 'ADD_RECIPE',
    recipe
  };
  const state = recipesReducer(recipes, action);
  expect(state).toEqual([...recipes, recipe]);
});

test('should edit a recipe', () => {
  const name = 'Pasta';
  const action = {
    type: 'EDIT_RECIPE',
    id: recipes[1].id,
    updates: {
      name
    }
  };
  const state = recipesReducer(recipes, action);
  expect(state[1].name).toBe(name);
});

test('should not edit a recipe if id not found', () => {
  const name = 'pasta';
  const action = {
    type: 'EDIT_RECIPE',
    id: '-1',
    updates: {
      name
    }
  };
  const state = recipesReducer(recipes, action);
  expect(state).toEqual(recipes);
});
