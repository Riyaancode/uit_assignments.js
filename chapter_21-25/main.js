function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}


function Q1_Ans(params) {
    document.write('Enter your firstname: <input type="text" id="fname"><br>Enter your lastname: <input type="text" id="lname">');
    document.write('<h3 id="greet"></h3><br><button onclick="trigFunct1()">Submit</button>')
}

function trigFunct1(params) {
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;
    let fullName = fName + ' ' + lName;
    document.getElementById('greet').innerText = 'Hey ' + fullName + '!, Thank you for visiting our website!';
}


function Q2_Ans(params) {
    document.write('Enter your  favorite mobile phone model name: <input type="text" id="cellmodel">');
    document.write('<h3 id="length"></h3><button onclick="trigFunct2()">Submit</button>')
}

function trigFunct2(params) {
    let cellModel = document.getElementById('cellmodel').value;
    let modelLength = cellModel.length
    document.getElementById('length').innerText = 'Length of string: ' + modelLength;
}

function Q3_Ans(params) {
    let str = "Pakistani";
    let indStr = str.indexOf('n');
    document.write('String: ' + str);
    document.write("<br>Index of 'n': " + indStr);
}

function Q4_Ans(params) {
    let str = "Hello World";
    let indStr = str.lastIndexOf('l');
    document.write('String: ' + str);
    document.write("<br>Last Index of 'l': " + indStr);
}

function Q5_Ans(params) {
    let str = "Pakistani";
    let indStr = str.charAt(3);
    document.write('String: ' + str);
    document.write("<br>Character at Index 3: " + indStr);
}


function Q6_Ans(params) {
    document.write('Enter your firstname: <input type="text" id="fName"><br>Enter your lastname: <input type="text" id="lName">');
    document.write('<h3 id="Greet"></h3><br><button onclick="trigFunct3()">Submit</button>')
}

function trigFunct3(params) {
    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    let fullName = fName.concat(' ', lName);
    document.getElementById('Greet').innerText = 'Hey ' + fullName + '!, Thank you for visiting our website!';
}


function Q7_Ans(params) {
    let city = "Hyderabad";
    let rplcCity = city.replace("Hyder", "Islam");
    document.write('City: ' + city);
    document.write("<br>After Replacement: " + rplcCity);
}


function Q8_Ans(params) {
    let strMsg = "Ali and Sami are best friends. They play cricket and football together.";
    let msg = strMsg.replace(/and/g, "&");
    document.write('Message: ' + strMsg);
    document.write("<br>After Replacement: " + msg);
}

function Q9_Ans(params) {
    let strNum = "472";
    let intNum = parseInt(strNum);
    document.write('Value: ' + strNum);
    document.write("<br>Type: " + typeof strNum);
    document.write('<br><br>Value: ' + intNum);
    document.write("<br>Type: " + typeof intNum);
}


function Q10_Ans(params) {
    document.write('Enter Word/Sentence to convert in to UPPER case: <input type="text" id="userinput">');
    document.write('<h3 id="uppercase"></h3><button onclick="trigFunct4()">Submit</button>')
}

function trigFunct4(params) {
    let userInput = document.getElementById('userinput').value;
    let inputUpperCase = userInput.toUpperCase();

    document.getElementById('uppercase').innerText = 'Upper Case: ' + inputUpperCase;
}


function Q11_Ans(params) {
    document.write('Enter Word/Sentence to convert in to Title case: <input type="text" id="userinput1">');
    document.write('<h3 id="titleInput"></h3><button onclick="trigFunct5()">Submit</button>')



}

function trigFunct5(params) {
    let userInput = document.getElementById('userinput1').value;
    userInput = userInput.toLowerCase().split(' ');
    for (var i = 0; i < userInput.length; i++) {
        userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1);
    }


    document.getElementById('titleInput').innerText = 'Title Case: ' + userInput.join(' ');
}


function Q12_Ans(params) {
    let num = 35.36;
    let strNum = num.toString();
    document.write('Number: ' + num);
    document.write("<br>Result: " + strNum.replace('.', ''));
}


function Q13_Ans(params) {
    document.write('<button onclick="trigFunct6()">Click Here</button>')
}

function trigFunct6(params) {
    let userName = prompt('Enter your username');
    let status = true;
    if (!userName == "") {
        for (let i = 0; i < userName.length; i++) {
            console.log(userName[i])

            if (userName[i].charCodeAt() == 33 || userName[i].charCodeAt() == 44 || userName[i].charCodeAt() == 46 || userName[i].charCodeAt() == 64) {
                alert('Error!, Please Enter a valid username')
                status = false
            }

        }
    } else {
        alert('Error!, Please Enter a username')
    }

    if (status == true) {
        alert('Sucess!, Username is valid')
    }
}


function Q14_Ans(params) {
    document.write("<br> <button onclick='trigPromt7()'>Click Here to search item in our ABC Bakery</button>");
}

function trigPromt7(params) {
    var bakery = ['cake', 'apple', ' pie', 'cookie', 'chips', 'patties']

    let input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

    var found = false;
    for (var i = 0; i < bakery.length && !found; i++) {
        if (bakery[i] === input) {
            found = true;
            break;
        }
    }
    if (found == true) {
        alert(`${input} is available at index ${bakery.indexOf(input)} in our bakery`)
    } else {
        alert(`We are sorry. ${input} is not available in our bakery`);
    }
}

function Q15_Ans(params) {
    document.write("<br> <button onclick='trigPromt8()'>Click Here</button>");
}

function trigPromt8(params) {
    var pass = prompt('Enter your password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (pass.length >= 6) {
        if (pass.match(lowerCaseLetters) || pass.match(upperCaseLetters)) {
            if (pass.match(numbers)) {
                if (pass.charCodeAt() >= 48 && pass.charCodeAt() <= 57) {
                    msg = 'Password should not start from a number';
                } else{
                msg = "Valid";
            }
            }else{
                msg = "Password must contain Numbers from 0-9";
            }
        }else{
            msg ="Password must contain Alphabets from a-z or A-Z";
        }
    }else{
        msg ="Password must be atleast 6 or above";
    }
    alert(msg);
}


function Q16_Ans(params) {
    var university = "University of Karachi";
    var newArr = university.split('');
    for (let i = 0; i < newArr.length; i++) {
        document.write(newArr[i]+'<br>');
    }
    
}


function Q17_Ans(params) {
    document.write('Enter your word to check last character: <input type="text" id="char">');
    document.write('<h3 id="lastchar"></h3><button onclick="trigFunct9()">Submit</button>')
}

function trigFunct9(params) {
    let userInput = document.getElementById('char').value;
    let lastChar = userInput.at(-1);
    document.getElementById('lastchar').innerText = 'Last character of input is: ' + lastChar;
}


function Q18_Ans(params) {
    var string = "The quick brown fox jumps over the lazy dog";
    function countWords(str) {
        return str.trim().split("the").length;
      }
      document.write("String: "+string);
      document.write("<br>Numbers of time word 'the' used is: "+countWords(string));


}