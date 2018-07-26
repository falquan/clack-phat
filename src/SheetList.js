import React, { Component } from 'react';
import Sheet from './Sheet';

class SheetList extends Component {
  state = { sheets: { } }

  componentDidMount()
  {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/?key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0')
      .then(response => response.json())
      .then(json => this.setState({ sheets: json }))
      .catch(error => console.error("Something horrible happened...", error));
  }

  render() {
    return (
      <div>
        <h2>Pick a sheet:</h2>
        <Sheet sheet={this.state.sheets} />
      </div>
    );
  }
}

export default SheetList;