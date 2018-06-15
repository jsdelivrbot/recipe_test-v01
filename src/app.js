import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addRecipe } from './actions/recipes';
import { setTextFilter } from './actions/filters';
import getVisibleRecipes from './selectors/recipes';

const store = configureStore();

// Dummy data
store.dispatch(addRecipe({ name: 'Pollo al horno', ingredients: " 2 pechugas de pollo \n 4 cebollas \n 1 zanahoria \n 1 vino tinto", instructions: " Colocar en bandeja \n Marinar en aceite \n Colocar vegetales \n Hornear a fuego lento" }));
store.dispatch(addRecipe({ name: 'Lasaña', ingredients: " 1kg de carne molida \n Pasta para lasaña \n 2 cebollas \n 10 tomates", instructions: " Cocinar carne molida \n Picar cebolla \n Licuar tomates cocidos \n Colocar al horno con pasta"}));
store.dispatch(addRecipe({ name: 'Salmón ahumado', ingredients: " 1kg de salmón \n Romero \n Sal \n Pimienta", instructions: " Marinar por una hora con limon \n Colocar en parrilla \n Colocar vegetales \n Tapar luego de media hora"}));
store.dispatch(addRecipe({ name: 'Ensalada Cesar', ingredients: " 1/2kg de pollo \n Lechuga \n Sal \n Pimienta", instructions: " Preparar con amor \n Colocar en parrilla \n Colocar vegetales \n Tapar luego de media hora"}));
store.dispatch(addRecipe({ name: 'Filet Miñon', ingredients: " 1kg de lomito \n Romero \n Sal \n Pimienta", instructions: " Picar ingredientes \n Colocar en parrilla \n Colocar vegetales \n Tapar luego de media hora"}));
store.dispatch(addRecipe({ name: 'Spagueti Al Fredo', ingredients: " 1kg de pasta \n Crema de leche \n Sal \n Pimienta", instructions: " Marinar por una hora \n Colocar en parrilla \n Colocar vegetales \n Tapar luego de media hora"}));

const state = store.getState();
const visibleRecipes = getVisibleRecipes(state.recipes, state.filters);
console.log(visibleRecipes);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
