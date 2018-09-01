import React, { Component } from 'react';

import Exercise from './Exercise';

import './ExerciseGroup.css'

class ExerciseGroup extends Component {
  render() {
    return (
      <div className="ExerciseGroup-exerciseGroup">
        {this.props.hierarchicalExercises.map(exercise => 
          <div className="ExerciseGroup-set">
            <div className="ExerciseGroup-setNumber">{exercise.number}</div>
            <div className="ExerciseGroup-exercises">
              <Exercise exercise={exercise.set} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ExerciseGroup;
