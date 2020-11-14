let countA = 0;
let countS = 0;
let countD = 0;
let countF = 0;
let countG = 0;
let countH = 0;
let countJ = 0;
let countK = 0;
let countL = 0;


window.addEventListener('keydown', function (keyEvent) {
    const key = keyEvent.keyCode;
    const sound = document.querySelector('audio[data-key="' + key + '"');
    const letter = document.querySelector('.key[data-key="' + key + '"');
    const counter = document.getElementById('counter' + key);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
    letter.classList.add('playing');
    let reset = false;
    let count = 0;


    switch (key) {
        case 65:
            countA++;
            counter.innerHTML = countA;
            if (countA >= 10)
            {countA = 0;
            reset = true;}
            count = countA;
            moveDown(reset,letter,count);
            break;
        case 83:
            countS++;
            counter.innerHTML = countS;
            if (countS >= 10)
            {countS = 0;
            reset = true;}
            count = countS;
            moveDown(reset,letter,count);
            break;
        case 68:
            countD++;
            counter.innerHTML = countD;
            if (countD >= 10)
            {countS = 0;
            reset = true;}
            count = countD;
            moveDown(reset,letter,count);
            break;
        case 70:
            countF++;
            counter.innerHTML = countF;
            if (countF >= 10)
            {countF = 0;
            reset = true;}
            count = countF;
            moveDown(reset,letter,count);
            break;
            break;

        case 71:
            countG++;
            counter.innerHTML = countG;
            if (countG >= 10)
            {countG = 0;
            reset = true;}
            count = countG;
            moveDown(reset,letter,count);
            break;

        case 72:
            countH++;
            if (countH >= 10)
            {countH = 0;
            reset = true;}
            count = countH;
            moveDown(reset,letter,count);
            break;

        case 74:
            countJ++;
            counter.innerHTML = countJ;
            if (countJ >= 10)
            {countJ = 0;
            reset = true;}
            count = countJ;
            moveDown(reset,letter,count);
            break;

        case 75:
            countK++;
            if (countK >= 10)
            {countK = 0;
            reset = true;}
            count = countK;
            moveDown(reset,letter,count);
            break;
        case 76:
                countL++;
                counter.innerHTML = countL;
                if (countL >= 10)
                {countL = 0;
                reset = true;}
                count = countL;
                moveDown(reset,letter,count);
                break;
    }

     

});

function removeClass(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');


}

function moveDown(reset,letter,count)
{
    console.log(reset);
    letter.classList.add('movedown');
    letter.style.top = (10*count)+"px";

    if(reset == true)
    {
        letter.classList.remove('movedown');
    }
}


const letters = document.querySelectorAll('.key');
letters.forEach(letter => letter.addEventListener('transitionend', removeClass))