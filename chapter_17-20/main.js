function seprt(params) {
    document.write("<br> ________________________________________________ <br>");
}

function Q1_Ans(params) {
    var sScore = [86, 67, 59, 90, 39];
    var sDetails = [sScore];
    document.write('Multi-Dimensional Array: ' + sDetails);

}


function Q2_Ans(params) {
    var items = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]
    ];
    console.log(items[0]);
    console.log(items[1]);
    console.log(items[2]);
    console.table(items);
    document.write(items[0] + '<br>');
    document.write(items[1] + '<br>');
    document.write(items[2] + '<br>');
    document.write('Multi-Dimensional Array: ' + items);

}


function Q3_Ans(params) {
    for (let i = 1; i <= 10; i++) {
        document.write(i + '<br>');
    }
}


function Q4_Ans(params) {
    document.write("<br> <button onclick='trigPromt1()'>Click Here</button>");
}

function trigPromt1(params) {
    var num = parseInt(prompt('Enter a number to show its multiplication table'));
    var length = parseInt(prompt('Enter a number to show its multiplication table'));
    for (let i = 1; i <= length; i++) {
        document.write(`${num} x ${i} = ${i * num} <br>`);

    }
}


function Q5_Ans(params) {
    document.write("<br> <button onclick='trigPromt2()'>Click Here</button>");
}

function trigPromt2(params) {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    for (let i = 0; i < fruits.length; i++) {
        document.write(`Element at index ${i} is ${fruits[i]}<br>`);
    }
}


function Q6_Ans(params) {
    var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    /*for (let i = 0; i < counting.length; i++) {
        var numbers = document.write(counting[i]);
    } */
    document.write('<br> Counting: ' + counting);
    document.write('<br> Reverse Counting: ' + counting.reverse());

    var evenNum = [];
    counting.forEach(num => {
        if (num % 2 === 0) {
            evenNum.unshift(num);
        }
    })
    document.write('<br> Even: ' + evenNum);

    var oddNum = [];
    counting.forEach(num => {
        if (num % 2 === 1) {
            oddNum.unshift(num);
        }
    })
    document.write('<br> Odd: ' + oddNum);
    var series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
    document.write('<br> Series: ' + series);
}


function Q7_Ans(params) {
    document.write("<br> <button onclick='trigPromt3()'>Click Here to search item in our ABC Bakery</button>");
}

function trigPromt3(params) {
    var bakery = ['cake', 'apple', ' pie', 'cookie', 'chips', 'patties']

    let input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")

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

function Q8_Ans(params) {
    let num = [24, 53, 78, 91, 12]
    document.write('Array items: ' + num);
    
    document.write('<br>The largest number is: ' + Math.max(...num));
}


function Q9_Ans(params) {
    let num = [24, 53, 78, 91, 12]
    document.write('Array items: ' + num);
    
    document.write('<br>The smallest number is: ' + Math.min(...num));
}

function Q10_Ans(params) {
    for (let i = 1;i <= 20;i++) {
        document.write(i*5+', ');
        
    }
}