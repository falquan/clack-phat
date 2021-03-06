import React, { Component } from 'react';

import Block from './Block';

class BlockGroup extends Component {
  constructor(props) {
    super(props);
    
    this.blockChange = this.blockChange.bind(this);
  }

  render() {
    return (
      <div className="BlockGroup-blockGroup">
        <Block
          blocks={this.props.blocks}
          onBlockChange={this.blockChange} />
      </div>
    );
  }

  blockChange(e) {
    this.props.onBlockChange(e);
  }
}

export default BlockGroup;