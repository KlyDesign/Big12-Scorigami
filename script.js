
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
for(date= 1999 ; date < 2023 ; date++){
fetch("https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?dates="+date, requestOptions)
  .then(response => response.json())
  .then(function(data) {
  //take json data and use length of events so number of games
  for(i=0; i< data.events.length;i++){
  //determine if 1st team is winner or loser 
    booleanWinVal = data.events[i].competitions[0].competitors[0].winner
    if(booleanWinVal==true){
      var appendVal = 'r' + data.events[i].competitions[0].competitors[1].score + '-c' + data.events[i].competitions[0].competitors[0].score
      //if 1st team
      document.getElementById(appendVal).setAttribute("style","background-color: #BF5700");
    }
    else if(booleanWinVal==false){
      var appendVal = 'r' + data.events[i].competitions[0].competitors[0].score + '-c' + data.events[i].competitions[0].competitors[1].score
      document.getElementById(appendVal).setAttribute("style","background-color: #BF5700");
    }
    }
})
  // .then(result => console.log(result))
  .catch(error => console.log('error', error))
}
