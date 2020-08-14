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
let playerCards = [];
let compCards = [];
let playerReserve = [];
let compReserve = [];
let pWarCards = [];
let cWarCards = [];
let handReserve = [];
let turn = 0;
let showResult = document.querySelector('span');
let endGameMessage = document.getElementById('endGame')
//--------Cached Elements-----------//
const cardsWon = document.getElementById('cardsWon')
const drawCards = document.getElementById('drawCards')
const cardsInPlay = document.getElementById('cardsInPlay')
const warCards = document.getElementById('warCards')
//---------Event Listeners----------//
document.querySelector('button')
  .addEventListener('click', playTurn);
//-----------Functions--------------//
function init() {
    playerCards = firstHalf;
    compCards = secondHalf;
     renderPlayerCards();
     renderCompCards()
}
function renderPlayerCards() {
   if (playerCards.length > 0) {
    document.getElementById('pDrawCards').style.background = `url("css/card-deck-css/images/backs/red.svg") no-repeat center center`
   } else {
    document.getElementById('pDrawCards').style.background = ''
   }
}
function renderCompCards() {
    if (compCards.length > 0) {
        document.getElementById('cDrawCards').style.background = `url("css/card-deck-css/images/backs/red.svg") no-repeat center center`
    } else {
        document.getElementById('cDrawCards').style.background = ''
       }
}
function renderPlayerReserve() {
    let pReserve = document.getElementById('pCardsWon')
    let playerCard = playerReserve[playerReserve.length - 1]
    pReserve.style.background = `url("css/card-deck-css/images/${playerCard.suit}/${playerCard.suit}-${playerCard.value}.svg") no-repeat center center`
}
function renderCompReserve() {
    let cReserve= document.getElementById('cCardsWon')
    let compCard = compReserve[compReserve.length - 1]
    cReserve.style.background = `url("css/card-deck-css/images/${compCard.suit}/${compCard.suit}-${compCard.value}.svg") no-repeat center center`
}

function renderHandReserve() {
    restackCompDeck()
    restackPlayerDeck()
    let pInPlay = document.getElementById('pInPlayCards')
    let cInPlay = document.getElementById('cInPlayCards')
    let playerCard = playerCards[0]
    let compCard = compCards[0]
    pInPlay.style.background = `url("css/card-deck-css/images/${playerCard.suit}/${playerCard.suit}-${playerCard.value}.svg") no-repeat center center`
    cInPlay.style.background = `url("css/card-deck-css/images/${compCard.suit}/${compCard.suit}-${compCard.value}.svg") no-repeat center center`
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

function endGame(num) {
   if (playerReserve.length + playerCards.length > MAX_CARDS || compReserve.length + compCards.length > MAX_CARDS) {
    endGameMessage = `We have a winner!`
    } else if (playerReserve.length + playerCards.length < MIN_CARDS || compReserve.length + compCards.length < MIN_CARDS)
    return ("and we have a loser!")
     else {
    (num > MIN_CARDS && num < MAX_CARDS)
    return "Keep playing!"
    }
}
function playTurn() {
    if (turn === 0) {
      const player = playerCards.shift()
      const comp = compCards.shift()
      renderHandReserve()
      turn += 1;
    } else {
      pWarCards = []
      cWarCards = []
      const player = playerCards.shift()
      const comp = compCards.shift()
      renderHandReserve()
      if (player.value >= comp.value) {
          handReserve.push(comp)
          handReserve.push(player)
          handReserve.forEach(function (card){
              playerReserve.push(card)
          })
          renderPlayerReserve()
          restackPlayerDeck()
          restackCompDeck()
      }  else {
          handReserve.push(player)
          handReserve.push(comp)
          handReserve.forEach(function (card){
              compReserve.push(card)
          })
          renderCompReserve()
          restackPlayerDeck()
          restackCompDeck()
          endGame()
      }
      showResult.textContent = `  The player has ${playerCards.length} in their hand and ${playerReserve.length} in their reserve and the computer has ${compCards.length} in their hand and ${compReserve.length} in their reserve`
      renderPlayerCards()
      renderCompCards()
      handReserve = []
    }
  }
    init();
 function restackPlayerDeck() {
     if (playerCards.length === 0 && playerReserve.length > 0) {
         playerCards = [...playerReserve];
         shuffleDeck(playerCards)
         playerReserve = []
         shuffleDeck(playerCards)
     }
 }
 function restackCompDeck() {
    if (compCards.length === 0 && compReserve.length > 0) {
     compCards = [...compReserve];
     shuffleDeck(compCards)
     compReserve = []
     shuffleDeck(compCards)
        }
    }


