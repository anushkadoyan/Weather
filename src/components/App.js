import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Today from './Today';
import OtherDays from './OtherDays';
import axios from 'axios';

class App extends Component {
  handleSearchChange(search) {

    let theWeatherNow = "http://api.openweathermap.org/data/2.5/weather?zip="+search+",us&appid=f78d4401108f0b44150be20d3e4e7146&units=imperial";

    axios.get(theWeatherNow)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header onSearchChange={this.handleSearchChange}/>
        <div className = "flex main-container">
          <Today />
          <OtherDays />
        </div>
      </div>
    );
  }
}

export default App;


