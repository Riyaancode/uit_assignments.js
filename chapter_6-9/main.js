
function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}


function Q1_Ans(params) {
    let a = 10;
    document.write("Result: <br> The value of a is:" + a);

    document.write("<br> ------------------------------------");

    document.write("<br> The value of ++a is: " + ++a);
    document.write("<br> Now The value of a is: " + a);

    document.write("<br><br> The value of a++ is: " + a++);
    document.write("<br> Now The value of a is: " + a);

    document.write("<br><br> The value of --a is: " + --a);
    document.write("<br> Now The value of a is: " + a);

    document.write("<br><br> The value of a-- is: " + a--);
    document.write("<br> Now The value of a is: " + a);
}


function Q2_Ans(params) {
    var a = 2, b = 1;
    document.write("<br> The value of a is: " + a);
    document.write("<br> The value of b is: " + b);

    var result = --a - --b + ++b + b--;
    document.write("<br> The result of --a - --b + ++b + b-- is: " + result);

    document.write("<br>-------------------------------------------------<br> Explaination:");
    document.write("<br> The value of --a is: 1");
    document.write("<br> The value of --b is: 0");
    document.write("<br> The Output of --a - --b (1 - 0) is: 1");
    document.write("<br> The Output of --a - --b + ++b (1 - 0 + 2) is: 3");
    document.write("<br> The Output of --a - --b + ++b + b-- (1 - 0 + 2 + 0) is: " + result);
}


function Q3_Ans(params) {
    document.write("<br> <button id='bgnBtn' onclick='trigPromt1()'>Click Here</button>");
}

function trigPromt1() {
    var name = prompt("Enter your name: ");

    function output(_name) {
        alert("Hi " + _name + ", Welcome to the Club");
    }
    if (name == "") {
        output("user");
    } else {
        output(name);
    }


}


function Q5_Ans(params) {

    document.write("<br> <button id='bgnBtn' onclick='trigPromt2()'>Click Here</button>");
}

function trigPromt2(params) {
    var input = prompt("Enter Number", "5")

    function tab(inp) {
        var i = inp;
        document.write('<table border="1" cellspacing="0">');
        for (i = 1; i <= 10; i++) {
            document.write("<tr><td>" + inp + " x " + i + " = " + inp * i + "</td></tr>");
        }
    }

    if (!input == "") {
        if (!input.match(/^\d+/)) {
            alert("Please only enter numeric characters only")
        } else {

            tab(input);
        }
    } else {
        tab(5);
    }
}


function Q6_Ans(params) {

    document.write('<h3> Student Result </h3><form name="forum" onsubmit="return getReport()"><table><tr><th> Subjects Name </th><th> Obtain Marks </th></tr><tr> <td><input type="text" id="subname1" ></td> <td><input type="number" max ="100" id="obtmarks1" ></td> </tr><tr><td><input type="text" id="subname2" > </td><td><input type="number" max ="100" id="obtmarks2" ></td></tr><tr><td><input type="text" id="subname3" ><td><input type="number" max ="100" id="obtmarks3" ></td> </td></tr><tr><td> <input type="submit" id="subb"  value="SUBMIT"> </td></tr></table></form>');
    document.write('<table border="1"><tr><th>Subject</th><th>Total Marks</th><th>Obtain Marks</th><th>Percentage</th></tr><tr><td id="sub1"></td><td>100</td><td id="obtainmarks1"></td><td id="sub1per"></td></tr><tr><td id="sub2"></td><td>100</td><td id="obtainmarks2"></td><td id="sub2per"></td></tr><tr><td id="sub3"></td><td>100</td><td id="obtainmarks3"></td><td id="sub3per"></td></tr><tr><td></td><td id="totalsubmarks"></td><td id="totalobtmarks"></td><td id="percentage"></td></tr></table>');
        
    
}

function trigPromt3(params) {
    /*
    let subj = [], subj_inpt, i = 1;

    while (subj_inpt = prompt(`Enter your Subject no ${i++}`)) {
        subj = subj.concat(subj_inpt.split(" "));
        if (i == 4) break;
    }

    for (let i = 0; i < subj.length; i++) {
        console.log(subj[i]);
    }


    let obtmarks = [], obtmarks_input, j = 0;
    while (obtmarks_input = prompt("Enter your Obtain Marks in " + subj[j++])) {
        obtmarks = obtmarks.concat(obtmarks_input.split(" "));
        if (j == 3) break;
    }

    for (let j = 0; j < obtmarks.length; j++) {
        console.log(obtmarks[j]);
    }


    var english = subj[0], urdu = subj[1], maths = subj[2];
    var eng_marks = obtmarks[0], urdu_marks = obtmarks[1], maths_marks = obtmarks[2];
    var total_marks = 100;

    */


    //document.write(subj);
    // console.log(obtmarks_input);
    // console.log(j);
}

function getReport() {

    var sub1 = document.getElementById('subname1').value;
    var sub2 = document.getElementById('subname2').value;
    var sub3 = document.getElementById('subname3').value;

    var obtm1 = parseInt(document.getElementById('obtmarks1').value);
    var obtm2 = parseInt(document.getElementById('obtmarks2').value);
    var obtm3 = parseInt(document.getElementById('obtmarks3').value);

    var totalobtmarks = obtm1 + obtm2 + obtm3;
    
    var percentage = (totalobtmarks * 100) / 300;
    var sub1perc = (obtm1 * 100) / 100;
    var sub2perc = (obtm2 * 100) / 100;
    var sub3perc = (obtm3 * 100) / 100;

    
    document.getElementById('sub1').innerHTML = sub1;
    document.getElementById('sub2').innerHTML = sub2;
    document.getElementById('sub3').innerHTML = sub3;
    document.getElementById('obtainmarks1').innerHTML = obtm1;
    document.getElementById('obtainmarks2').innerHTML = obtm2;
    document.getElementById('obtainmarks3').innerHTML = obtm3;
    document.getElementById('totalobtmarks').innerHTML = totalobtmarks;
    document.getElementsByClassName('totalmarks').innerHTML = 100;
    document.getElementById('totalsubmarks').innerHTML = 300;
    document.getElementById('percentage').innerHTML = parseFloat(percentage).toFixed(2)+"%";
    document.getElementById('sub1per').innerHTML = sub1perc + "%";
    document.getElementById('sub2per').innerHTML = sub2perc + "%";
    document.getElementById('sub3per').innerHTML = sub3perc + "%";


    return false; //stop the form posting back

}