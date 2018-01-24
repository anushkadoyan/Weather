import React, { Component } from 'react';
import '../App.css';

class Today extends Component {
  constructor(props) {
    super(props);
   this.state = {background:''}
  }

  componentDidUpdate() {
    const {weatherNow, forecast} = this.props;
   

    // weatherNow.weather[0].
  }

  render() {
    const {weatherNow, forecast} = this.props;
    if(weatherNow.weather!=undefined) {
      var background = require('../../public/'+weatherNow.weather[0].main.toLowerCase() + '-night.gif');
    } 
    console.log(weatherNow)
    
    return (
      <div className="today flex-4">
        <div class="temp">
          {weatherNow.main? Math.floor(weatherNow.main.temp)+'°': ''}
        </div>
        <br/>
        {weatherNow.weather? weatherNow.weather[0].main: ''}
        
        {/* {weatherNow.main? weatherNow.main.temp_min: ''}
        {weatherNow.main? weatherNow.main.temp_max: ''}
        {weatherNow.main? weatherNow.main.pressure: ''}
        {weatherNow.main? weatherNow.main.humidity: ''} */}
        
      </div>
    );
  }
}

export default Today;
