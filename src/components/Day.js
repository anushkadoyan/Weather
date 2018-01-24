import React, {Component} from 'react';
import WeatherDetails from './WeatherDetails'
import moment from 'moment';
import '../App.css';

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {days} = this.props;

    // don't have day averages so take min and max of all the 3 hour windows
    var min = 1000;
    var max = 0;
    for (let day of days) {
      min = Math.floor(Math.min(min, day.main.temp));
      max = Math.floor(Math.max(max, day.main.temp));
    }
    var averageDay = days[Math.floor(days.length / 2)];
    return (
      <div className="day flex-1">
        <div className="flex flex-between day-header">
          <div className="day-of-week">{moment
              .unix(days[0].dt)
              .format("dddd")}</div>
          <div>{min + '° - ' + max + '°'}</div>
        </div>
        <div className="flex flex-between">
          <WeatherDetails weather={averageDay}/>
          <img
            className="weather-icon"
            src={'http://openweathermap.org/img/w/' + averageDay.weather[0].icon + '.png'}/>
        </div>
      </div>
    );
  }
}

export default Day;
