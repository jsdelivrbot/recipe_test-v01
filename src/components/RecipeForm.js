import React from 'react';

var divStyle = {
  marginTop: '20px',
  marginLeft: '20px'
};

var textarea = {
  marginTop: '15px'
};

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.recipe ? props.recipe.name : '',
      instructions: props.recipe ? props.recipe.instructions : '',
      ingredients: props.recipe ? props.recipe.ingredients : '',
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onInstructionChange = (e) => {
    const instructions = e.target.value;
    this.setState(() => ({ instructions }));
  };

  onIngredientsChange = (e) => {
    const ingredients = e.target.value;
    this.setState(() => ({ ingredients }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.ingredients) {
      this.setState(() => ({ error: 'Please provide a recipe and ingredients.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions
      });
    }
  };
  render() {
    return (
      <div style={divStyle}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div>
            <div>
            <label>Recipe Name:</label>
            </div>
            <input
              type="text"
              size="51"
              placeholder="Enter recipe name here"
              autoFocus
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <div style={textarea}>
            <div>
              <label>Ingredients:</label>
            </div>
            <textarea
              rows="6" 
              cols="50"
              type="text"
              placeholder="Enter ingredients here, one per line"
              value={this.state.ingredients}
              onChange={this.onIngredientsChange}
            >
            </textarea>
          </div>
          <div style={textarea}>
            <div>
              <label>Instructions:</label>
            </div>
            <textarea
              rows="6" 
              cols="50"
              className="resizedTextbox"
              placeholder="Enter instructions here, one per line"
              value={this.state.instructions}
              onChange={this.onInstructionChange}
              >
            </textarea>
          </div>
          <button className="btn btn-success" >Save Recipe</button>
        </form>
      </div>
    )
  }
}
