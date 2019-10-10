
// create an array of words
const word = ['yosemite', 'bryce', 'zion'];
// choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightLetters = [];
let wrongletters = [];
let underScore = [];

// create underscores based on length of word

let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// get users guess
document.addEventListener('keypress', (event) => {
     let keyword = String.fromCharCode(event.keyCode);
// if users guess is right 
if(choosenWord.indexOf(keyword) > -1) {

// add to right words array
rightWord.push(keyword);

// checks to see if user word matches guess
if(underScore.join('') == choosenWord) {
    alert('You Win');
}  
    else {
        wrongWord.push(keyword); 
    }
}
       