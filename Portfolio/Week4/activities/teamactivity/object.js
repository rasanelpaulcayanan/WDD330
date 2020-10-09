//const tictactoeTiles    = ["","","","","","","","",""];

var clickContainter = document.getElementById('board');
var tile1 = document.getElementById('item1');
clickContainter.addEventListener("click",function1);
var turns = 0;


function function1 (event) {
tile = event.target;
onclick = turns++;
console.log(turns);

if(turns % 2 == 0)
{
tile.innerHTML = '0';
document.getElementById('turnDiv').innerHTML= "It is  Player 1s turn";
}
else 
{
 tile.innerHTML = 'X';
 document.getElementById('turnDiv').innerHTML= "It is Player 2s turn";
}

}
function reset()
{
    window.location.reload();
}
