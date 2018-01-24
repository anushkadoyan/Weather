import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';

class Day extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {days} = this.props;
    var min = 1000;
    var max = 0;
    for(let day of days) {
      min = Math.floor(Math.min(min,day.main.temp));
      max = Math.floor(Math.max(max,day.main.temp));
    }
    console.log(days)
    return (
      <div className="day flex-1">
        <div className="flex flex-between">
          <div>{moment(days[0].dt_txt).format("dddd")}</div>
          <div>{min+'° - '+max+'°'}</div>
        </div>
        <img src={'http://openweathermap.org/img/w/'+days[Math.floor(days.length/2)].weather[0].icon+'.png'}/>
      </div>
    );
  }
}

export default Day;

