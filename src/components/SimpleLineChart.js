import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: 'Page A', pv: 2400, amt: 2400},
      {name: 'Page B', pv: 1398, amt: 2210},
      {name: 'Page C', pv: 9800, amt: 2290},
      {name: 'Page D', pv: 3908, amt: 2000},
      {name: 'Page E', pv: 4800, amt: 2181},
      {name: 'Page F', pv: 3800, amt: 2500},
      {name: 'Page G', pv: 4300, amt: 2100},
      {name: 'Page G', pv: 4300, amt: 2100}
];
class CustomizedLabel extends Component {
  render () {
    const {x, y, stroke, value} = this.props;
   	return <text x={x} y={y} dy={-10} fill={stroke} fontSize={20} fontWeight={'bold'} textAnchor="middle">{value+'°'}</text>
  }
}
class CustomizedAxisTick extends Component {
  render () {
    const {x, y, stroke, payload} = this.props;
   	return (
    	<g transform={`translate(${x},${y})`}>
        <text strokeWidth={5} x={0} y={0} dy={16} textAnchor="end" fill="white" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}
class SimpleLineChart extends Component {
	render () {
    const {list} = this.props;
  	return (
    	<LineChart padding={10} width={600} height={300} data={list}
            margin={{top: 20, right: 30, left: 20, bottom: 10}}>
       <XAxis dataKey="time" height={60} tick={<CustomizedAxisTick/>}/>
       {/* <Tooltip/> */}
       <Line strokeWidth={5} type="monotone" dataKey="temp" stroke="#8884d8" label={<CustomizedLabel stroke={'white'} />}/>
      </LineChart>
    );
  }
}

export default SimpleLineChart;