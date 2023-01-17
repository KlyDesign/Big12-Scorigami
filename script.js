var date="2000"
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
//winning side row
//losing side colomn 
for(date= 1999 ; date < 2023 ; date++){
fetch("http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?dates="+date, requestOptions)
  .then(response => response.json())
  .then(function(data) {
    
  for(i=0; i< data.events.length;i++){
    booleanWinVal = data.events[i].competitions[0].competitors[0].winner
    console.log(booleanWinVal)
    if(booleanWinVal==true){
      var appendVal = 'r' + data.events[i].competitions[0].competitors[1].score + '-c' + data.events[i].competitions[0].competitors[0].score
      console.log(appendVal)
      document.getElementById(appendVal).setAttribute("style","background-color: #BF5700");
    }
    else if(booleanWinVal==false){
      var appendVal = 'r' + data.events[i].competitions[0].competitors[0].score + '-c' + data.events[i].competitions[0].competitors[1].score
      console.log(appendVal)
      document.getElementById(appendVal).setAttribute("style","background-color: #BF5700");
    }
    }
})
  // .then(result => console.log(result))
  .catch(error => console.log('error', error))
}