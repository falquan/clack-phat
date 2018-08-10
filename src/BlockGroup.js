import React, { Component } from 'react';
import Block from './Block';

class BlockGroup extends Component {
  state = { sheet: { sheets: [] } }

  componentDidMount()
  {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/?key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0')
      .then(response => response.json())
      .then(json => this.setState({ sheet: json }))
      .catch(error => console.error("Something horrible happened...", error));
  }

  render() {
    return (
      <div>
        <h2>Choose a block:</h2>
        <Block blocks={this.state.sheet.sheets} />
      </div>
    );
  }
}

export default BlockGroup;