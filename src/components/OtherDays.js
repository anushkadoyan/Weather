import React, { Component } from 'react';
import Day from './Day'
import '../App.css';

class OtherDays extends Component {
  constructor(props) {
    super(props);
    this.state = {forecast:''};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.loadDays(nextProps);
    }
  }
  
  loadDays(casts) {
    let list = casts.forecast.list;
    let otherDays = [];
    if(list!=undefined) {
      for (var i = 8; i < list.length; i += 8) {
        let day = list.slice(i, i+8);
        otherDays.push(day);
      }
    this.setState({forecast:otherDays});
    }
  }

  render() {
    return (
      <div className="other-days flex flex-column flex-1">
       {this.state.forecast ? 
          this.state.forecast.map( (item, i) => {
              return <Day key={i} days={item} />
          }) 
          : ''
        }
      </div>
    );
  }
}

export default OtherDays;
