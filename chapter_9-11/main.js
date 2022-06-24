
function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}


function Q1_Ans(params) {
    document.write("<br> <button id='bgnBtn' onclick='trigPromt1()'>Click Here</button>");
}

function trigPromt1(params) {
    let cityName = prompt("Enter the City Name");
    if (cityName.toLowerCase() == "karachi") {
        alert("Welcome to The City of Lights, Karachi!");
    } else {
        alert("You Enter the Wrong City Name " + cityName)
    }
}


function Q2_Ans(params) {
    document.write('<form><h3>Please Enter your preferred Gender pronouns</h3><select id="gender"><option>Male</option><option>Female</option></select><br><br><button onclick="trigPromt2()">Submit</button></form>');
}

function trigPromt2(params) {
    let select = document.getElementById('gender');
    let gender = select.options[select.selectedIndex].text;

    if (gender == "Male") {
        alert("Good Morning Sir!");
    } else if (gender == "Female") {
        alert("Good Morning Ma’am")
    }
}


function Q3_Ans(params) {
    document.write('<form><select id="colors"><option>Red</option><option>Yellow</option><option>Green</option></select><br><br><button onclick="trigPromt3()">Submit</button></form>');
}

function trigPromt3(params) {
    let select = document.getElementById('colors');
    let color = select.options[select.selectedIndex].text;

    if (color == "Red") {
        alert("Must Stop!");
    } else if (color == "Yellow") {
        alert("Ready to move")
    } else if (color == "Green") {
        alert("Move now")
    }
}


function Q4_Ans(params) {
    document.write("<br><div style='position: relative;'><input type='number' style='width:80px;' id='fuel' value'0.01'   step='0.01' placeholder='0.00'><span style='position: relative;right: 50px;'>litre</span></div><br><button id='Btn' onclick='trigPromt4()'>Click Here</button>");
}

function trigPromt4(params) {
    let fuel = document.getElementById("fuel").value;
    if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
    } else {
        alert("Your car fuel is enough for now " + fuel + " litre")
    }
}


function Q5_Ans(params) {
    document.write("<br> <button id='bgnBtn' onclick='trigPromt5()'>Click Here</button>");

}

function trigPromt5(params) {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}

function Q6_Ans(params) {

    document.write('<h3> Mark Sheet </h3><form name="forum" onsubmit="return getResult()">Total Marks of each Subject:<input type="number" value="" max="100" id="total"><br><br>Subject 1 Obtained Marks:<input type="number" max="100" id="obtmarks1"><br><br>Subject 2 Obtained Marks:<input type="number" max="100" id="obtmarks2"><br><br> Subject 3 Obtained Marks:<input type="number" max="100" id="obtmarks3"><br><br><input type="submit" id="subb" value="SUBMIT"></form>');
    document.write('<h3><strong>Result</strong></h3><h4>Total Marks: <span id="totalmarks"></span></h4><h4>Marks Obtained: <span id="marksobt"></span></h4><h4>Percentage: <span id="percent"></span></h4><h4>Grade: <span id="grade"></span></h4><h4>Remarks: <span id="remarks"></span></h4>')
}

function getResult(params) {
    var total = parseInt(document.getElementById('total').value);
    var obtm1 = parseInt(document.getElementById('obtmarks1').value);
    var obtm2 = parseInt(document.getElementById('obtmarks2').value);
    var obtm3 = parseInt(document.getElementById('obtmarks3').value);

    var total_e_marks = total;
    var total_marks = total_e_marks * 3;
    var totalobtmarks = obtm1 + obtm2 + obtm3;
    var percentage = (totalobtmarks * total) / total_marks;

    if (percentage > 80 || percentage == 80) {

        document.getElementById("grade").innerHTML = "A1";
        document.getElementById("remarks").innerHTML = "Excellent";

    } else if (percentage > 70 || percentage == 70) {

        document.getElementById("grade").innerHTML = "A";
        document.getElementById("remarks").innerHTML = "Good";

    } else if (percentage > 60 || percentage == 60) {

        document.getElementById("grade").innerHTML = "B";
        document.getElementById("remarks").innerHTML = "You need to improve";

    } else if (percentage <= 60) {

        document.getElementById("grade").innerHTML = "Fail";
        document.getElementById("remarks").innerHTML = "Sorry";

    }

    document.getElementById("percent").innerHTML = parseFloat(percentage).toFixed(2) + "%";
    document.getElementById("totalmarks").innerHTML = total_marks;
    document.getElementById("marksobt").innerHTML = totalobtmarks;

    console.log(percentage);
    return false;
}


function Q7_Ans(params) {
    document.write("<br> <button id='bgnBtn' onclick='trigPromt7()'>Click Here</button>");
}

function trigPromt7(params) {
    var userNum = prompt("Guess the one number from 1 to 10");

    var secrtNum = Math.floor(Math.random() * 10);
    //var secrtNum = 8;
    if (!userNum == "") {
        if (!userNum.match(/^\d+/)) {
            alert("Please only enter numeric characters only")
        } else {
            console.log(userNum);
            if (secrtNum == userNum) {
                alert("Bingo! Correct answer");
            } else if (secrtNum == ++userNum) {
                alert("Close enough to the correct answer");
            } else {
                alert("Incorrect answer, The secret number is " + secrtNum);
            }

        }
    } else {
        alert("Please enter the value first");
    }
}


function Q8_Ans(params) {
    document.write("<br> <button id='bgnBtn' onclick='trigPromt8()'>Click Here</button>");
}

function trigPromt8(params) {
    let num = prompt("Enter the Number that divisible by 3");

    if (!num == "") {
        if (!num.match(/^\d+/)) {
            alert("Please only enter numeric characters only")
        } else {
            console.log(num);
            if (num % 3 == 0) {
                alert("The Number " + num + " is divisible by 3");
            } else {
                alert("The Number " + num + " !is divisible by 3");
            }

        }
    } else {
        alert("Please enter the value first");
    }
}


function Q9_Ans(params) {
    document.write("<br> <button id='bgnBtn' onclick='trigPromt9()'>Click Here</button>");
}

function trigPromt9(params) {
    let num = prompt("Enter the Number that divisible by 3");

    if (!num == "") {
        if (!num.match(/^\d+/)) {
            alert("Please only enter numeric characters only")
        } else {
            console.log(num);
            if (num % 2 == 0) {
                alert("The Number " + num + " is Even Number");
            } else {
                alert("The Number " + num + " is Odd Number");
            }

        }
    } else {
        alert("Please enter the value first");
    }
}


function Q10_Ans(params) {
    document.write("<br><div style='position: relative;'><input type='number' style='width:60px;' id='temperature' value'00' max='60'  step='00' placeholder='00'><span style='position: relative;right: 40px;'>°C</span></div><br><button id='Btn' onclick='trigPromt10()'>Click Here</button>");
}

function trigPromt10(params) {
    let temp = document.getElementById("temperature").value;

    if (!temp == "") {
        if (temp > 40) {
            alert("It is too hot outside");
        } else if (temp > 30) {
            alert("The Weather today is Normal");
        } else if (temp > 20) {
            alert("The Weather today is Normal");
        } else if (temp > 10) {
            alert("OMG! Today’s weather is so Cool");
        } else if (temp < 10) {
            alert("It is too cold outside");
        }
    } else {
        alert("Please enter the value first");
    }
}


function Q11_Ans(params) {
    document.write('<h3> Calculator </h3><form name="forum" onsubmit="return calculate()">Enter Value 1:<input type="number" style="width:60px;" value="0" id="val1"><br><br>Enter Value 2:<input type="number" style="width:60px;" value="0" id="val2"><br><br>Select Operation:<select id="operation"><option value"+">+</option><option value"-">-</option><option value"*">*</option><option value"/">/</option><option value"%">%</option></select><br><br><input type="submit" id="subb" value="SUBMIT"></form>');
    document.write('<h4>Result: <span id="result"></span></h4>');

}

function calculate(params) {



    const number1 = parseInt(document.getElementById('val1').value);
    const number2 = parseInt(document.getElementById('val2').value);

    let select = document.getElementById('operation');
    const operator = select.options[select.selectedIndex].value;

    let result;


    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    } else if (operator == '%') {
        result = number1 % number2;
    }


    document.getElementById('result').innerHTML = result;
    return false;
}