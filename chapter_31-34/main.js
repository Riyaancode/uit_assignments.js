function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}

function Q1_Ans(params) {
    document.write(new Date());
}

function Q2_Ans(params) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    document.write(`<h3>Current month: ${monthNames[date.getMonth()]}</h3>`);
}

function Q3_Ans(params) {
    var currentDay = new Date();
    var strDay = currentDay.toString();
    var day = strDay.slice(0, 3);
    document.write(`<h3>Today is ${day}</h3>`);
}


function Q4_Ans(params) {
    var today = new Date();
    if (today.getDay() == 4 || today.getDay() == 0) {
        document.write('It’s Fun day')
    }
}


function Q5_Ans(params) {
document.write('<h1>First fifteen days of the month</h1>')
    var date = new Date(2022, 7, 1);
    var days = [];

    for (let i = 0; i < 15; i++) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);

    }
    return document.write(days);

}

function Q6_Ans(params) {

    var todayDate = new Date();
    var Todaymilli = todayDate.getTime();
    var todayMin = todayDate.getMinutes();
    var diff = Todaymilli - todayMin;
    var diffMin = diff / (1000 * 60 * 60);
    var accurateMin = Math.floor(diffMin);


    document.write("Current Date: " + todayDate);
    document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
    document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)
}


function Q7_Ans(params) {
    var today = new Date()
    var curntHr = today.getHours()

    if (curntHr < 12) {
        document.write('It\'s AM')
    } else if (curntHr < 24) {
        document.write('It\'s PM')
    }
}


function Q8_Ans(params) {
    let date = new Date(2020, 11, 31)
    document.write(`Later date: ${date}`)
}

function Q9_Ans(params) {
    var Pdate = new Date(2015, 5, 1);
    var Cdate = new Date();
    let diff = Cdate.getTime() - Pdate.getTime();
    let TotalDays = Math.ceil(diff / (1000 * 3600 * 24));
    document.write(`${TotalDays} days have passed sinece ${Pdate.getDay()}st Ramadan, ${Pdate.getFullYear()}`);
}


function Q10_Ans(params) {
    var startTime = new Date(2015, 0);
    var endTime = new Date(2015, 11, 05, 22, 50, 16);
    var dif = endTime.getTime() - startTime.getTime();
    var minutes = Math.floor(dif / 60000);
    var seconds = ((dif % 60000) / 1000).toFixed(0);
    document.write(`On reference date ${endTime}, ${minutes}:${(seconds < 10 ? '0' : '')}${seconds} seconds had passed since beggining of 2015`);

}


function Q11_Ans(params) {
    let currentDate = new Date();
    document.write("Current date: "+currentDate + "<br>");
    currentDate.setHours(currentDate.getHours() - 1);
    document.write("1 hour ago, it was "+currentDate);
}

function Q12_Ans(params) {
    let currentDate = new Date();
    document.write("Current date: "+currentDate + "<br>");
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    document.write("100 years back, it was "+currentDate);
}


function Q13_Ans(params) {
    document.write("Enter your Age here: <input type='number' id='userage'><button type='submit' onclick='trigFunct1()'>Submit</button><br><h3 id='age'></h3><br><h3 id='year'></h3>");
    
    
   
}

function trigFunct1(params) {
    let age = parseInt(document.getElementById('userage').value);
    let currentDate = new Date();
    let birthYear = currentDate.getFullYear() - age;
    document.getElementById('age').innerText = "Your age is: "+ typeof age;
    document.getElementById('year').innerText = "Your birth year is: "+ birthYear;
}


function Q14_Ans(params) {
    document.write('<h1>K-Electric Bill</h1>')

    var customerName = 'ABC Customer';
    var month = 'February';
    var units = 410;
    var chargPerUnit = 16;
    var netAmount_WDD = units * chargPerUnit;
    var latePaymentCharg = 350;
    var grossAmount_ADD = netAmount_WDD + latePaymentCharg;
    document.write(`Customer Name: <strong>${customerName}</strong><br>`);
    document.write(`Month: <strong>${month}</strong><br>`);
    document.write(`Number of units: <strong>${units}</strong><br>`);
    document.write(`charges per unit: <strong>${chargPerUnit}</strong><br><br>`);
    document.write(`Net Amount Payable (within Due Date): <strong>${netAmount_WDD}</strong><br>`);
    document.write(`Late payment surcharge: <strong>${latePaymentCharg}</strong><br>`);
    document.write(`Gross Amount Payable (after Due Date): <strong>${grossAmount_ADD}</strong><br>`);


}