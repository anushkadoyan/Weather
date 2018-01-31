# Weather Website

Responsive Weather website using React.

Check it out at https://my-weather-web.herokuapp.com/




### To Run
In the root folder, run these commands:
```sh
$ npm install

$ npm start
```


### Code Samples

Converting an array into chunks of arrays

```

 hourlyList.forEach(time=> {
  if(currentDay.isSame( moment.unix(time.dt), 'day')) {
    day.push(time);
  } else {
      dayChunks.push(day);
      currentDay = currentDay.add(1, 'days');
      day=[time];
    }
 });
```

### Screenshots

<img src="https://github.com/anushkadoyan/Weather/blob/master/src/images/screenshots/welcome-screen.png" width="800">
<img src="https://github.com/anushkadoyan/Weather/blob/master/src/images/screenshots/full-screen.png" width="800">
<img src="https://github.com/anushkadoyan/Weather/blob/master/src/images/screenshots/different-background.png" width="800">
<img src="https://github.com/anushkadoyan/Weather/blob/master/src/images/screenshots/mobile.png" width="800">




