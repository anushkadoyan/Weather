import React, { Component } from 'react';
import '../App.css';

class Day extends Component {
  constructor(props) {
    super(props);
  }


  
  render() {
    const {days} = this.props;
    return (
      <div className="day flex-1">
        {days[0].main.temp}
      </div>
    );
  }
}

export default Day;

