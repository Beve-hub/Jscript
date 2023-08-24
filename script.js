
// let js = "amazing"
// if (js === "amazing") alert("stage 1 learning!")

// let firstName = "Godfather";

// console.log(firstName + js); 

// let javascript = true;
//console.log(javascript);

//javascriptIssues = 'YES!'; console.log(typeof javascriptIssues);


// mathematical operators
/*
const ageJoes = 'joy';
console.log(ageJoes);

const now = 2023;
const ageSam = 1977;
const ageKate = 'nancy';
console.log(ageSam, ageKate);

console.log(ageKate +' '+ ageJoes );
*/
/*
const firstName = 'John';
const lastName = 'doe';
console.log(firstName + '' + lastName);

console.log(firstName > lastName)


let x, y;
x = y= 25 - 10 - 5;
console.log(x,y);
*/








//Day 2 of 100

//coding challenge

// test 1

/*
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;


let BMIMark = markWeight / markHeight ** 2;
let BMIJohn = johnWeight / (johnHeight * johnHeight);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIJohn > BMIMark;
console.log(markHigherBMI);

let marWeight = 95;
let marHeight = 1.88;

let johWeight = 85;
let johHeight = 1.76;


let BMIMar = markWeight / markHeight ** 2;
let BMIJoh = johnWeight / (johnHeight * johnHeight);

console.log(BMIMar, BMIJoh);

let marHigherBMI = BMIJoh <  BMIMar;
console.log(marHigherBMI);
 */

/*
//
 const firstName = 'John';
 const job = 'programmer';
 const birthDate = 1990;
 const year = 2025;

 const details = "I'm" + firstName + ',a ' + (year - birthDate) + 'year old ' + job + '!';

 console.log(details);

const result = `I'm ${firstName}, a ${year - birthDate} year old ${job}!`;

console.log(result);

console.log(`just a regular strings.....`)

console.log('string with \n\ multiple \n\ lines' ); 

console.log(`code in
multiple
lines`) */
/*
const age = 19;
const isOldEnough = age >= 18 ;

if (isOldEnough) {
    console.log('emeka can drive')
} else if (age <= 18) {
    console.log(' he is too young to drive')
}
*/

/*
const age = 15;

if (age >= 18) {
    console.log (`she is an adult now`)
} else {
    const yearLeft = 18 - age;
    console.log (`alcohol can't be sold wait for ${yearLeft} years :`)
};


const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century);


let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;

let BMIMark = markWeight / markHeight ** 2;
let BMIJohn = johnWeight / (johnHeight * johnHeight);

if (BMIMark <= BMIJohn) {
    console.log(`mark BMI is more than john BMI`)
} else {
    console.log(`john BMI is more than mark BMI`)
}


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;");
}else {
    console.log('you should get a job!');
}

const favourite = prompt("what is your number?");
console.log(favourite);

if (favourite === 23) {
    console.log(`cool ! 23 is more than mark BMI`)
} else if (favourite === 23) {
    console.log(`cool! 7 is more than mark BMI`)
}else{
        console.log(`number  is not found`)
}
*/


//Day 3
/*

const hasDriversLicens = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicens && hasGoodVision); // A AND B
console.log(hasDriversLicens || hasGoodVision);  // A OR B
console.log(!hasGoodVision); // NOT B = !B

if (hasDriversLicens && hasGoodVision) {
    console.log('victor should drive')
} else {
    console.log('victor should not dirve')
}

const isTired = true; // C
console.log(hasDriversLicens && hasGoodVision || isTired)


*/
//challenge

//Test 1
/*
const averageDolphins = ((96 + 108 + 89 )/ 3);
const averageKoalas = ((88 + 91 + 110 )/ 3);

if(averageDolphins > averageKoalas && averageDolphins >= 100 ) {
    console.log('Dolphins wins the competions');
}  else if(averageKoalas > averageDolphins && averageKoalas >= 100 ){
    console.log('Koalas wins the competitions');
}else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log('Both teams are equal');
} else {
    console.log('No one wins');
}

//Test 2

const scoreDolphins = ((97 + 112 + 81 )/ 3);
const scoreKoalas = ((109 + 95 + 86 )/ 3);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100 ) {
    console.log('Dolphins wins the competions');
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100 ){
    console.log('Koalas wins the competitions');
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both teams are equal');
} else {
    console.log('No one wins');
}
*/

// switch statement 

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('plan well');
        break;
        case 'Tuesday':
            console.log('eat well');
            break;
    case 'wednesdays':
    case 'thursday':
        console.log('code well')
        break;
    default:
        console.log('not a valid day')                
}



// if else statements
if (day) {
    console.log('plan well')
} else if (day === 'tuseday') {
   console.log('eat well')
}else if(day === 'wednesday' || day === 'thursday') {
    console.log('code well')
}else {
    console.log('not a valid day')
}

