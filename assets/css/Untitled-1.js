// global variables
// =================
// create an array of words
const word = ['yosemite', 'bryce', 'zion'];
// choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightLetters = [];
let wrongletters = [];
let underScore = [];

// Dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightLetters = document.getElementsByClassName('rightLetters');
let docWrongLetters = document.getElementsByClassName('wrongGuess');

// create underscores based on length of word

let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// get users guess
document.addEventListener("keydown", function(event){
    var userGuess = event.key
// if users guess is right 
if(choosenWord.indexOf(keyword) > -1) {

}
// add to right words array
rightWord.push(keyword);
// checks to see if user word matches guess
if(underScore.join('') == choosenWord) {
    alert('You Win');
    }
else {
    wrongWord.push(keyword);
}

// // create an array of words
// const word = ['yosemite', 'bryce', 'zion', 'arches']

// // choose word randomly
// let randNum = Math.floor(Math.random() * word.length)
// let choosenWord = word[randNum];
// let rightWord = [];
// let wrongWord = [];
// let underScore = [];

// // Dom manipulation
// let docUnderScore = document.getElementsByClassName('underScore');
// let docRightLetters = document.getElementsByClassName('rightLetters');
// let docWrongLetters = document.getElementsByClassName('wrongLetters');



// // creates underscores based on length of word
// let generateUnderscore = () => {
//     for (let i = 0; i < choosenWord.length; i++) {
//         underScore.push('_');
      
//     }
//     return underScore;
// }

// console.log(generateUnderscore());

// console.log(choosenWord);

// //create globals
// let wins=0
// let guessLeft=6


// //create variables to update html
// let winsDisplay= document.getElementById("wins")

// // get users guess
// document.addEventListener('keypress', (event) => {
//     let keyword = String.fromCharCode(event.keyCode);

// // if users guess is right 
// if(choosenWord.indexOf(keyword) > -1) {
// //  add to right words array
//     rightWord.push(keyword);
// // replace underscore with right letter
//     underScore[choosenWord.indexOf(keyword)] = keyword;
//     docUnderScore[0].innerHTML = underScore.join('');
//     docRightLetters[0].innerHTML = docRightLetters.join('');
// // checks to see if user word matches guess
//     if(underScore.join('') == choosenWord) {
//         alert('You Win');
//     }  
//     else {
//         wrongWord.push(keyword);
//     } 


// // create an array of words
// const word = ['yosemite', 'bryce', 'zion'];
// // choose word randomly
// let randNum = Math.floor(Math.random() * word.length);
// let choosenWord = word[randNum];
// let rightLetters = [];
// let wrongletters = [];
// let underScore = [];

// // Dom manipulation
// let docUnderScore = document.getElementsByClassName('underscore');
// let docRightLetters = document.getElementsByClassName('rightLetters');
// let docWrongLetters = document.getElementsByClassName('wrongGuess');

// console.log(choosenWord);

// // create underscores based on length of word

// let generateUnderscore = () => {
//     for(let i = 0; i < choosenWord.length; i++) {
//         underScore.push('_');
//         docUnderScore[0].innerHTML = underScore.join('');
//     }
//     return underScore;
// }

// // get users guess
// document.addEventListener("keydown", function(event){
//     var userGuess = event.key

// // if users guess is right 
// if(choosenWord.indexOf(keyword) > -1) {

// // add to right words array
// rightWord.push(keyword);

// // replace underscore with right letter
// underScore[choosenWord.indexOf(keyword)] = keyword;

// // checks to see if user word matches guess
// if(underScore.join('') == choosenWord) {
//     alert('You Win');
// }  
//     else {
//         wrongWord.push(keyword); 
//     }
// }

// create an array of words
const word = ['yosemite', 'bryce', 'zion'];
// choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightLetters = [];
let wrongletters = [];
let underScore = [];

// Dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightLetters = document.getElementsByClassName('rightLetters');
let docWrongLetters = document.getElementsByClassName('wrongGuess');

// create underscores based on length of word

let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// get users guess
document.addEventListener("keydown", function(event){
    var userGuess = event.key
// if users guess is right 
if(choosenWord.indexOf(keyword) > -1) {

}
// add to right words array
rightWord.push(keyword);
// checks to see if user word matches guess
if(underScore.join('') == choosenWord) {
    alert('You Win');
    }
else {
    wrongWord.push(keyword);
}


// // create an array of words
// const word = ['yosemite', 'bryce', 'zion'];
// // choose word randomly
// let randNum = Math.floor(Math.random() * word.length);
// let choosenWord = word[randNum];
// let rightLetters = [];
// let wrongletters = [];
// let underScore = [];

// // Dom manipulation
// let docUnderScore = document.getElementsByClassName('underscore');
// let docRightLetters = document.getElementsByClassName('rightLetters');
// let docWrongLetters = document.getElementsByClassName('wrongGuess');

// console.log(choosenWord);

// // create underscores based on length of word

// let generateUnderscore = () => {
//     for(let i = 0; i < choosenWord.length; i++) {
//         underScore.push('_');
//         docUnderScore[0].innerHTML = underScore.join('');
//     }
//     return underScore;
// }

// // get users guess
// document.addEventListener("keydown", function(event){
//     var userGuess = event.key

// // if users guess is right 
// if(choosenWord.indexOf(keyword) > -1) {

// // add to right words array
// rightWord.push(keyword);

// // replace underscore with right letter
// underScore[choosenWord.indexOf(keyword)] = keyword;

// // checks to see if user word matches guess
// if(underScore.join('') == choosenWord) {
//     alert('You Win');
// }  
//     else {
//         wrongWord.push(keyword); 
//     }
// }
