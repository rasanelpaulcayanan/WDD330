function display() {



    var firstNum = document.getElementById("inputOne").value;


    document.getElementById("outputDiv").innerHTML = firstNum;

}

function mathLoop() {
    var firstNum = parseFloat(document.getElementById("inputOne").value);
    output = "";
    if (isNaN(firstNum)) {

        output = "Please enter a valid number";
        document.getElementById("user_error").innerHTML = output;
     
    } else {

        var sum = 0;

        for (i = 0; i <= firstNum; i++) {
            sum += i;
        }
        document.getElementById("user_error").innerHTML = sum;
    }



}

function addNumbers() {
    var firstNum = parseFloat(document.getElementById("inputOne").value);
    var secondNum = parseFloat(document.getElementById("inputTwo").value);
 
        var sum = 0;
        sum = firstNum +secondNum;
        output = "";
        if(isNaN(sum))
        {
            output = "Please enter valid numbers";
            document.getElementById("sumDiv").innerHTML = output;

        }
        else{
            document.getElementById("sumDiv").innerHTML = sum;
        }

    

}

function subtractNumbers()
{
    var firstNum = parseFloat(document.getElementById("inputOne").value);
    var secondNum = parseFloat(document.getElementById("inputTwo").value);
 
        var difference = 0;
        difference = firstNum - secondNum;
        output = "";
        if(isNaN(difference))
        {
            output = "Please enter valid numbers";
            document.getElementById("differenceDiv").innerHTML = output;

        }
        else{
            document.getElementById("differenceDiv").innerHTML = difference;
        }

}

var subject = 'WDD330' 
  console.log(`I love love ${subject}.`);
