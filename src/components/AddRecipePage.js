import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipes';
import { Link } from 'react-router-dom';

var divStyle = {
  marginTop: '20px',
  marginLeft: '20px'
};

export class AddRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.addRecipe(recipe);
    this.props.history.push('/');
  };
  render() {
    return (
      <div style={divStyle}>
        <h2>Add Recipe</h2>
        <Link to="/">Go Back</Link>
        <RecipeForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddRecipePage);
