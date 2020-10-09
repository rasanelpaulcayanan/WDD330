const tictactoeTiles    = [];
const vertical = ["","",""];
const vertical1 = ["","",""];
const vertical2 = ["","",""];
const horizontal = ["","",""];
const horizontal1 = ["","",""];
const horizontal2 = ["","",""];
const diagonal = ["","",""];
const diagonal1 = ["","",""];
const player1wins = ["X","X","X"];
const player2wins = ["0","0","0"];

var clickContainter = document.getElementById('board');
var tile1 = document.getElementById('item1');
clickContainter.addEventListener("touchend",function1);
var turns = 0;

tile1 = document.getElementById('item1');
tile2 = document.getElementById('item2');
tile3 = document.getElementById('item3');
tile4 = document.getElementById('item4');
tile5 = document.getElementById('item5');
tile6 = document.getElementById('item6');
tile7 = document.getElementById('item7');
tile8 = document.getElementById('item8');
tile9 = document.getElementById('item9');



function function1 (event) {
tile = event.target;
onclick = turns++;


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

tictactoeTiles[turns-1] = tile.textContent;
console.log(turns);
console.log(tictactoeTiles)

if (tile == tile1) { vertical[0] = tile.textContent; horizontal[0] = tile.textContent;diagonal[0] = tile.textContent;}
else if (tile == tile2) { vertical1[0] = tile.textContent; horizontal[1] = tile.textContent;}
else if (tile == tile3) { vertical2[0] = tile.textContent;horizontal[2] = tile.textContent;diagonal1[0] = tile.textContent;}
else if (tile == tile4) {vertical[1] = tile.textContent;horizontal1[0] = tile.textContent;}
else if (tile == tile5) { vertical1[1] = tile.textContent;horizontal1[1] = tile.textContent; diagonal[1] = tile.textContent;diagonal1[1] = tile.textContent;}
else if (tile == tile6) { vertical2[1] = tile.textContent;horizontal1[2] = tile.textContent;}
else if (tile == tile7) {vertical[2] = tile.textContent;horizontal2[0] = tile.textContent;diagonal1[2] = tile.textContent;}
else if (tile == tile8) { vertical1[2] = tile.textContent;horizontal2[1] = tile.textContent;}
                  else  {vertical2[2] = tile.textContent;horizontal2[2] = tile.textContent;diagonal[2] = tile.textContent;}

//Test Vertical Winning Combinations
test1 = compare(vertical,player1wins);
test2 = compare(vertical1,player1wins);
test3 = compare(vertical2,player1wins);
test4 = compare(vertical,player2wins);
test5 = compare(vertical1,player2wins);
test6 = compare(vertical2,player2wins);

//Test Horizontal Winning Combinations
test7 = compare(horizontal,player1wins);
test8 = compare(horizontal1,player1wins);
test9 = compare(horizontal2,player1wins);
test10 = compare(horizontal,player2wins);
test11 = compare(horizontal1,player2wins);
test12 = compare(horizontal2,player2wins);

//Test for Diagonal Winning Combinations
test13 = compare(diagonal,player1wins);
test14 = compare(diagonal1,player1wins);
test15 = compare(diagonal,player2wins);
test16 = compare(diagonal1,player2wins);


selectWinner(test1);



}

function compare(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


function selectWinner(test1)
{
  if (test1 == true || test2== true || test3 == true || test7 == true || test8== true || test9 == true || test13 == true || test14 == true)
   {document.getElementById('winnerDiv').innerHTML = "Player 1 WINS!"}

  else if (test4 == true || test5== true || test6 == true || test10 == true || test11== true || test12 == true || test15 == true || test16 == true) 
  {document.getElementById('winnerDiv').innerHTML = "Player 2 WINS!"}
 
  else if ( tictactoeTiles.length == 9 && test1 == false && test2== false && test3 == false && test7 == false && test8== false && test9 == false && test13 == false && test14 == false 
    && test4 == false && test5== false && test6 == false && test10 == false &&  test11== false && test12 == false && test15 == false && test16 == false)
    {document.getElementById('winnerDiv').innerHTML = "We have tie! Please try again!" }
}

function tie()
{
  document.getElementById('winnerDiv').innerHTML = "We have a tie! Please try again!";
}

function reset()
{
    window.location.reload();
}
