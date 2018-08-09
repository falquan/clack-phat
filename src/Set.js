import React, { Component } from 'react';

class Set extends Component {
  render() {
    return (
      <table>
        {this.props.sets.map(anSet => 
          <tr>
            {anSet.map(exercise =>
              <td className="left"><pre>{exercise}</pre></td>
            )}
          </tr>
        )}
      </table>
    );
  }
}

export default Set;
