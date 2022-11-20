// create variable and password

// write if statement, console logs true if password is over 7 characters 
//or false otherwise

const password = 'password'
const length = password.length;

if(password.length > 7){
    console.log('available')
}else{
    console.log('incorrect')
}


// control flow height test

//to get on roller coster be above 150 cm
//you can go on the ride if above if not sorry you are not tall enought
//modity if statement if height is not a number - please enter number


const height = 150;

if(height >= 150 && typeof height === 'number'){
    console.log('you can get on this ride')
}else{
    console.log('you cannot get on this ride')
}
if(typeof height === 'string'){
    console.log('please type a number')
}




// Dice Prize throw two sice

//throw 2 6 win top prize
//throw a double number, other than a six you win 3 free throws
//throw an even number, you win one free throw
//any other combination you lose the game


//use math random

const dice1 = Math.floor(Math.random()* 6) + 1;
const dice2 = Math.floor(Math.random()* 6) + 1;
console.log(dice1);
console.log(dice2);


if (dice1 === 6 && dice2 === 6){
    console.log('You WIN top prize')
}else if (dice1 === dice2 ){
    console.log('You GET 3 throws')
}else if (dice1 && dice2 === 2 || 4 || 6 ){
    console.log('free throw')
}else{
    console.log('you lose')
}




//Exercise 3
//favourite food

//
let favouriteFood = 'Pizza'
let pizza1 = favouriteFood.toUpperCase();
//let pizza2 = favouriteFood.toLowerCase();



//Exercise 5
// Cocatenantion

//
const myName = `Alessia`
const myAge =  27
const reply = `What is your name?`

const introduction =`hello my name is ${myName} and I am ${myAge} years old. ${reply}.`
console.log(introduction)



//FUNCTIONS---------------------------------------------------------------------------------------------------
console.log('--------------FUNCTIONS--------------')


//findAndReplace // return new string of text

let search = "hi";
let find = "how are you?";
let newGreeting = "hello";

function findAndReplace(){
    const greeting = newGreeting.replace(search,newGreeting)
    console.log(`${greeting},${find}`)
}

//invocation
findAndReplace();


//simple function-----------------------------------------------------------

function helloWorld(){
console.log('Hello World');
}

helloWorld();


//Quadrupler---------------------------------------------------------------

const num1 = 2;

function quadrupler(){
const result1 = num1 * 4;
console.log(result1)
}
//invoke
quadrupler();

// WELCOME MESSAGE ----------------------------------------------------------

let firstName = "Geralt";
let lastName = "Of Rivia";

function welcome(){
const name1= firstName.toLowerCase();
const surname1= lastName.toUpperCase();
console.log(`Hello, ${firstName} ${lastName}, how can I help you?`)
}

//invoke
welcome();



// TEMPERATURE CONVERTER -----------------------------------------------------

let Fahrenheit = 50

function temperatureConverter(){
const Celsius = (Fahrenheit - 32) * 5/9;
console.log(Celsius);
}

temperatureConverter();


// Dog Years -------------------------------------------------------------
console.log("Dog Years Calculator")

let myName1 = "Alessia"
let myAge1 = 28

function DogYearsLess15(){
const convert1 = ( myAge1 * 0.066);
console.log(convert1)
}
function DogYearsLess24(){
const convert2 = ( myAge1 * 0.08);
console.log(convert2)
}
function DogYearsOver24(){
const convert = ( myAge1 - 24)/5 + 2 ;
console.log(convert)
}

if(myAge1 <= 15){
DogYearsLess15();
}else if (myAge1 > 15 && myAge1 < 24){
DogYearsLess24();
}else if (myAge1 => 24){
DogYearsOver24();
}


//Calculator ---------------------------------------------------------------
console.log("Calculator")

function calculator(){
    //check 1 and 2 arguments  are numbers if not error
    //second argument is a string of either +,-,*,/ if not error
    //if stetemtn fro correct calculation  return correct answer depending on second

}

//exercise 2
//exercise 3

//--------------------------------------------ARRAYS---------------------------------------------
console.log('--------------ARRAYS--------------')


//Arrays exercise 1 BREAKFAST--------------------------------------------------------------------
//log how many items there are
console.log('List of all the breakfast items')

const breakfast = ["coffee","cereal","toast"]
//add item at the end
breakfast.push('tea')
//add item at the start
breakfast.unshift('croissant')


function calculateArrayLength(breakfast){
    const arrayLength = breakfast.length
    return arrayLength;
}

console.log(calculateArrayLength(breakfast));

//Array exercise 2 Last Value--------------------------------------------------------------------
//function that takes in an array as a parameter, return last item of the array(any length)
console.log('return last breakfast item')

function returnLast(breakfast){
let lastElem = breakfast.slice(-1);
return lastElem;
}
console.log(returnLast(breakfast));

//Array exercise 3 MUSIC--------------------------------------------------------------------------
console.log('Music exercise')

const musicGenres = ['Rock','Rap']
//append(add to the end) jazz 
musicGenres.push('Jazz')
//add blues and raggae to start
musicGenres.unshift('Blues','Reggae')

//create function to replace the value in the middle of the array to 'Classical'

function median (musicGenres) {
//const mid = Math.ceil(musicGenres.length / 2)
//return mid;

for (i = 0; i < musicGenres; i++)

return mid
}

console.log(median(musicGenres))


//show value of mid
//want to change mid to index
//change index to Classical



//Arrays Exercise 4 Sort------------------------------------------------------------------------
//create a function that takes in an array and sort it into aplhabetical order
console.log('breakfast in alphabetical order')
breakfast.sort()
console.log(breakfast)



//---------------------------------------------LOOPS-------------------------------------------------------
console.log('--------------LOOPS--------------')

console.log('Counting 1 TO 10')

for (let i = 1; i < 11 ; i++)
console.log(i)

console.log('Counting 10 TO 1')

for (let i = 10; i > 0 ; i--)
console.log(i)



//Loops Exercise 3 : Last Loop Value-----------
console.log('Loops Exercise 3 : Last Loop Value:')

let listNumbers = [1,3,4,7,8,9];

const returnLast1 = listNumbers => listNumbers.slice(-1);

console.log(returnLast1(listNumbers))



//Loops Exercise 2 : Tasks-----------
console.log('Loops Exercise 2: Tasks:')
const tasks = ['cleaning','washing','tidying']

for (let i = 0; i < 3 ; i++)
console.log(`Tasks ${i+1}:${tasks[i]}`)



//Loops Exercise 3 : Even Numbers -----------

console.log('Loop Exercise 4: Even Numbers:')

for (let i = 1; i <= 11 ; i++)
if (i % 2 === 0 ) console.log(i)


// Loop exercise 5: Replace 'for'------------------
console.log('Loop Exercise 5: Replace for:')

for (let x = 0; x < 3; x++)
// alert(`number ${x}!`)

d = 0;
while (d < 3){
    d++;
//alert(`number ${d}!`)
}


// Favourite Foods----------------------------
console.log('Favourite Foods');
// Create and array of your Favourite foods
// use forEach to iterate over the array console logging each item on the list

let favFood = ['chips','rice','soup'];

//loop over each one

for(let key in favFood ){
    console.log(favFood[key]);
}


// Loop exercise 6: Sum'------------------
console.log('Loop Exercise 6: Sum:')
// Create an array, function to sum

const numArray = [1,2,3,4,5]

function returnSum(numArray){
    let sum = 0;
    for (let i=0; i< numArray.length; i += 1) {
        sum += numArray[i];
    }
    return sum
}

console.log(returnSum(numArray))




//--------------------------------------------Objects-------------------------------------------

//Object Exercise 1 : Spacecraft
console.log('--------------------Object-------------------');
console.log('Object Exercise 1 : Spacecraft');

const spaceCraft = {
    size: 40,
    range: 12,
    model: 'A12',
    capacity: 30,
}

console.log(spaceCraft.range);

//loop over each one

for(let key in spaceCraft ){
    console.log(spaceCraft[key]);
}










