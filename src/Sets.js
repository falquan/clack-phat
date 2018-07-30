import React, { Component } from 'react';
import Set from './Set';

class Sets extends Component {
  state = 
  { sets: { values: [] } }

  componentDidMount()
  {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/values/A1:P12?key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0')
      .then(response => response.json())
      .then(json => this.setState({ sets: json }))
      .catch(error => console.error("Something horrible happened...", error));
  }

  render() {
    return (
      <div>
        <h2>Dat Workout Doe:</h2>
        <Set sets={this.state.sets.values} />
      </div>
    );
  }
}

export default Sets;