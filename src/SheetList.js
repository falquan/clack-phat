import React, { Component } from 'react';
import Sheet from './Sheet';

class SheetList extends Component {
  state = { }

  render() {
    return (
      <div>
        <h2>Pick a sheet:</h2>
        <Sheet sheet={this.props.children} />
      </div>
    );
  }
}

export default SheetList;