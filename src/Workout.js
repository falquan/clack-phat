import React, { Component } from 'react';

import ExerciseGroup from './ExerciseGroup';

import './Workout.css';

class Workout extends Component {
  render() {
    return (
      <div className="Workout-workout">
        {this.props.hierarchicalWorkout.map(group => 
          <div className="Workout-day">
            <div className="Workout-displayName">{group.displayName}</div>
            <div className="Workout-superSets">
              <ExerciseGroup hierarchicalExercises={group.superSets} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Workout;
