function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}


function Q1_Ans(params) {
    document.write('Enter a positive integer e.g(1.89,2.58,3.68....): <input type="number" step="0.01" value="1.00" id="pint">');
    document.write('<button onclick="trigFunct1()">Submit</button>');
}

function trigFunct1(params) {
    let positiveInt = document.getElementById('pint').value;
    
    let roundInt = Math.round(positiveInt);
    let floorInt = Math.floor(positiveInt);
    let ceilInt = Math.ceil(positiveInt);
    document.write('Number value: ' + positiveInt);
    document.write('<br>Round off value: ' + roundInt);
    document.write('<br>Floor value: ' + floorInt);
    document.write('<br>Ceil value: ' + ceilInt);
}

function Q2_Ans(params) {
    document.write('Enter a Negative Floating Point e.g(-1.67,-2.57,-3.59....): <input type="number"step="0.01" value="-1.00" id="nFloat">');
    document.write('<h3 id="num"></h3><button onclick="trigFunct2()">Submit</button>')

}

function trigFunct2(params) {
    let positiveInt = document.getElementById('nFloat').value;
    
    let roundInt = Math.round(positiveInt);
    let floorInt = Math.floor(positiveInt);
    let ceilInt = Math.ceil(positiveInt);
    document.write('Number value: ' + positiveInt);
    document.write('<br>Round off value: ' + roundInt);
    document.write('<br>Floor value: ' + floorInt);
    document.write('<br>Ceil value: ' + ceilInt);
}


function Q3_Ans(params) {
    document.write('Enter a Number: <input type="number" id="int">');
    document.write('<h3 id="absnum"></h3><button onclick="trigFunct3()">Submit</button>');
}

function trigFunct3(params) {
    let int = document.getElementById('int').value;
    let absInt = Math.abs(int);
    //document.write('Number value: ' + absInt);
    document.getElementById("absnum").innerText = absInt;
}


function Q4_Ans(params) {
    document.write('<button onclick="trigFunct4()">Roll a Dice</button><br><h3 id="random"></h3>')
}

function trigFunct4(params) {
    let randomNum = parseInt(Math.random() * 6);
    document.getElementById("random").innerText = "Random dice value: "+ randomNum;
}


function Q5_Ans(params) {
    document.write('<button onclick="trigFunct5()">Flip a Coin</button><br><h3 id="coinval"></h3>')
}

function trigFunct5(params) {
    var result;
    let coinValue = parseInt(Math.random()* (2 - 1 + 1) + 1);
    if (coinValue === 2) {
        result = "Heads";
    } else {
        result = "Tails";
    }
    document.getElementById("coinval").innerText = coinValue+ " Random coin value: "+ result;
}


function Q6_Ans(params) {
    document.write('<button onclick="trigFunct6()">Click Here</button><br><h3 id="randomNum"></h3>')
}

function trigFunct6(params) {
    
    let result = parseInt(Math.random()*100) +1;
   
    document.getElementById("randomNum").innerText = " Random coin value: "+ result;
}


function Q7_Ans(params) {

    document.write('<h3 id="wght"></h3><button onclick="trigFunct7()">Click Here</button>');
}

function trigFunct7(params) {
    let weight = parseFloat(prompt("Enter your weight in kilograms"));
    
    document.getElementById("wght").innerText = `The weight of user is ${weight} kilograms`;
}


function Q8_Ans(params) {
    document.write('<h3 id="absnum"></h3><button onclick="trigFunct8()">Submit</button>');
}

function trigFunct8(params) {
    let userGuess = let = parseInt(prompt("Enter a Number between 1 and 10"));
    let randomNum = parseInt(Math.random()*10) +1;
    if (userGuess === randomNum) {
        alert("Your Guess Number is Correct!");
    } else {
        alert("Try Again");
    }
    
}
