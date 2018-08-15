import React, { Component } from 'react';

import Block from './Block';

class BlockGroup extends Component {
  constructor(props) {
    super(props);
    this.blockChange = this.blockChange.bind(this);
  }

  render() {
    return (
      <nav>
        <Block
          blocks={this.props.blocks}
          onBlockChange={this.blockChange} />
      </nav>
    );
  }

  blockChange(e) {
    this.props.onBlockChange(e);
  }
}

export default BlockGroup;