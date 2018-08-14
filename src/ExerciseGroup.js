import React, { Component } from 'react';

import Exercise from './Exercise';

//import './ExerciseGroup.css'

class ExerciseGroup extends Component {
  render() {
    return (
        this.props.exercises.map(exercise => 
          <div>{<Exercise exercise={exercise} />}</div>
        )
    );
  }
}

export default ExerciseGroup;
