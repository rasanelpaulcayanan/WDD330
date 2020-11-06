
let jedi = document.getElementById('jediList')
pageCount = 0
characterCount = 0
nextUrl = "";
prevUrl = "";
nextLength = 0;
pageNumber = 0;



function addPage()
{
    showCharacters(nextUrl);
}

function prevPage()
{
    showCharacters(prevUrl)
}
function switchPage(pageCount){
let number = document.getElementById("jediList").childElementCount;
if( number > 1) {jedi.innerHTML = ""; }
let pageArray = ["1","2","3","4","5","6","7","8","9"];   
let baseUrl = "http://swapi.dev/api/people/?page="+pageArray[pageCount];
showCharacters(baseUrl);
}



function showCharacters(baseUrl)
{
fetch(baseUrl).then(response =>response.json())
.then(json => {
  let child = document.getElementById("jediList").childElementCount;
  let pageNum = document.getElementById("pageNumber");
  if( child > 1) {jedi.innerHTML = ""; }
for(let i = 0; i < json.results.length ; i++)
jedi.innerHTML += "<div class='characters' class='visible' onclick='showDetails("+i+");'>"
+json.results[i].name+"<br>"
+"<di class='invisible' id='details"+i+"'>"
+ "Height: "+ json.results[i].height+"<br>"
+ "Mass: "+json.results[i].mass+"<br>"
+"Birth Year: "+json.results[i].birth_year+"<br>" 
+"Eye Color: "+json.results[i].eye_color+"<br>"
+"Gender: "+json.results[i].gender+"<br>"
+"Hair Color: "+json.results[i].hair_color+"<br>"
+"Skin Color: "+json.results[i].skin_color+"<br>"   
+"</div>"
"</div>"
nextUrl = json.next
console.log(nextUrl)
nextLength = nextUrl.length
pageNumber = nextUrl.charAt((nextLength-1))
prevUrl = json.previous
characterCount = json.count
pageNum.innerHTML = (pageNumber-1)

})
}


function showDetails(i)
{
let details = document.getElementById('details'+i);
details.style.fontSize = .5;
if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
console.log(details);

}

switchPage(0);