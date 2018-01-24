import React, { Component } from 'react';
import SimpleLineChart from './SimpleLineChart';
import moment from 'moment';
import '../App.css';

class Today extends Component {
  constructor(props) {
    super(props);
   this.state = {background:''}
  }

  render() {
    const {weatherNow, forecast} = this.props;
    if(weatherNow.weather!=undefined) {
      var background = require('../../public/'+weatherNow.weather[0].main.toLowerCase() + '-day.gif');
    } 
    if(forecast) {
      console.log("today forecast", forecast)
      var graphList = forecast.map(day=> {
        return {time:moment(day.dt_txt).format('hh:mm A'), temp: Math.floor(day.main.temp)}
      })
      console.log(graphList)
    }
    
    
    return (
      <div className="today flex-4">
        <div className="temp">
          {weatherNow.main? Math.floor(weatherNow.main.temp)+'°': ''}
        </div>
        <br/>
        {weatherNow.weather? weatherNow.weather[0].main: ''}
        {/* <div className="city-name">
          {weatherNow? weatherNow.name: ''}
        </div> */}
        <div className="graph">
          {weatherNow.main? <SimpleLineChart list={graphList}/>: ''}
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
