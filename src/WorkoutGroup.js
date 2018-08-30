import React, { Component } from 'react';

import Workout from './Workout';

import './WorkoutGroup.css';

class WorkoutGroup extends Component {
  render() {
    console.log(this.props.hierarchicalWorkout);

    return (
      <div className="WorkoutGroup-workoutGroup">
        <div className="WorkoutGroup-workouts">
          <Workout
            hierarchicalWorkout={this.props.hierarchicalWorkout} />
        </div>
        <div className="WorkoutGroup-displayName">{this.props.selectedBlock}</div>
      </div>
      );
  }
}

export default WorkoutGroup;