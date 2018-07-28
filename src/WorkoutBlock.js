import React, { Component } from 'react';

class WorkoutBlock extends Component {
  render() {
    return (
      this.props.blocks.map(s => 
        <div>{s.properties.title}</div>
      ));
  }
}

export default WorkoutBlock;