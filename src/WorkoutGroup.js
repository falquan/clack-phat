import React, { Component } from 'react';

import Workout from './Workout';

import './WorkoutGroup.css';

class WorkoutGroup extends Component {
  render() {
    console.log(this.props.hierarchicalWorkout);

    return (
      <div className="WorkoutGroup-workouts">
        <h3>{this.props.selectedSheet}</h3>
        {/* <Workout
          workouts={this.props.workoutGroups.values}
          selectedSheet={this.props.selectedSheet}
          hierarchicalWorkout={this.props.hierarchicalWorkout} /> */}
      </div>
    );
  }
}

export default WorkoutGroup;