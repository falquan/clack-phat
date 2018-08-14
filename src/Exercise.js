import React, { Component } from 'react';

class Exercise extends Component {

  render() {
    return (
      <pre>{this.props.exercise}</pre>
    );
  }
}

export default Exercise;
