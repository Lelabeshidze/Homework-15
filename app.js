// დავალება1
const currentDay = new Date().getDay()
switch (currentDay) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
        day = "Thursday";
        break;
    case 5:
    day = "Friday";
        break;
        case 6:
    day = "Saturday";
}
console.log (day);

// დავალება2
for ( let i=0; i<100; i++) {
    console.log (i);
}

// დავალება3
let numbers = 0;
while (numbers<50) {
    console.log (numbers);
    numbers++;
}

// დავალება4
let doIndex=0;
do {
    console.log (doIndex);
    doIndex++;
} while (doIndex<150)

// დავალება5
    const firstArray = [];
    let secondArray = 0;
    for (let i = 0; i <10000; i++) {
        secondArray = i * i 
        firstArray.push(secondArray);
    }
console.log (firstArray);

// დავალება6
let array = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1]
let largest = array[0];
let secondlargest = array[0];
for (let i = 0; i < array.length; i++) {
    if (largest < array[i] ) {
        largest = array[i];
    } 
    else if(array[i] > secondlargest && array[i] !=largest) 
        secondlargest=array[i];
}
console.log(secondlargest);

let numbersarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let largestN = numbersarray[0];
let secondlargestn = numbersarray[0];
for (let i = 0; i < numbersarray.length; i++) {
    if (largestN < numbersarray[i] ) {
        largestN = numbersarray[i];
    } 
    else if(numbersarray[i] > secondlargestn && numbersarray[i] !=largestN ) 
        secondlargestn=numbersarray[i];
    
}
console.log(secondlargestn);


let thirdarray = [ 2, 3, 6, 6, 5 ]
let largestnumber = thirdarray[0];
let secondlargestnumber = thirdarray[0];
for (let i = 0; i < thirdarray.length; i++) {
    if (largestnumber < thirdarray[i] ) {
        largestnumber = thirdarray[i];
    } 
    else if(thirdarray[i] > secondlargestnumber && thirdarray[i] !=largestnumber) 
        secondlargestnumber=thirdarray[i];
}
console.log(secondlargestnumber);