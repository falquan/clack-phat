import React, { Component } from 'react';

import './Block.css';

class Block extends Component {
  constructor(props) {
    super(props);
    
    this.click = this.click.bind(this);
  }

  state = { selected: {} }

  render() {
    return (
      <div className="Block-block">
        {this.props.blocks.map(block => 
          <a key={block.properties.sheetId} className='Block-block'
            onClick={(e) => this.click(block.properties.title, e)}>
              {block.properties.title}
          </a>
        )}
      </div>
    );
  }

  click(e) {
    this.props.onBlockChange(e);
  }
}

export default Block;