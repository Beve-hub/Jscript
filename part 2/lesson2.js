/*
// Activating strict mode
'use strict';

let hasDriverLicense = false;
const passTest = true;

// it wont wor k because the strict mode indicated an error with the variable hasDriverLicense
if (passTest) hasDriverLicense = true;
if (hasDriverLicense)console.log('i can drive : D');
*/

/*
// it wont work cause the strict mode indicated that this are reserved words
const interface ="Audio";
const private = 532;
const if = 23;


//Functions

function logger() {
    console.log('my name is victor');
}


// calling / running / invoking function
logger();
logger();
logger();

function fruitProcess (apple, orange) {
    const juice = `juice with ${apple} and ${orange} oranges.`;
    return juice;
}

const applejuice = fruitProcess(5,0);
console.log(applejuice);


// function decleartion
function calcAge1(birthYear){
    return 2037 - birthYear; 
}
const age1 = calcAge1(1991);

// fuction expression
const calcAge2 = function (birthYear) {
    return 2037 -birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
 

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));

//calling a function inside a function : Dataflow


const cutPieces = function (fruit) {
    return fruit * 4;
};


function fruitProcess (apple, orange) {

    const applePieces = cutPieces(apple);
    const orangepieces = cutPieces(orange);

    const juice = `juice with ${applePieces} and ${orangepieces} oranges.`;
    return juice;
}

console.log(fruitProcess(2,3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else {
        console.log(`${firstName}already retired.`);
        return -1;
    }
    
   // return 
}
 console.log(yearsUntilRetirement(1991, 'jonas'));
 console.log(yearsUntilRetirement(1970, 'mark'));


//challenge

const calAverage = (a, b, c) => (a + b + c) / 3;
console.log(calAverage(3,4,5));

// Test 1
const scoreDolphins = calAverage(44, 23, 71);
const scoreKoalas = calAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`)
    }else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphin win (${avgKoalas} vs. ${avgDolphins})`)
    }else {
        console.log('No team wins....')
    }

}
 checkWinner (scoreDolphins, scoreKoalas);
 */
 /*
 //Dayu 5
 // Array 
 //const friend = new Array('micheal', 'steven', 'peter')
 //let friends = ['micheal', 'steven', 'peter']



 const friends = ['micheal', 'steven', 'peter']
 //methods of array

 // 1 push array
 friends.push('jay')
console.log(friends);

 // 2 unshift array
 friends.unshift('jay')
 console.log(friends);

  // 3 pop array
  friends.pop('jay')
  console.log(friends);

  // 4 pop array
  friends.shift('jay')
  console.log(friends);
 
   // 5 indexOf array
  console.log(friends.indexOf('steven'));
  console.log(friends.indexOf('Bob'));


    // 6 includes array
  friends.push(23);
  console.log(friends.includes('steven')); 
  console.log(friends.includes('Bob'));
  console.log(friends.includes('23'));



// object 

const jonas = {
    firstName: 'John',
    lastName: 'okeke',
    age: 2037 -1991,
    job: 'teacher',
    friends: ['micheal', 'steven', 'peter']
}
console.log(jonas);

//dot notation
console.log(jonas.firstName);



//Bracket notation
const nameKey = 'Name';
console.log(jonas['lastName']);
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey);

const intrestedIn = prompt('what do you want to know about jonas?  choose between firstname, lastname, age, job and friends');
console.log(jonas[intrestedIn])

if(jonas[intrestedIn]) {
    console.log(jonas[intrestedIn])
}else {
    console.log('Wrong request! choose between firstName, lastName, age, job and friends');
}
*/

/*

//Object method
// any function attached to an object is called "object method".

const jonas = {
    firstName: 'John',
    lastName: 'okeke',
    age: 2037 -1991,
    job: 'teacher',
    friends: ['micheal', 'steven', 'peter'],
    hasDriverslicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }   
}

// challenge
 const mark = {
 
    firstName: 'mark',
    lastName: 'miller',
    mass: '78',
    height: '1.69',
    calcBMI : function () {
        this.bmi = this.mass / this.height  ** 2;
        return this.bmi;
    }
 
 };

 const john = {
 
    firstName: 'john',
    lastName: 'smith',
    mass: '92',
    height: '1.95',
    calcBMI : function () {
        this.bmi = this.mass / this.height  ** 2;
        return this.bmi;
    }
 };

 mark.calcBMI();
 john.calcBMI();
 console.log(mark.bmi, john.bmi);

 if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI
     (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}`);
 }else if (john.bmi > mark.bmi) {
    console.log(`${john.firstName} ${john.lastName}'s BMI
     (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}`);
 }

 */

 // the For Loop

  //how to make a easy for loop


  /*
   console.log('lifting 1');
  console.log('lifting 2');
  console.log('lifting 3');
  console.log('lifting 4');
  console.log('lifting 5');
  console.log('lifting 6');
  console.log('lifting 7');
  console.log('lifting 8');
  console.log('lifting 9');
  console.log('lifting 10');
  

  // for loop keeps running while condition is true 
    // instead of write a for loop this way 

    for (let rep = 1; rep <= 10; rep++) {
        console.log(`lifting weight ${rep}`);
    }
    */
/*
    // example

    const jonas = [
        'jonas',
        'smith',
        2023 - 1990,
        'teacher',
        ['Michael', 'peter', 'steven'],
        true
    ];

    for (let i = 0; i < jonas.length; i++) {
        console.log(jonas[1], typeof[i]);
    }
    

    // example

    const years = [1991, 2007, 1969, 2020];
    const ages = [];

    for ( let i = 0; i < years.length; i++) {
        ages.push(2037 - years[i]);
    }
    console.log(ages);


    // continue and break
    // a continue loop is quite different from a break condition
    // continue loop allows the code to exclude the particular condition assign while and break terminate the other conditions assign to it
    
    // example
    console.log('-- ONLY STRING--')
    for (let i = 0; i < jonas.length; i++) {
        if (typeof jonas[i] !== 'string') continue;
        console.log(jonas[i], typeof jonas[i] );
    }

    console.log('-- BREAK WITH NUMBER --')
    for (let i = 0; i < jonas.length; i++) {
        if (typeof jonas[i] !== 'string') break;
        console.log(jonas[i], typeof jonas[i] );
    }
    */

   // looping backward and loops in loops

   // looping backward
   
   const jonas = [
        'jonas',
        'smith',
        2023 - 1990,
        'teacher',
        ['Michael', 'peter', 'steven'],
        true
    ];

    for (let i = jonas.length - 1; i >= 0; i--) {
        console.log(i, jonas[i]);
    }

    // loop in loop

    for (let excercise = 1; excercise <= 4; excercise++) {
        console.log(`-------Starting excercise ${excercise}`);


        for (let rep = 1; rep < 6; rep++) {
            console.log(`Lifting weight repetition ${rep}`);
        }
    }

    // while loop

    let rep = 1;
    while (rep <= 10) {
        console.log(`lifting weight ${rep}`);
        rep++;
    }

    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === 6) console.log('loop is about to end....')
    }