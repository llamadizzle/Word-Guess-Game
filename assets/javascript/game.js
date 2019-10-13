
// create an array of words
const word = ['yosemite', 'bryce', 'zion', 'lassen',];
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
    console.log(event.key, "event.key")

// if users guess is right 


// // add to right words array
 
// // checks to see if user word matches guess

})