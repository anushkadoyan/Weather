import React, { Component } from 'react';
import {LineChart, Line, XAxis } from 'recharts';

class CustomizedLabel extends Component {
  render () {
    const {x, y, stroke, value} = this.props;
   	return <text x={x} y={y} dy={-10} fill={stroke} fontSize={20} fontWeight={'bold'} textAnchor="middle">{value+'°'}</text>
  }
}
class CustomizedAxisTick extends Component {
  render () {
    const {x, y, payload} = this.props;
   	return (
    	<g transform={`translate(${x},${y})`}>
        <text strokeWidth={5} x={0} y={0} dy={16} textAnchor="end" fill="white" transform="rotate(0)">{payload.value}</text>
      </g>
    );
  }
}
class SimpleLineChart extends Component {
	render () {
    const {list} = this.props;
  	return (
    	<LineChart width={600} height={300} data={list}
            margin={{top: 20, right: 30, left: 20, bottom: 10}}>
       <XAxis dataKey="time" height={60} tick={<CustomizedAxisTick/>}/>
       <Line strokeWidth={5} type="monotone" dataKey="temp" stroke="#8884d8" label={<CustomizedLabel stroke={'white'} />}/>
      </LineChart>
    );
  }
}

export default SimpleLineChart;