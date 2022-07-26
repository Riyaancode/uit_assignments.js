function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}

function Q1_Ans(params) {
    return document.write(new Date());
}

function Q2_Ans(params) {
    document.write('<input id="fname" type="text" placeholder="Enter your first name here"><br><input type="text" id="lname" placeholder="Enter your last name here"><br><button type="submit" id="btn">Click Here</button><br><h3 id="greet"></h3>')

    document.getElementById('btn').addEventListener("click", () => {

        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        document.getElementById('greet').innerText = `Hey, ${fname} ${lname}`;

    });
}


function Q3_Ans(params) {
    document.write('<input id="num1" type="number" placeholder="Enter your first number here"><br><input type="number" id="num2" placeholder="Enter your second number here"><br><button type="submit" id="btn2">Click Here</button><br><h3 id="sumofnum"></h3>')

    document.getElementById('btn2').addEventListener("click", () => {

        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);
        var sumOfNum = num1 + num2;
        document.getElementById('sumofnum').innerText = `Sum of two number is: ${sumOfNum}`;

    });
}


function Q4_Ans(params) {
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


function Q5_Ans(num) {
    var num2 = Math.pow(num, 2);
    document.write(`Square of ${num} is ${num2}`);
}


function Q6_Ans(num) {
    if (num < 0)
        return document.write(-1);
    else if (num == 0)
        return document.write(1);
    else {
        return document.write((num * Q6_Ans(num - 1)));
    }
}


function Q7_Ans(start, end) {
    document.write('Start counting with: <input id="start" type="number" placeholder="Enter a number for a counting to start with"><br>End counting with: <input type="number"  id="end" placeholder="Enter a number for a counting to end with"><br><button type="submit" id="btn3">Click Here</button>')
    document.getElementById('btn3').addEventListener("click", () => {

        var start = parseInt(document.getElementById('start').value);
        var end = parseInt(document.getElementById('end').value);
        for (let i = start; i <= end; i++) {
            document.write(i + "<br>")
        }
    });

}

function Q8_Ans(params) {

    document.write('<input id="base" type="number" placeholder="Enter base here"><br><input type="number" id="perpend" placeholder="Enter perpendicular here"><br><button type="submit" id="btn5" onclick="calculateHypotenuse()">Click Here</button><br><h3 id="hypotenuse"></h3>')

}

function calculateHypotenuse(params) {
    var base = parseInt(document.getElementById('base').value);
    var perpend = parseInt(document.getElementById('perpend').value);

    calculateSquare(base, perpend);
    function calculateSquare(b, p) {
        var baseSqr = b ** 2;
        var perpendSqr = p ** 2;
        return sum = baseSqr + perpendSqr;
    }

    const hypotenuse = Math.sqrt(sum);
    return document.getElementById('hypotenuse').innerHTML = `${hypotenuse}<sup>2</sup> = ${base}<sup>2</sup> + ${perpend}<sup>2</sup>`;

}

function Q9_Ans(width, height) {
    var A = width * height;
    document.write(A);
}


function Q10_Ans(str_entry) {
    //copied from https://www.w3resource.com/javascript-exercises/javascript-function-exercise-2.php#:~:text=JavaScript%20Code%3A&text=function%20check_Palindrome(str_entry)%7B%20%2F%2F,%3D%3D%3D%22%22)%20%7B%20console.
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    if (cstr === "") {
        document.write("Nothing found!");
        return false;
    }
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        if (cstr.length === 1) {
            document.write("Entry is a palindrome.");
            return true;
        } else {
            ccount = (cstr.length - 1) / 2;
        }
    }
    for (var x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            document.write("Entry is not a palindrome.");
            return false;
        }
    }
    document.write("The entry is a palindrome.");
    return true;
}


function Q11_Ans(str) {
    var strArr1 = str.split(' ');
    var strArr2 = [];
      
    for(var i = 0; i < strArr1.length; i++){
        strArr2.push(strArr1[i].charAt(0).toUpperCase()+strArr1[i].slice(1));
    }
    return document.write(strArr2.join(' '));
    
}


function Q12_Ans(str)
{
  var strArr = str.match(/\w[a-z]{0,}/gi);
  var result = strArr[0];

  for(var i = 1 ; i < strArr.length ; i++)
  {
    if(result.length < strArr[i].length)
    {
    result = strArr[i];
    } 
  }
  return document.write(result);
}


function Q13_Ans(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return document.write(letter_Count);
}

function Q14_Ans(r) {
    var _radius = r;
    function calcCircumference(radius) {
        return document.write(`Circumference of circle = ${2 * Math.PI * radius} <br>`);
    }
    
    function calcArea(radius) {
        return document.write(`Area od circle = ${Math.PI * radius * radius}`);
    }

    calcCircumference(_radius);
    calcArea(_radius);
}
