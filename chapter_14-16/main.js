
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

}