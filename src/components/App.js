import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Today from './Today';
import OtherDays from './OtherDays';

class App extends Component {
  handleSearchChange(search) {
    console.log(search);
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


// f78d4401108f0b44150be20d3e4e7146
