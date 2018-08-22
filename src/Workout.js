import React, { Component } from 'react';

import ExerciseGroup from './ExerciseGroup';

import './Workout.css';

class Workout extends Component {
  render() {
    console.log(this.props.test);
    
    return (
      <div>
        {this.props.workouts.map(group =>
          <div className="Workout-day">
            <ExerciseGroup exercises={group} />
          </div>
        )}
      </div>
    );
  }
}

export default Workout;
