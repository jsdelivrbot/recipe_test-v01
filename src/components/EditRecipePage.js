import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe, removeRecipe } from '../actions/recipes';
import { Link } from 'react-router-dom';

var divStyle = {
  marginTop: '20px',
  marginLeft: '20px'
};

var buttonRemove = {
  marginTop: '5px',
  marginLeft: '20px'
};

export class EditRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.editRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeRecipe({ id: this.props.recipe.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div style={divStyle}>
        <h2>Edit Recipe</h2>
        <Link to="/">Go Back</Link>
        <RecipeForm
          recipe={this.props.recipe}
          onSubmit={this.onSubmit}
        />
        <button style={buttonRemove} className="btn btn-danger" onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editRecipe: (id, recipe) => dispatch(editRecipe(id, recipe)),
  removeRecipe: (data) => dispatch(removeRecipe(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipePage);
