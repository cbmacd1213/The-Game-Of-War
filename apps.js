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






       
//reserveDeck
//--------State Variables-----------//

//--------Cached Elements-----------//





//---------Event Listeners----------//

//onClickOfDrawDeck
//ifMaxCardsisSucceeded
//ifMinCardsisBested




//-----------Functions--------------//

//run this as an IF ElSE statement of endGame();
function endGame(num) {
   if (num> MAX_CARDS) {
    return "You Win!"
    } else if (num < MIN_CARDS)
    return "You lose!"
     else {
    (num > MIN_CARDS && num < MAX_CARDS)
    return "Keep playing!"
    }
}

console.log(endGame(34));


function shuffleDeck() {
    // Create a copy of the masterDeck (leave masterDeck untouched!)
    const tempDeck = [...masterDeck];
    shuffledDeck = [];
    while (tempDeck.length) {
      // Get a random index for a card still in the tempDeck
      const rndIdx = Math.floor(Math.random() * tempDeck.length);
      // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
      let randomCard = tempDeck.splice(rndIdx, 1)[0]
      shuffledDeck.push(randomCard);
    }
    return shuffledDeck;
  }
  buildMasterDeck();
  shuffledDeck = shuffleDeck();
  let firstHalf = shuffledDeck.slice(0, 26)
  let secondHalf = shuffledDeck.slice(26, 51)
  console.log("FIRST", firstHalf);
  console.log("SECOND", secondHalf);