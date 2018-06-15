import React from 'react';
import { Link } from 'react-router-dom';


const RecipeListItem = ({ id, name }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <p>{name}</p>
    </Link>
  </div>
);

export default RecipeListItem;
