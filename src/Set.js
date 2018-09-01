import React, { Component } from 'react';

import Exercise from './Exercise';

import './Set.css'

class Set extends Component {
  render() {
    return (
      <div className="Set-Set">
        {this.props.hierarchicalExercises.map(sets => 
          <div className="Set-set">
            <div className="Set-setNumber">{sets.number}</div>
            <div className="Set-exercises">
              <Exercise exercise={sets.set} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Set;
