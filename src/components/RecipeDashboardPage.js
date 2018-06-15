import React from 'react';
import RecipeList from './RecipeList';
import RecipeListFilters from './RecipeListFilters';
import { Link } from 'react-router-dom';

var divStyle = {
  marginTop: '20px',
  marginLeft: '20px'
};

var btnStyle = {
  width: '250px',
  marginBottom: '10px'
}

const RecipeDashboardPage = () => (

  <div style={divStyle}>
    <h2>Recipe Database</h2>
    <Link to="/create" className="btn btn-primary" style={btnStyle}>
      Create a new recipe
    </Link>
    <RecipeListFilters />
    <RecipeList />
  </div>
);

export default RecipeDashboardPage;
