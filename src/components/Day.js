import React, { Component } from 'react';
import '../App.css';

class Day extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {days} = this.props;
    console.log(days)
    return (
      <div className="day flex-1">
        {Math.floor(days[0].main.temp)+'°'}
      </div>
    );
  }
}

export default Day;

