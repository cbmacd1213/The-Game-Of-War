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

let playerCards = [];
let compCards = [];
let playerReserve = [];
let compReserve = [];


//--------State Variables-----------//



//--------Cached Elements-----------//





//---------Event Listeners----------//

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
endGame(playerCards);


function playTurn() {
    playerCards.forEach(p => {
        compCards.forEach(c => {
            if (p.value === c.value) {
                console.log("War!")
            } else if (p.value > c.value) {
                playerCards.shift(p)
                compCards.shift(c)
                playerReserve.push(c)
                playerReserve.push(p)
                console.log("Computer takes card!")
            } else (p.value < c.value) 
                playerCards.shift(p)
                compCards.shift(c)
                compReserve.push(p)
                compReserve.push(c)
                console.log("Player takes card!")
                
            })
        })
    }

    init();
    playTurn();