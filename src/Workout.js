import React, { Component } from 'react';

import ExerciseGroup from './ExerciseGroup';

import './Workout.css';

class Workout extends Component {
  render() {
<<<<<<< HEAD
    return (
      <div className="Workout-workout">
        {this.props.hierarchicalWorkout.map(group => 
          <div className="Workout-day">
            <div className="Workout-displayName">{group.displayName}</div>
            <div className="Workout-superSets">
              <ExerciseGroup hierarchicalExercises={group.superSets} />
            </div>
=======
    console.log(this.props.hierarchicalWorkout);
    
    return (
      <div>
        {/* {this.props.workouts.map(group => */}
          {this.props.hierarchicalWorkout.map(group =>
          <div className="Workout-day">
            {/* <ExerciseGroup exercises={group} /> */}
>>>>>>> 0c393b28deb34cb694eb8539de8d1acccdb83189
          </div>
        )}
      </div>
    );
  }
}

export default Workout;
