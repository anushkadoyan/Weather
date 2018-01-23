import React, { Component } from 'react';
import Day from './Day'
import '../App.css';

class OtherDays extends Component {
  render() {
    return (
      <div className="other-days flex flex-column flex-1">
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    );
  }
}

export default OtherDays;
