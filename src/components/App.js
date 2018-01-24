import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';
import Header from './Header';
import Today from './Today';
import OtherDays from './OtherDays';
import FirstTime from './FirstTime';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state= {
      firstTime:true,
      weatherNow:'',
      hourlyWeatherToday:'',
      hourlyWeatherOtherDays:''
    };
  }

  handleSearchChange(search) {
    this.setState({firstTime:false});
    let weatherNow = "http://api.openweathermap.org/data/2.5/weather?zip="+search+",us&appid=f78d4401108f0b44150be20d3e4e7146&units=imperial";
    let weatherForecast = "http://api.openweathermap.org/data/2.5/forecast?zip="+search+",us&appid=f78d4401108f0b44150be20d3e4e7146&units=imperial";
   
    // call the api for the weather NOW and the feather for 5 days
    axios.get(weatherNow)
      .then(response => {
        this.setState({weatherNow:response.data})
      })
      .catch(error => console.log(error));
    axios.get(weatherForecast)
      .then(response => {
       let hourlyList = response.data.list;
       var currentDay = moment();
       var dayChunks = [];
       var day=[];

       // convert an array of 3 hour windows into an array of days
       hourlyList.forEach(time=> {
        if(currentDay.isSame( moment.unix(time.dt), 'day')) {
          day.push(time);
        } else {
            dayChunks.push(day);
            currentDay = currentDay.add(1, 'days');
            day=[time];
          }
       });

       // set the state to the days we created
       this.setState({
         hourlyWeatherToday: dayChunks[0],
         hourlyWeatherOtherDays:  dayChunks.slice(1, dayChunks.length)
        })
      })
      .catch(error => console.log(error));
  }

  render() {

    // api icon reveals what time of day it is by using 'n' or 'd' (night/day)
    // use that to display night/day gif background
    
    if(this.state.weatherNow.weather!==undefined) {
      let icon = this.state.weatherNow.weather[0].icon;
      let nightOrDay = icon[icon.length-1];

      // TODO: pick a random file based on a random number from 0-2.
      // for now, pick first one
      // var random = Math.floor(Math.random() * 3);
      
      let backgroundTime = nightOrDay==='n'? '-night0.gif':'-day0.gif';
      try {
        let weatherName = this.state.weatherNow.weather[0].main.toLowerCase();
        if(weatherName=='haze') weatherName='fog';
        var background = require('../images/'+weatherName + backgroundTime);
      } catch(error) {
        var background = require('../images/first-time.gif');
        console.log(error)
      }
    } 
    var firstTimeBackround = require('../images/first-time.gif');
    return (
      <div className="App" style={{backgroundImage: this.state.firstTime? "url("+firstTimeBackround+")" : ""}}>
        <Header onSearchChange={this.handleSearchChange}/>
        {this.state.firstTime?<FirstTime onSearchChange={this.handleSearchChange}/>: 
        <div className = "flex main-container" style={{backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url(" + background + ")"}}>
          <Today weatherNow={this.state.weatherNow} forecast={this.state.hourlyWeatherToday}/>
          <OtherDays forecast={this.state.hourlyWeatherOtherDays}/>
        </div>
        }
      </div>
    );
  }
}

export default App;


