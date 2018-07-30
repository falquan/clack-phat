import React, { Component } from 'react';

class Set extends Component {
  render() {
    return (
      <table>
        <th>header</th>
        <tr>
        {this.props.sets.map(anSet => 
          <td>{anSet}</td>
        )}
        </tr>
      </table>
    );
  }
}

export default Set;
