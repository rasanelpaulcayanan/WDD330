let countrylist = document.getElementById("country");
countrylist.addEventListener("change", startSearch);
let leagueList = document.getElementById('league');
leagueList.addEventListener("change", leagueSearch)
let teamList = document.getElementById('team');
teamList.addEventListener("change", getTeamInfo)
let teamInfo = [];

function startSearch(event)
{
  if ( countrylist.value == 1)
  {
     baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=Spain&s=Soccer';
    }
 else if (countrylist.value == 2)
 {
     baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=United_States&s=Soccer';;
 }

 else
 {
     baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=Germany&s=Soccer';;
 }
 showLeague(baseUrl);
}



function showLeague(baseUrl)
{
fetch(baseUrl).then(response =>response.json())
.then(json => {
let child = document.getElementById("league").childElementCount;
if( child > 0) {leagueList.innerHTML = ""; }
console.log('works');

for (var i = 0; i < json.countrys.length ; i++)
{
  
    leagueList.innerHTML += "<option value="+json.countrys[i].idLeague +" selected>"+json.countrys[i].strLeague+"</option>" ;
}

})
}

function leagueSearch(event)
{
    let leagueValue = leagueList.value;
    let partURL = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=' + leagueValue;

    fetch(partURL).then(response =>response.json())
.then(json => {

    let child = document.getElementById("team").childElementCount;
    if( child > 0) {teamList.innerHTML = ""; }
   
    teamInfo = json.teams;
    for (var i = 0; i < json.teams.length ; i++)
    {
      
        teamList.innerHTML += "<option value="+[i]+" selected>"+json.teams[i].strTeam+"</option>" ;
    }

  console.log('test');

})

}


function getTeamInfo()
{
let teamValue = teamList.value;
 console.log(teamInfo[teamValue].strDescriptionEN);

 let logo = document.getElementById('teamLogo');
 let description = document.getElementById('teamDescritption');
let arenaDetails = document.getElementById('arenaDetails');
let socialMedia = document.getElementById('socialMedia');

logo.innerHTML = "<img class='teamLogo' src='"  + teamInfo[teamValue].strTeamLogo+"' alt='Check Website for Team Logo'>";
arenaDetails.innerHTML ="<p>Arena Name:"+teamInfo[teamValue].strStadium +"</p><p>Year Formed:"+teamInfo[teamValue].intFormedYear+ "</p>";
description.innerHTML = "<p>"+ teamInfo[teamValue].strDescriptionEN+ "</p>";
socialMedia.innerHTML= "<ul class='icons'><li><a href='https://"+teamInfo[teamValue].strWebsite+"' target='blank'><img src='../images/website.png'></img></a></li> <li><a href='https://"+teamInfo[teamValue].strTwitter+"' target='blank'><img src='../images/twitter.png'></img></a></li> <li><a href='https://"+teamInfo[teamValue].strYoutube+"' target='blank'><img src='../images/youtube.png' ></img></a></li><ul>"


}

