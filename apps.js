console.log("HelloWorld")

//-----------Constants--------------//
const MAX_CARDS = 51;

const MIN_CARDS = 1;

let deckOfCards = {
    suits: ['spades', 'clubs', 'diamonds', 'hearts'],
    values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  }
  let masterDeck = [];
  let shuffledDeck = [];
  let copyOfMasterDeck = [...masterDeck];
  function buildMasterDeck() {
    deckOfCards.suits.forEach(function(name) {
      deckOfCards.values.forEach(function(number) {
        let cardObj = {
          suit: name,
          value: number
        }
        masterDeck.push(cardObj)
      })
    })
  }



//--------State Variables-----------//



//--------Cached Elements-----------//
let playerCards = [];
let compCards = [];
let playerReserve = [];
let compReserve = [];
let pWarCards = [];
let cWarCards = [];


//---------Event Listeners----------//
document.querySelector('button')
  .addEventListener('click', playTurn);
//onClickOfDrawDeck
//ifMaxCardsisSucceeded
//ifMinCardsisBested

 


//-----------Functions--------------//
function init() {
    playerCards = firstHalf; 
    compCards = secondHalf;
}

function render(){

}

// function declareWar(player, comp) {
//     pWarCards = playerCards.slice(0, 2)
//     cWarCards = compCards.slice(0, 2)
//     if (pWarCards[1].value > cWarCards[1].value) {
//     pWarCards.splice(0, 2)
//     cWarCards.splice(0, 2)
//     playerReserve.push()
//     playerReserve.push()
//     } else 
//     pWarCards.splice(0, 2)
//     cWarCards.splice(0, 2)
//     playerReserve.push()
//     playerReserve.push()   
// }


function shuffleDeck() {
    const tempDeck = [...masterDeck];
    shuffledDeck = [];
    while (tempDeck.length) {
      const rndIdx = Math.floor(Math.random() * tempDeck.length);
      let randomCard = tempDeck.splice(rndIdx, 1)[0]
      shuffledDeck.push(randomCard);
    }
    return shuffledDeck;
  }
  buildMasterDeck();
  shuffledDeck = shuffleDeck();
  let firstHalf = shuffledDeck.slice(0, 26)
  let secondHalf = shuffledDeck.slice(25, 51)
  console.log("FIRST", firstHalf);
  console.log("SECOND", secondHalf);


function endGame(num) {
   if (num > MAX_CARDS) {
    return "You Win!"
    } else if (num < MIN_CARDS)
    return "You lose!"
     else {
    (num > MIN_CARDS && num < MAX_CARDS)
    return "Keep playing!"
    }
}

    function playTurn() {
        const player = playerCards[0]
        const comp = compCards[0]
        if (player.value > comp.value) {
            playerCards.shift(player)
            compCards.shift(comp)
            playerReserve.push(comp)
            playerReserve.push(player) 
            console.log("player", playerReserve) 
        }  else if (player.value < comp.value) {
            playerCards.shift(player)
            compCards.shift(comp)
            compReserve.push(player)
            compReserve.push(comp)
            console.log("computer", compReserve)
        } else {
            // return playTurn()
        }
    }

    init();

 function restackPlayerDeck () {
     if (playerCards.length = 0 && playerReserve)
     pla
 }

 function restackCompDeck() {

 }