import React, { Component } from 'react';

import ExerciseGroup from './ExerciseGroup';

import './Workout.css';

class Workout extends Component {
  render() {
    console.log(this.props.hierarchicalWorkout);
    
    return (
      <div>
        {/* {this.props.workouts.map(group => */}
          {this.props.hierarchicalWorkout.map(group =>
          <div className="Workout-day">
            {/* <ExerciseGroup exercises={group} /> */}
          </div>
        )}
      </div>
    );
  }
}

export default Workout;
