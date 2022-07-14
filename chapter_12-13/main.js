function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}

function Q1_Ans(params) {
    document.write("<br> <button onclick='trigPromt1()'>Click Here</button>");
}

function trigPromt1(params) {
    var char = prompt('Enter any character (Only check first letter from sentences)');

    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
        alert('Character ' + char + ' is UPPER case letter');
    } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
        alert('Character ' + char + ' is lower case letter');
    } else if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
        alert('Character ' + char + ' is a number');
    }
}

function Q2_Ans(params) {
    document.write("<br> <button onclick='trigPromt2()'>Click Here</button>");
}

function trigPromt2(params) {
    var int1 = parseInt(prompt('Enter first integer here'));
    var int2 = parseInt(prompt('Enter second integer here'));
    if (int1 == int2) {
        alert('First integer ' + int1 + ' is equal to send integer ' + int2);
    } else if (int1 > int2) {
        alert('First integer ' + int1 + ' is greater than second integer ' + int2);
    } else if (int1 < int2) {
        alert('First integer ' + int1 + ' is less  than second integer ' + int2);
    }
}


function Q3_Ans(params) {
    document.write("<h3>check whether the number is positive, negative or zero</h3><input type='number' id='int'>");
    document.write("<button onclick='trigPromt2()'>Submit</button> <br> <h4 id='status'><h4>");
}

function trigPromt2(params) {
    var int = document.getElementById('int').value;
    if (int == 0) {
        document.getElementById('status').innerText = 'The value is ' + int;
    } else if (int > 0) {
        document.getElementById('status').innerText = 'This value is Positive';
    } else {
        document.getElementById('status').innerText = 'The value is Negative';
    }
}


function Q4_Ans(params) {
    document.write("<h3>Check vowel from here</h3> <button onclick='trigPromt3()'>Click Here</button>");
}

function trigPromt3(params) {
    var str = prompt('Write a sentence').toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var strArr = Array.from(str);

    let status = false;
    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels[i]);
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[j] != vowels[i]) {
                continue;
            }
            status = true;
        }
    }
    alert(status);
}


function Q5_Ans(params) {
    document.write("<h3>Enter your password here: </h3><input type='password' id='pass'>");
    document.write("<br><button onclick='trigPromt4()'>Submit</button> <br> <h4 id='message'><h4>");
}

function trigPromt4(params) {
    const pass = 'cyberPass123';
    var userPass = document.getElementById('pass').value;
    if (userPass === pass) {
        document.getElementById('message').innerText = 'Correct!';
    } else {
        document.getElementById('message').innerText = 'Incorrect Password! (Pass: cyberPass123)';
    }
}


function Q6_Ans(params) {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.write(greeting);
}


function Q7_Ans(params) {
    
    document.write("<h3>Enter your password here: </h3><input type='time' id='time'><span id='msg'></span>");
    document.write("<br><button onclick='trigPromt5()'>Submit</button>");

}


function trigPromt5(params) {
    var time = document.getElementById('time').value
    var time = parseInt(time.replace(':',''))
    console.log(time)
    console.log(parseInt(time))

    if (time >= 0000  && time < 1200) {
        document.getElementById('msg').innerText = "'Good Moring!'"
    } else if(time >= 1200 && time < 1700){
        document.getElementById('msg').innerText = "'Good Afternoon!'"
    } else if(time >= 1700 && time < 2100){
        document.getElementById('msg').innerText = "'Good Evening!'"
    } else if(time >= 2100 && time < 2359){
        document.getElementById('msg').innerText = "'Good Night!'"
    }
}
