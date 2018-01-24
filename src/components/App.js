import React, { Component } from 'react';
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
      weatherForecast:''
    };
  }

  handleSearchChange(search) {

    let weatherNow = "http://api.openweathermap.org/data/2.5/weather?zip="+search+",us&appid=f78d4401108f0b44150be20d3e4e7146&units=imperial";
    let weatherForecast = "http://api.openweathermap.org/data/2.5/forecast?zip="+search+",us&appid=f78d4401108f0b44150be20d3e4e7146&units=imperial";
   
    axios.get(weatherNow)
      .then(response => this.setState({weatherNow:response.data}))
      .catch(error => console.log(error));
    axios.get(weatherForecast)
      .then(response =>this.setState({weatherForecast:response.data}))
      .catch(error => console.log(error));

  }

  render() {
    if(this.state.weatherNow.weather!=undefined) {
      console.log(this.state.weatherNow.weather[0]);
      var background = require('../../public/'+this.state.weatherNow.weather[0].main.toLowerCase() + '-night.gif');
    } 
    return (
      <div className="App">
        <Header onSearchChange={this.handleSearchChange}/>
        <div className = "flex main-container" style={{backgroundImage: "url(" + background + ")"}}>
          <Today weatherNow={this.state.weatherNow} forecast={this.state.weatherForecast}/>
          <OtherDays forecast={this.state.weatherForecast}/>
        </div>
      </div>
    );
  }
}

export default App;


