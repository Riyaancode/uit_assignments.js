
function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}
let samplArray = [];

function Q1_Ans(params) {
    let samplArray = [];
    document.write(samplArray);
}


function Q2_Ans(params) {
    var studentsNames = {};
    document.write(studentsNames);
}


function Q3_Ans(params) {
    let stringArray = new Array();
    stringArray[0] = "str1";
    stringArray[1] = "str2";
    stringArray[2] = "str3";
    stringArray[3] = "str4";
    document.write(stringArray);
}


function Q4_Ans(params) {
    let numArray = new Array();
    numArray[0] = 1;
    numArray[1] = 2;
    numArray[2] = 3;
    numArray[3] = 4;
    document.write(numArray);
}


function Q5_Ans(params) {
    const boolArr = new Array(3).fill(true);
    document.write(boolArr);
}


function Q6_Ans(params) {
    let mixArray = new Array();
    mixArray[0] = "string";
    mixArray[1] = 1, 2, 3;
    mixArray[2] = true;
    document.write(mixArray);
}


function Q7_Ans(params) {
    document.write("<ol id='eduquallist'></ol>");
    let eduQualification = new Array();
    eduQualification[0] = "SSC";
    eduQualification[1] = "HSC";
    eduQualification[2] = "BCS";
    eduQualification[3] = "BS";
    eduQualification[4] = "BCOM";
    eduQualification[5] = "MS";
    eduQualification[6] = "M. Phil";
    eduQualification[7] = "PhD";

    let list = document.getElementById("eduquallist");

    eduQualification.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })

}


function Q8_Ans(params) {

    document.write('<h3>Score of <span id="sname1"></span> is <span id="marksobt1"></span>. Percentage: <span id="percent1"></h3>')
    document.write('<h3>Score of <span id="sname2"></span> is <span id="marksobt2"></span>. Percentage: <span id="percent2"></h3>')
    document.write('<h3>Score of <span id="sname3"></span> is <span id="marksobt3"></span>. Percentage: <span id="percent3"></h3>')

    var students = ["Michael", "Jhon", "Tony"];
    var studentScore = [320, 230, 480];
    var s1Name = students[0];
    var s2Name = students[1];
    var s3Name = students[2];
    var s1Score = studentScore[0];
    var s2Score = studentScore[1];
    var s3Score = studentScore[2];
    var totalMarks = 500;

    document.getElementById("percent1").innerHTML = parseFloat((studentScore[0] * 100) / totalMarks).toFixed(2) + "%";
    document.getElementById("marksobt1").innerHTML = s1Score;
    document.getElementById("sname1").innerHTML = s1Name;

    document.getElementById("percent2").innerHTML = parseFloat((studentScore[1] * 100) / totalMarks).toFixed(2) + "%";
    document.getElementById("marksobt2").innerHTML = s2Score;
    document.getElementById("sname2").innerHTML = s2Name;

    document.getElementById("percent3").innerHTML = parseFloat((studentScore[2] * 100) / totalMarks).toFixed(2) + "%";
    document.getElementById("marksobt3").innerHTML = s3Score;
    document.getElementById("sname3").innerHTML = s3Name;

}

var colors = ["Red", "Yellow", "Green", "Black", "White"];


function Q9_Ans(params) {
    function innerSeprt(params) {
        document.write("<br> --------------------------- <br>");
    }
    document.write("<h3>Default Array:</h3><ol id='colorsList'></ol>");

    document.write('<h3>A) Choose the color you want to Add at the begining of the Array</h3><form><select id="begincolors"><option>Blue</option><option>Orange</option><option>Grey</option><option>Purple</option><option>Pink</option><option>Cyan</option></select><br><br><button onclick="trig1()">Submit</button></form>');
    innerSeprt();
    document.write('<h3>B) Choose the color you want to Add at the End of the Array</h3><form><select id="endcolors"><option>Blue</option><option>Orange</option><option>Grey</option><option>Purple</option><option>Pink</option><option>Cyan</option></select><br><br><button onclick="trig2()">Submit</button></form>');
    innerSeprt();
    document.write('<h3>C) Select colors to Add at the begining of the Array, you know </h3> Blue:   <input type="checkbox" id="1"  class="checkbox" value="Blue"> <br> Orange: <input type="checkbox" id="2" class="checkbox" value="Orange"> <br> Cyan: <input type="checkbox" id="3" class="checkbox" value="Cyan"> <br> Grey: <input type="checkbox" id="4" class="checkbox" value="Grey"> <br> Violet: <input type="checkbox" id="5" class="checkbox" value="Violet"><br><br><button onclick="getCheckboxValue()">Submit</button> <br><h4 id="result"></h4></div>');
    innerSeprt();
    document.write('<h3>D) Click the button to delete first[0] color("Red") from the (Default) Array </h3><button onclick="displayArr()">Default Array</button><button onclick="trig3()">Click to delete</button></form>');
    innerSeprt();
    document.write('<h3>E) Click the button to delete last[4] color("White") from the (Default) Array </h3><button onclick="displayArr()">Default Array</button><button onclick="trig4()">Click to delete</button></form>');
    innerSeprt();
    document.write('<h3>F) Choose the color and select at what index you want to Add color in Array</h3><form>Color:  <select id="addcolors"><option>Blue</option><option>Orange</option><option>Grey</option><option>Purple</option><option>Pink</option><option>Cyan</option></select><br><br>Index:  <select id="indxarr"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select><br><br><button onclick="trig5()">Submit</button></form>');
    innerSeprt();
    document.write('<h3>G) Select at what index you want to delete colors and from index how much colors you want to delete in array</h3><form>Index:  <select id="indxofarr"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>   <br><br>Select from index how much colors you want to remoce:  <select id="howmuch"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select><br><br><button onclick="displayArr()">Default Array</button><button onclick="trig6()">Click to Delete</button></form>');



    var list = document.getElementById("colorsList");

    colors.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
}


function displayArr() {
    document.write("<ol id='colorsList'></ol>");
    var list = document.getElementById("colorsList");

    colors.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
}

function trig1(params) {
    let select = document.getElementById('begincolors');
    let color = select.options[select.selectedIndex].text;

    colors.unshift(color);
    displayArr();
}

function trig2(params) {
    let select = document.getElementById('endcolors');
    let color = select.options[select.selectedIndex].text;

    colors.push(color);
    displayArr();
}


function getCheckboxValue() {

    var checkbox = document.getElementsByClassName('checkbox');

    for (let i = 1; i <= checkbox.length; i++) {
        var selectchecbox = document.getElementById(i)
        if (selectchecbox.checked) {
            console.log(selectchecbox.value)
            colors.unshift(selectchecbox.value);
        }
    }
    displayArr();

}

function trig3(params) {
    colors.shift();
    displayArr();
}

function trig4(params) {
    colors.pop();
    displayArr();
}

function trig5(params) {
    let select = document.getElementById('addcolors');
    let color = select.options[select.selectedIndex].text;

    let index = document.getElementById('indxarr');
    let value = index.options[index.selectedIndex].text;

    colors.splice(value, 0, color);
    displayArr();
}

function trig6(params) {
    let howMuch = document.getElementById('howmuch');
    let value = howMuch.options[howMuch.selectedIndex].text;
    console.log(value)
    let index = document.getElementById('indxofarr');
    let indxValue = index.options[index.selectedIndex].text;
    console.log(indxValue)
    colors.splice(indxValue, value);
    displayArr();
}





function Q10_Ans(params) {
    let SoS = [320, 230, 480, 120];
    document.write(`<h3>Scores of Students: ${SoS}</h3>`);
    let ascSoS = SoS.sort();
    document.write(`<h3>Ordered Scores of Students: ${ascSoS}</h3>`);
}

function Q11_Ans(params) {
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    document.write(`<h3>Cities list: ${cities}</h3>`);
    let selectedCities = [cities[2], cities[3]];
    document.write(`<h3>Selected cities list: ${selectedCities}</h3>`);
}

function Q12_Ans(params) {
    let strArr = ["This", "is", "my", "cat"];
    document.write(`<h3>Array: ${strArr}</h3>`);
    let singleStr = strArr.join(" ");
    document.write(`<h3>String: ${singleStr}</h3>`);
}

function Q13_Ans(params) {
    const arr = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
    document.write(`<h3>Devices: ${arr}</h3>`);
    const output = arr.values();

    for (const value of output) {
        document.write(`<h4>Out: ${value}</h4>`);
    }
}


function Q14_Ans(params) {
    const arr = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
    document.write(`<h3>Devices: ${arr}</h3>`);

    const revArr = arr.reverse();
    const output = revArr.values();

    for (const value of output) {
        document.write(`<h4>Out: ${value}</h4>`);
    }
}


function Q15_Ans() {
    var phoneManufacturers = ["Apple", "Samsung", "Nokia", "Motorola", "Sony", "Haier"]
    document.write("<select id='companies'></select>");
    var items = document.getElementById("companies");

    phoneManufacturers.forEach((item) => {
        let option= document.createElement("option");
        option.innerText = item;
        items.appendChild(option);
    })
}






