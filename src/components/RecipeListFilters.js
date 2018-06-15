import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';


var divSearch = {
  marginBottom: '10px'
};

export class RecipeListFilters extends React.Component {
 
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div style={divSearch}>
        <input
          size="30"
          type="text"
          placeholder="Enter search here"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListFilters);
