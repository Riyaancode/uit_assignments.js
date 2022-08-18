function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}


function Q1_Ans(a, b) {
    let num = 1;
    for (let i = 0; i <= b; i++) {
        num = num * a;
    }
    return document.write(num);
}


function Q2_Ans(params) {
    document.write('<button onclick="trigFunct1()">Click to check leap year</button>')
}

function trigFunct1(params) {
    let year = prompt('Enter a year:');
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert(year + ' is a leap year');
    } else {
        alert(year + ' is not a leap year');
    }
}


function Q3_Ans(params) {
    document.write('<h3>Enter the sides of triangle</h3>A: <input type="number" id="a"><br>B: <input type="number" id="b"><br>C: <input type="number" id="c"><br><h4 id="area"></h4><button onclick="trigFunct2()">Submit</button>')
}

function trigFunct2(params) {
    var A = parseInt(document.getElementById('a').value);
    var B = parseInt(document.getElementById('b').value);
    var C = parseInt(document.getElementById('c').value);

    function calArea(a, b, c) {
        var S = (a + b + c) / 2;
        var Area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
        return Area;
    }

    document.getElementById('area').innerHTML = `Area = ${calArea(A, B, C)}`;
}


function Q4_Ans(params) {
    document.write('<h3>Marks receive by student</h3>Subject #01: <input type="number" id="sub1"><br>Subject #02: <input type="number" id="sub2"><br>Subject #03: <input type="number" id="sub3"><br><h4 id="avg"></h4><h4 id="per"></h4><button onclick="trigFunct3()">Submit</button>')

}

function trigFunct3(params) {
    var sub1 = parseInt(document.getElementById('sub1').value);
    var sub2 = parseInt(document.getElementById('sub2').value);
    var sub3 = parseInt(document.getElementById('sub3').value);

    new percentage().calAvg(sub1, sub2, sub3);
    new percentage().calPercnt(sub1, sub2, sub3);
}

function percentage() {

    this.calAvg = function (a, b, c) {
        var avg = (a + b + c) / 3
        document.getElementById('avg').innerHTML = `Average: ${avg.toFixed(2)}`
    }
    //calAvg(a,b,c);
    this.calPercnt = function (a, b, c) {
        var per = ((a + b + c) / 300) * 100
        document.getElementById('per').innerHTML = `Percentage: ${per.toFixed(2)}%`
    }
    //  calPercnt(a,b,c);
}


function Q5_Ans(params) {

    function indexof(str, char) {
        let i = 0;
        while (i < str.length) {
            if (str[i] == char) {
                return `Index of character "${char}" is ${i}`
            }
            i++
        }
        return 'not found';
    }
    document.write(indexof("An apple in a day good for health", "a"))

}


function Q6_Ans(params) {
    let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis posuere elementum. Etiam erat metus, consequat in libero ac, scelerisque placerat nisi. Maecenas gravida auctor";
    let result = str.replace(/[aeiou]/gi, '');
    document.write(result);
}




//
function Q7_Ans(params) {
    // let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis posuere elementum. Etiam erat metus, consequat in libero ac, scelerisque placerat nisi. Maecenas gravida auctor";
    // var chars = str.toLowerCase().split("");
    // var count = 0;

    // for (let i = 0; i < chars.length - 1; i++) {//can't understand
    //     var char = chars[i];
    //     var next = chars[i + 1];

    //     if (isCorrectCharacter(char) && isCorrectCharacter(next)) {
    //         count++//can't understand
    //     }
    // }

    // return count;
    document.write(":(")
}

// function isCorrectCharacter(char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }

function Q8_Ans(params) {
    document.write('<h2>Enter the Value in kilometers</h3><input type="number" id="kl"><br><h3 id="val"></h3><button type="submit" onclick="meter()">Covert to Meter</button><button type="submit" onclick="feet()">Covert to Feet</button><button type="submit" onclick="inches()">Covert to Inches</button><button type="submit" onclick="centimeter()">Covert to Centimeter</button>');
}

function meter(params) {
    let kl = document.getElementById('kl').value;
    var meter = kl*1000;
    document.getElementById('val').innerText= 'to Meter ' + meter;
}

function feet(params) {
    let kl = document.getElementById('kl').value;
    var feet = kl* 3280.839895;
    document.getElementById('val').innerText= 'to Feet ' + feet;
}

function inches(params) {
    let kl = document.getElementById('kl').value;
    var inches = kl* 39370.1;
    document.getElementById('val').innerText= 'to Inches ' + inches;
}

function centimeter(params) {
    let kl = document.getElementById('kl').value;
    var cm = kl* 100000;
    document.getElementById('val').innerText= 'to Centimeter ' + cm;
}