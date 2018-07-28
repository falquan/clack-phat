import React, { Component } from 'react';

class WorkoutBlock extends Component {
  render() {
    return (
      this.props.blocks.map(block => 
        <div>
          <a href={block.properties.sheetId}>{block.properties.title}</a>
        </div>
      ));
  }
}

export default WorkoutBlock;