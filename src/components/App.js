import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';
import Header from './Header';
import Today from './Today';
import OtherDays from './OtherDays';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state= {
      weatherNow:'',
      hourlyWeatherToday:'',
      hourlyWeatherOtherDays:''
    };
  }

  handleSearchChange(search) {

    let weatherNow = "http://api.openweathermap.org/data/2.5/weather?zip="+search+",us&appid=f78d4401108f0b44150be20d3e4e7146&units=imperial";
    let weatherForecast = "http://api.openweathermap.org/data/2.5/forecast?zip="+search+",us&appid=f78d4401108f0b44150be20d3e4e7146&units=imperial";
   
    axios.get(weatherNow)
      .then(response => this.setState({weatherNow:response.data}))
      .catch(error => console.log(error));
    axios.get(weatherForecast)
      .then(response => {
       let hourlyList = response.data.list;
       hourlyList = hourlyList.filter(item=> {
        return moment(item.dt_txt).isSame(moment(), 'day');
       });
        this.setState({hourlyWeatherToday:hourlyList})
      })
      .catch(error => console.log(error));

  }

  render() {
    if(this.state.weatherNow.weather!=undefined) {
      // console.log(this.state.weatherNow.weather[0]);
      var background = require('../../public/'+this.state.weatherNow.weather[0].main.toLowerCase() + '-day.gif');
    } 
    return (
      <div className="App">
        <Header onSearchChange={this.handleSearchChange}/>
        <div className = "flex main-container" style={{backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url(" + background + ")"}}>
          <Today weatherNow={this.state.weatherNow} forecast={this.state.hourlyWeatherToday}/>
          <OtherDays forecast={this.state.hourlyWeatherOtherDays}/>
        </div>
      </div>
    );
  }
}

export default App;


