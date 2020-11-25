let baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Los_Angeles_Lakers';

function showCharacters(baseUrl)
{
fetch(baseUrl).then(response =>response.json())
.then(json => {
console.log(json);

})
}

showCharacters(baseUrl);

"Los Angeles Lakers"