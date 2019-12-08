import React, { Component } from 'react';

import './DayNavigation.css';

class DayNavigation extends Component {
  constructor(props) {
    super(props);
    
    this.click = this.click.bind(this);
  }

  render() {
    return (
      <nav>
        <div className="DayNavigation-days">
            {this.props.hierarchicalWorkout.map(workout => 
              <a key={workout.day} className='DayNavigation-day'
                onClick={(e) => this.click(workout.day, e)}>
                {workout.displayName}
              </a>
            )}
            <a href="#block">...</a>
        </div>
      </nav>
    );
  }

  click(e) {
    document.getElementById(e).scrollIntoView();
  }
}

export default DayNavigation;