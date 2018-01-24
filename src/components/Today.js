import React, { Component } from 'react';
import moment from 'moment';
import SimpleLineChart from './SimpleLineChart';
import WeatherDetails from './WeatherDetails'
import '../App.css';

class Today extends Component {
  constructor(props) {
    super(props);
   this.state = {background:''}
  }

  render() {
    const {weatherNow, forecast} = this.props;

    if(forecast) {
      var graphList = forecast.map(day=> {
        return {time:moment.unix(day.dt).format('hh:mm A'), temp: Math.floor(day.main.temp)}
      })
    }
    var sunrise = require('../images/sunrise.png');
    var sunset = require('../images/sunset.png');
    
    
    
    return (
      <div className="today flex-4">
        <div className="temp-and-date flex flex-between">
          <div className="temp">
            {weatherNow.main? Math.floor(weatherNow.main.temp)+'°': ''}
          </div>
          <div className="date">
            {moment().format('ll')}
          </div>
        </div>          
        <br/>
        <WeatherDetails weather={weatherNow}/>
        <div className="bottom-container flex flex-between">
          <div className="graph">
            {weatherNow.main? <SimpleLineChart list={graphList}/>: ''}
          </div>
          <div className="city-name">
            {weatherNow? weatherNow.name: ''}
          </div>
        </div>
        {/* {weatherNow.main? weatherNow.main.temp_min: ''}
        {weatherNow.main? weatherNow.main.temp_max: ''}
        {weatherNow.main? weatherNow.main.pressure: ''}
        {weatherNow.main? weatherNow.main.humidity: ''} */}
        
      </div>
    );
  }
}

export default Today;
