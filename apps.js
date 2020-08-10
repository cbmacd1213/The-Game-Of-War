console.log("HelloWorld")

//-----------Constants--------------//
const deckOfCards = { 
suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
};
const MAX_CARDS = 51;

const MIN_CARDS = 1;

       
//reserveDeck
//--------State Variables-----------//
//let playerOneCards = (deckOfCards * Math.randomIndex)/ 2;
//console.log(playerOneCards);

let computerCards = (deckOfCards * Math.randomIndex)/ 2;
console.log(computerCards);
//--------Cached Elements-----------//





//---------Event Listeners----------//

//onClickOfDrawDeck
//ifMaxCardsisSucceeded
//ifMinCardsisBested




//-----------Functions--------------//
let playerCards = ''


//run this as an IF ElSE statement of endGame();
function playerWin(num) {
   if (num> MAX_CARDS)
   return "You Win!"
}

console.log(playerWin(56));


function playerLose(num) {
   if (num < MIN_CARDS)
   return "You Lose!"
}
console.log(playerLose(0));