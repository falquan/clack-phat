import React, { Component } from 'react';
import WorkoutBlock from './WorkoutBlock';

class SheetList extends Component {
  state = { sheet: { sheets: [] } }

  componentDidMount()
  {
    // https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/values/A1:P12?key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0
    fetch('https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/?key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0')
      .then(response => response.json())
      .then(json => this.setState({ sheet: json }))
      .catch(error => console.error("Something horrible happened...", error));
  }

  render() {
    return (
      <div>
        <h2>Choose a block:</h2>
        <WorkoutBlock blocks={this.state.sheet.sheets} />
      </div>
    );
  }
}

export default SheetList;