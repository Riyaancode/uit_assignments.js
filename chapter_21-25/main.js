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
   let fullName = fName +' '+ lName;
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
    document.write('String: '+str);
    document.write("<br>Index of 'n': "+indStr);
}

function Q4_Ans(params) {
    let str = "Hello World";
    let indStr = str.lastIndexOf('l');
    document.write('String: '+str);
    document.write("<br>Last Index of 'l': "+indStr);
}

function Q5_Ans(params) {
    let str = "Pakistani";
    let indStr = str.charAt(3);
    document.write('String: '+str);
    document.write("<br>Character at Index 3: "+indStr);
}


function Q6_Ans(params) {
    document.write('Enter your firstname: <input type="text" id="fName"><br>Enter your lastname: <input type="text" id="lName">');
    document.write('<h3 id="Greet"></h3><br><button onclick="trigFunct3()">Submit</button>')
}

function trigFunct3(params) {
   let fName = document.getElementById('fName').value;
   let lName = document.getElementById('lName').value;
   let fullName = fName.concat(' ',lName);
   document.getElementById('Greet').innerText = 'Hey ' + fullName + '!, Thank you for visiting our website!';
}


function Q7_Ans(params) {
    let city = "Hyderabad";
    let rplcCity = city.replace("Hyder","Islam");
    document.write('City: '+city);
    document.write("<br>After Replacement: "+rplcCity);
}


function Q8_Ans(params) {
    let strMsg = "Ali and Sami are best friends. They play cricket and football together.";
    let msg = strMsg.replace(/and/g,"&");
    document.write('Message: '+strMsg);
    document.write("<br>After Replacement: "+msg);
}

function Q9_Ans(params) {
    let strNum = "472";
    let intNum = parseInt(strNum);
    document.write('Value: '+strNum);
    document.write("<br>Type: "+typeof strNum);
    document.write('<br><br>Value: '+intNum);
    document.write("<br>Type: "+typeof intNum);
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
    document.write('Number: '+num);
    document.write("<br>Result: "+strNum.replace('.',''));
}