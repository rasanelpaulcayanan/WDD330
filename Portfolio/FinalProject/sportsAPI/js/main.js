let baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=%20Welbeck';

function showCharacters(baseUrl)
{
fetch(baseUrl).then(response =>response.json())
.then(json => {
console.log(json);

})
}

showCharacters(baseUrl);