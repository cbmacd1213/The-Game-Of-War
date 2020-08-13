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
let handReserve = [];

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

function shuffleDeck(deck) {
    const tempDeck = [...deck];
    shuffledDeck = [];
    while (tempDeck.length) {
      const rndIdx = Math.floor(Math.random() * tempDeck.length);
      let randomCard = tempDeck.splice(rndIdx, 1)[0]
      shuffledDeck.push(randomCard);
    }
    return shuffledDeck;
}

buildMasterDeck();
shuffledDeck = shuffleDeck(masterDeck);
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
        playerCards.shift(player)
        compCards.shift(comp)
        handReserve.push(player)
        handReserve.push(comp)
        if (player.value > comp.value) {
            handReserve.forEach(function (card){
                playerReserve.push(card)
            }) 
            handReserve = []
            restackPlayerDeck()
            restackCompDeck()
        }  else if (player.value < comp.value) {
            handReserve.forEach(function (card){
                compReserve.push(card)
            })
            handReserve = []
            restackPlayerDeck()
            restackCompDeck()
        } else {
            console.log("war")
            restackPlayerDeck()
            restackCompDeck()
            playTurn()
        } 
        console.log("player", playerReserve.length, playerCards.length)
        console.log("comp", compReserve.length, compCards.length)
    }

    // function declareWar(player, comp) {
        
    //     pWarCards = playerCards.unshift(player)
    //     cWarCards = compCards.unshift(comp)
    //     if (pWarCards.value > cWarCards.value) {
    //     pWarCards.shift(player)
    //     cWarCards.shift(comp)
    //     playerReserve.push(player)
    //     playerReserve.push(comp)
    //     } else 
    //     pWarCards.shift(player)
    //     cWarCards.shift(comp)
    //     compReserve.push(player)
    //     compReserve.push(comp)   
    // }




    init();

 function restackPlayerDeck() {
     if (playerCards.length === 0 && playerReserve.length > 0) {
         playerCards = [...playerReserve];
         shuffleDeck(playerCards)
         playerReserve = []
     }
 }

 function restackCompDeck() {
    if (compCards.length === 0 && compReserve.length > 0) {
     compCards = [...compReserve];
     shuffleDeck(compCards)
     compReserve = []
    }
 }

 