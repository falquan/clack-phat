import React, { Component } from 'react';

import './Exercise.css';

class Exercise extends Component {
  render() {
    return (
      <ul className="Exercise-exercises">
        {this.props.exercise.map(exercise => 
          <li className="Exercise-exercise">{exercise}</li>
        )}
      </ul>
    );
  }
}

export default Exercise;
