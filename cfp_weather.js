// Visual Crossing Weather API by Visual Crossing Corporation
{var options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '7a9319052bmsh056ce59b146e466p19149ejsn7b3a7d726cd6',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
  	}
};
Promise.all([
  // // Ohio State v. Alamaba 42-35
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-01-01T00%3A00%3A00&aggregateHours=24&location=New%20Orleans%2CLA%2CUSA&endDateTime=2015-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=21%3A00%3A00&contentType=json&dayEndTime=23%3A59%3A00&shortColumnNames=0",
  //   options
  // ),
  // //Oregon v. Florida State 59-20
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-01-01T00%3A00%3A00&aggregateHours=24&location=Pasadena%2CCA%2CUSA&endDateTime=2015-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=14%3A00%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // //Ohio State v. Oregon 42-20
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-01-12T00%3A00%3A00&aggregateHours=24&location=Arlington%2CTX%2CUSA&endDateTime=2015-01-12T00%3A00%3A00&unitGroup=us&dayStartTime=18%3A30%3A00&contentType=json&dayEndTime=21%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Alabama v. Michigan 38-0
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-12-31T00%3A00%3A00&aggregateHours=24&location=Arlington%2CTX%2CUSA&endDateTime=2015-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=19%3A20%3A00&contentType=json&dayEndTime=21%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Clemson v. Oklahoma 37-17
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-12-31T00%3A00%3A00&aggregateHours=24&location=Miami%20Gardens%2CFL%2CUSA&endDateTime=2015-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=16%3A00%3A00&contentType=json&dayEndTime=19%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Alabama v. Clemson 45-40
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2016-01-11T00%3A00%3A00&aggregateHours=24&location=Glendale%2CAZ%2CUSA&endDateTime=2016-01-11T00%3A00%3A00&unitGroup=us&dayStartTime=18%3A30%3A00&contentType=json&dayEndTime=21%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Alabama v. Washington 24-7
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2016-12-31T00%3A00%3A00&aggregateHours=24&location=Atlanta&endDateTime=2016-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=14%3A00%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Clemson v. Ohio State 24-7
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2016-12-31T00%3A00%3A00&aggregateHours=24&location=Glendale&endDateTime=2016-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=18%3A00%3A00&contentType=json&dayEndTime=21%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Clemson v. Alabama 35-31
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2017-01-09T00%3A00%3A00&aggregateHours=24&location=Tampa&endDateTime=2017-01-09T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Alabama v. Clemson 24-6
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-01-01T00%3A00%3A00&aggregateHours=24&location=New%20Orleans%2CLA%2CUSA&endDateTime=2018-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Georgia v. Oklahoma 54-48
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-01-01T00%3A00%3A00&aggregateHours=24&location=Pasadena%2CCA%2CUSA&endDateTime=2018-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=14%3A00%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Alabama v. Georgia 26-23
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-01-08T00%3A00%3A00&aggregateHours=24&location=Atlanta&endDateTime=2018-01-08T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Alabama v. Oklahoma 45-34
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-12-29T00%3A00%3A00&aggregateHours=24&location=Miami%20Gardens&endDateTime=2018-12-29T00%3A00%3A00&unitGroup=us&dayStartTime=19%3A00%3A00&contentType=json&dayEndTime=22%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Clemson v. Notre Dame 30-3
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-12-29T00%3A00%3A00&aggregateHours=24&location=Arlington&endDateTime=2018-12-29T00%3A00%3A00&unitGroup=us&dayStartTime=15%3A00%3A00&contentType=json&dayEndTime=18%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Clemson v. Alabama 44-16
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-01-07T00%3A00%3A00&aggregateHours=24&location=Santa%20Clara&endDateTime=2019-01-07T00%3A00%3A00&unitGroup=us&dayStartTime=17%3A00%3A00&contentType=json&dayEndTime=20%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // Clemson v. Ohio State 29-23
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-12-28T00%3A00%3A00&aggregateHours=24&location=Glendale%2CAZ%2CUSA&endDateTime=2019-12-28T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // LSU v. Oklahoma 63-28
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-12-28T00%3A00%3A00&aggregateHours=24&location=Atlanta&endDateTime=2019-12-28T00%3A00%3A00&unitGroup=us&dayStartTime=16%3A00%3A00&contentType=json&dayEndTime=19%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // // LSU v. Clemson 42-25
  // fetch(
  //   "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2020-01-13T00%3A00%3A00&aggregateHours=24&location=New%20Orleans%2CLA%2CUSA&endDateTime=2020-01-13T00%3A00%3A00&unitGroup=us&dayStartTime=19%3A00%3A00&contentType=json&dayEndTime=22%3A00%3A00&shortColumnNames=0",
  //   options
  // ),
  // Alabama v. Notre Dame 31-14
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2021-01-01T00%3A00%3A00&aggregateHours=24&location=Arlington&endDateTime=2021-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=15%3A00%3A00&contentType=json&dayEndTime=18%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Ohio State v. Clemson 49-28
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2021-01-01T00%3A00%3A00&aggregateHours=24&location=New%20Orleans%2CLA%2CUSA&endDateTime=2021-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=19%3A00%3A00&contentType=json&dayEndTime=22%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Alabama v. Ohio State 52-24
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2021-01-11T00%3A00%3A00&aggregateHours=24&location=Miami%20Gardens&endDateTime=2021-01-11T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Alabama v. Cincinnati 27-6
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2021-12-31T00%3A00%3A00&aggregateHours=24&location=Arlington&endDateTime=2021-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=14%3A30%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Georgia v. Michigan 34-11
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2021-12-31T00%3A00%3A00&aggregateHours=24&location=Miami%20Gardens&endDateTime=2021-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=19%3A30%3A00&contentType=json&dayEndTime=22%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Georgia v. Alabama 33-18
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2022-01-10T00%3A00%3A00&aggregateHours=24&location=Indianapolis&endDateTime=2022-01-10T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A16%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Georgia v. Ohio State 42-41
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2022-12-31T00%3A00%3A00&aggregateHours=24&location=Atlanta&endDateTime=2022-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
    options
  ),
  // TCU v. Michigan 51-45
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2022-12-31T00%3A00%3A00&aggregateHours=24&location=Glendale&endDateTime=2022-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=14%3A00%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Georgia v. TCU 65-7
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2023-01-09T00%3A00%3A00&aggregateHours=24&location=Inglewood&endDateTime=2023-01-09T00%3A00%3A00&unitGroup=us&dayStartTime=16%3A45%3A00&contentType=json&dayEndTime=20%3A00%3A00&shortColumnNames=0",
    options
  )
  ])
  .then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function (data) {
    // Log the data to the console
    // You would do something with both sets of data here
    console.log(data);
  }).catch(function (error) {
    // if there's an error, log it
    console.log(error);
  });}

  {var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '77c48e5c8cmsh827d223c79a5e3dp17def1jsn595dc0c7d05e',
      'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'      }
  };
  Promise.all([
      // Alabama v. Clemson 24-6
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-01-01T00%3A00%3A00&aggregateHours=24&location=New%20Orleans%2CLA%2CUSA&endDateTime=2018-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Georgia v. Oklahoma 54-48
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-01-01T00%3A00%3A00&aggregateHours=24&location=Pasadena%2CCA%2CUSA&endDateTime=2018-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=14%3A00%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Alabama v. Georgia 26-23
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-01-08T00%3A00%3A00&aggregateHours=24&location=Atlanta&endDateTime=2018-01-08T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Alabama v. Oklahoma 45-34
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-12-29T00%3A00%3A00&aggregateHours=24&location=Miami%20Gardens&endDateTime=2018-12-29T00%3A00%3A00&unitGroup=us&dayStartTime=19%3A00%3A00&contentType=json&dayEndTime=22%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Clemson v. Notre Dame 30-3
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2018-12-29T00%3A00%3A00&aggregateHours=24&location=Arlington&endDateTime=2018-12-29T00%3A00%3A00&unitGroup=us&dayStartTime=15%3A00%3A00&contentType=json&dayEndTime=18%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Clemson v. Alabama 44-16
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-01-07T00%3A00%3A00&aggregateHours=24&location=Santa%20Clara&endDateTime=2019-01-07T00%3A00%3A00&unitGroup=us&dayStartTime=17%3A00%3A00&contentType=json&dayEndTime=20%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Clemson v. Ohio State 29-23
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-12-28T00%3A00%3A00&aggregateHours=24&location=Glendale%2CAZ%2CUSA&endDateTime=2019-12-28T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
    options
  ),
  // LSU v. Oklahoma 63-28
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-12-28T00%3A00%3A00&aggregateHours=24&location=Atlanta&endDateTime=2019-12-28T00%3A00%3A00&unitGroup=us&dayStartTime=16%3A00%3A00&contentType=json&dayEndTime=19%3A00%3A00&shortColumnNames=0",
    options
  ),
  // LSU v. Clemson 42-25
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2020-01-13T00%3A00%3A00&aggregateHours=24&location=New%20Orleans%2CLA%2CUSA&endDateTime=2020-01-13T00%3A00%3A00&unitGroup=us&dayStartTime=19%3A00%3A00&contentType=json&dayEndTime=22%3A00%3A00&shortColumnNames=0",
    options
  )
  ])
  .then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function (data) {
    // Log the data to the console
    // You would do something with both sets of data here
    console.log(data);
  }).catch(function (error) {
    // if there's an error, log it
    console.log(error);
  });}

  {var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2f7577bceemshc4360cb307f2088p175e84jsndaf42a2597f8',
      'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'      }
  };
  Promise.all([
    // Ohio State v. Alamaba 42-35
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-01-01T00%3A00%3A00&aggregateHours=24&location=New%20Orleans%2CLA%2CUSA&endDateTime=2015-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=21%3A00%3A00&contentType=json&dayEndTime=23%3A59%3A00&shortColumnNames=0",
    options
  ),
  //Oregon v. Florida State 59-20
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-01-01T00%3A00%3A00&aggregateHours=24&location=Pasadena%2CCA%2CUSA&endDateTime=2015-01-01T00%3A00%3A00&unitGroup=us&dayStartTime=14%3A00%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0",
    options
  ),
  //Ohio State v. Oregon 42-20
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-01-12T00%3A00%3A00&aggregateHours=24&location=Arlington%2CTX%2CUSA&endDateTime=2015-01-12T00%3A00%3A00&unitGroup=us&dayStartTime=18%3A30%3A00&contentType=json&dayEndTime=21%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Alabama v. Michigan 38-0
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-12-31T00%3A00%3A00&aggregateHours=24&location=Arlington%2CTX%2CUSA&endDateTime=2015-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=19%3A20%3A00&contentType=json&dayEndTime=21%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Clemson v. Oklahoma 37-17
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2015-12-31T00%3A00%3A00&aggregateHours=24&location=Miami%20Gardens%2CFL%2CUSA&endDateTime=2015-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=16%3A00%3A00&contentType=json&dayEndTime=19%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Alabama v. Clemson 45-40
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2016-01-11T00%3A00%3A00&aggregateHours=24&location=Glendale%2CAZ%2CUSA&endDateTime=2016-01-11T00%3A00%3A00&unitGroup=us&dayStartTime=18%3A30%3A00&contentType=json&dayEndTime=21%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Alabama v. Washington 24-7
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2016-12-31T00%3A00%3A00&aggregateHours=24&location=Atlanta&endDateTime=2016-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=14%3A00%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Clemson v. Ohio State 24-7
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2016-12-31T00%3A00%3A00&aggregateHours=24&location=Glendale&endDateTime=2016-12-31T00%3A00%3A00&unitGroup=us&dayStartTime=18%3A00%3A00&contentType=json&dayEndTime=21%3A00%3A00&shortColumnNames=0",
    options
  ),
  // Clemson v. Alabama 35-31
  fetch(
    "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2017-01-09T00%3A00%3A00&aggregateHours=24&location=Tampa&endDateTime=2017-01-09T00%3A00%3A00&unitGroup=us&dayStartTime=20%3A00%3A00&contentType=json&dayEndTime=23%3A00%3A00&shortColumnNames=0",
    options
  )
])
.then(function (responses) {
  // Get a JSON object from each of the responses
  return Promise.all(responses.map(function (response) {
    return response.json();
  }));
}).then(function (data) {
  // Log the data to the console
  // You would do something with both sets of data here
  console.log(data);
}).catch(function (error) {
  // if there's an error, log it
  console.log(error);
});}
