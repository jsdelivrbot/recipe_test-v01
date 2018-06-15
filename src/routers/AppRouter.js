import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import RecipeDashboardPage from '../components/RecipeDashboardPage';
import AddRecipePage from '../components/AddRecipePage';
import EditRecipePage from '../components/EditRecipePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={RecipeDashboardPage} exact={true} />
        <Route path="/create" component={AddRecipePage} />
        <Route path="/edit/:id" component={EditRecipePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
