import React, { Component } from 'react';
import '../App.css';

class FirstTime extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {search:""};
  }

  handleChange(value) {
    this.props.onSearchChange(value)
  }

  render() {
    return (
      <div className="first-time">
        <h1>Welcome! Enter a zip code to get started, or select a city from below</h1>
        <button onClick={event=>this.handleChange(99502)}>Anchorage</button>
        <button onClick={event=>this.handleChange(33101)}>Miami</button>
        <button onClick={event=>this.handleChange(90045)}>Los Angeles</button>
      </div>
    );
  }
}

export default FirstTime;

