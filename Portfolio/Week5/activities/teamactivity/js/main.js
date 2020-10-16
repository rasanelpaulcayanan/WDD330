import Hikes from './hikes.js';



const myHike = new Hikes;
let allHikes = myHike.getAllHikes();
let bechler = myHike.getHikeByName("Bechler Falls");
let teton =   myHike.getHikeByName("Teton Canyon");
let denada =  myHike.getHikeByName("Denanda Falls");

const imgBasePath = "images/";
console.log(allHikes);


const ul = document.getElementById('hikes');

for ( let i = 0, max = allHikes.length; i < max ; i++)
   {
    const li = document.createElement('p');
    const a = document.createElement('a');
    a.innerHTML = `<div id="h2Div${i}"><h2>${allHikes[i].name}</h2></div>
    <div id="container${i}">
    <div id = "image${i}" class="image"><img src="${imgBasePath}${allHikes[i].imgSrc}" alt="${allHikes[i].imgAlt}"></div>
    <div id = "textcontainer${i}"> 
    Distance: ${allHikes[i].distance} <br>
    Difficulty: ${allHikes[i].difficulty}<br>
    Description: ${allHikes[i].description} <br>
    Direction: ${allHikes[i].directions}
     </div>
     </div>`;
    ul.appendChild(li);
    li.appendChild(a);
       
   
   }
