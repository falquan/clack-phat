import React, { Component } from 'react';

import Workout from './Workout';

import './WorkoutGroup.css';

class WorkoutGroup extends Component {
  render() {
    console.log(this.props.hierarchicalWorkout);

    return (
<<<<<<< HEAD
      <div className="WorkoutGroup-workoutGroup">
        <div className="WorkoutGroup-workouts">
          <Workout
            hierarchicalWorkout={this.props.hierarchicalWorkout} />
        </div>
        <div className="WorkoutGroup-displayName">{this.props.selectedBlock}</div>
=======
      <div className="WorkoutGroup-workouts">
        <h3>{this.props.selectedSheet}</h3>
        {/* <Workout
          workouts={this.props.workoutGroups.values}
          selectedSheet={this.props.selectedSheet}
          hierarchicalWorkout={this.props.hierarchicalWorkout} /> */}
>>>>>>> 0c393b28deb34cb694eb8539de8d1acccdb83189
      </div>
      );
  }
}

export default WorkoutGroup;