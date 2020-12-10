let countrylist = document.getElementById("country");
countrylist.addEventListener("change", startSearch);
let leagueList = document.getElementById('league');

function startSearch(event)
{
  if ( countrylist.value == 1)
  {
     baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=Spain&s=Basketball';
    }
 else if (countrylist.value == 2)
 {
     baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=United_States&s=Basketball';;
 }

 else
 {
     baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=Germany&s=Basketball';;
 }
 showLeague(baseUrl);
}




function showLeague(baseUrl)
{
fetch(baseUrl).then(response =>response.json())
.then(json => {
let child = document.getElementById("league").childElementCount;
if( child > 0) {leagueList.innerHTML = ""; }
console.log(child);

for (var i = 0; i < json.countrys.length ; i++)
{
  
    leagueList.innerHTML += "<option>"+json.countrys[i].strLeague+"</option>" ;
}

})
}

