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

    if(forecast) {
      var graphList = forecast.map(day=> {
        return {time:moment.unix(day.dt).format('hh:mm A'), temp: Math.floor(day.main.temp)}
      })
    }
    
    
    return (
      <div className="today flex-4">
        <div className="temp">
          {weatherNow.main? Math.floor(weatherNow.main.temp)+'°': ''}
        </div>
        <br/>
        {weatherNow.weather? weatherNow.weather[0].main: ''}
       
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
