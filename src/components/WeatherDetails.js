import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';

class OtherDays extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {weather} = this.props;
    return (
      <div className="weather-details">
        <div className="sunrise">
          {weather && !weather.sys.pod? 'Sunrise: ' + moment.unix(weather.sys.sunrise).format('hh:mm A'): ''}
        </div>
        <div className="sunset">
          {weather && !weather.sys.pod? 'Sunset: ' + moment.unix(weather.sys.sunset).format('hh:mm A'): ''}
        </div>
        <div className="humidity">
          {weather? 'Humidity: ' + weather.main.humidity+'%': ''} 
        </div>
        <div className="weather-type">
          {weather? 'Weather: ' + weather.weather[0].main: ''} 
        </div>
        <div className="wind">
          <span>{weather.wind? 'Wind: ' + Math.floor(weather.wind.deg): ''}</span>
          <span style={{ transform: weather.wind? "rotate(" + weather.wind.speed + "deg" + ")": ""}}>→</span>
        </div>
      </div>
    );
  }
}

export default OtherDays;
