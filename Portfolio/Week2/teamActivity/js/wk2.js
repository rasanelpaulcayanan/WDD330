function display() {

    var firstNum = document.getElementById("inputOne").value;
    document.getElementById("outputDiv").innerHTML = firstNum;

}

function getInput(x) {

    var firstNum = parseFloat(document.getElementById("inputOne").value);
    var secondNum = parseFloat(document.getElementById("inputTwo").value);

    if (x == 1) {
        addNumbers(firstNum, secondNum);
    } else if (x == 2) {
        subtractNumbers(firstNum, secondNum);

    } else if (x == 3) {
        multiply(firstNum, secondNum);
    } else if (x == 4) {
        quotient(firstNum, secondNum);
    }
}

function mathLoop() {
    var firstNum = parseFloat(document.getElementById("inputOne").value);
    output = "";
    if (isNaN(firstNum)) {
        displayError();
    } else {
        var sum = 0;
        for (i = 0; i <= firstNum; i++) {
            sum += i;
        }
        document.getElementById("answerDiv").innerHTML = sum;
    }



}

function addNumbers(firstNum, secondNum) {

    var sum = 0;
    sum = firstNum + secondNum;
    output = "";
    if (isNaN(sum)) {
        displayError();


    } else {
        document.getElementById("answerDiv").innerHTML = sum;
    }



}

function subtractNumbers(firstNum, secondNum) {

    var difference = 0;
    difference = firstNum - secondNum;
    output = "";
    if (isNaN(difference)) {
        displayError();


    } else {
        document.getElementById("answerDiv").innerHTML = difference;
    }

}

const multiply = function multiplication(firstNum, secondNum) {
    var product = 0;
    product = firstNum * secondNum;
    output = "";
    if (isNaN(product)) {
        displayError();


    } else {
        document.getElementById("answerDiv").innerHTML = product;
    }
}


const quotient = (firstNum, secondNum) => {

    var quotient = 0;
    quotient = firstNum / secondNum;
    output = "";
    if (isNaN(quotient)) {
        displayError();

    } else {
        document.getElementById("answerDiv").innerHTML = quotient;
    }

}

function displayError() {
    output = "Please enter a valid number";
    document.getElementById("errorDiv").innerHTML = output;
}

var subject = 'WDD330'
console.log(`I love love ${subject}.`);