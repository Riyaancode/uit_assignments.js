function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}

function Q1_Ans(params) {
    document.write(new Date());
}

function Q2_Ans(params) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    document.write(`<h3>Current month ${monthNames[date.getMonth()]}</h3>`);
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
    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 15);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return document.write(days);
    }
    getDaysInMonth(7, 2022)
}

function Q6_Ans(params) {

    var todayDate = new Date();
    var Todaymilli = todayDate.getTime();
    var todayMin = todayDate.getMinutes();
    var diff = Todaymilli - todayMin;
    var diffMin = diff / (1000 * 60 * 60); // I found a solution from google but I did not understand what was going on in this line 
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
    let date = new Date(2020, 11,31)
    document.write(date)
}

function Q9_Ans(params) {
    let date = new Date(2015, 5,18)
    let daysPass = date.getDay();
    document.write(daysPass)
}