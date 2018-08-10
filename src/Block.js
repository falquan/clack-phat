import React, { Component } from 'react';

class Block extends Component {
  render() {
    return (
      this.props.blocks.map(block => 
        <div>
          <a href={block.properties.sheetId}>{block.properties.title}</a>
        </div>
      ));
  }
}

export default Block;