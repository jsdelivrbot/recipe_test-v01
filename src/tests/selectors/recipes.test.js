import selectRecipes from '../../selectors/recipes';
import recipes from '../fixtures/recipes';

test('should filter by text value', () => {
  const filters = {
    text: 'Pasta'
  };
  const result = selectRecipes(recipes, filters);
  expect(result).toEqual([recipes[0]]);
});


