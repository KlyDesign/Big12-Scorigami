var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


var table = document.createElement('table')
for (row = 0; row < 80; row++) {
  tr = document.createElement('tr');
  for (cell = 0; cell < 80; cell++) {
      td = document.createElement('td');
      tr.appendChild(td);
      td.innerHTML = row * 80 + cell + 1;
  }
  table.appendChild(tr);
}
document.getElementById('grid').appendChild(table);