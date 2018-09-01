import React, { Component } from 'react';

import Set from './Set';

import './Workout.css';

class Workout extends Component {
  render() {
    return (
      <div className="Workout-workout">
        {this.props.hierarchicalWorkout.map(group => 
          <div className="Workout-day" id={group.day}>
            <div className="Workout-displayName">{group.displayName}</div>
            <div className="Workout-superSets">
              <Set hierarchicalExercises={group.superSets} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Workout;
