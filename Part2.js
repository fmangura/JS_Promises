function pickCard() {
    let getCard = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    getCard.then(card => {
        console.log(card.data)
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)});
    getCard.catch(err => console.log(err));
}

function pick2Cards() {
    let getCard = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(card => {
        console.log(card.data)
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
        return axios.get(`https://deckofcardsapi.com/api/deck/${card.data.deck_id}/draw/?count=1`)
    })
     .then(card2 => {
        console.log(card2.data)
        console.log(`${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`)
    })

    .catch(err => console.log(err));
}

let currDeck;

function drawCard(){
    let getCard = axios.get(`https://deckofcardsapi.com/api/deck/${currDeck}/draw/?count=1`)
    .then(card => {
        console.log(card.data)
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
        return card
    })
    .catch(err => newDeck())
};

function newDeck(){
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(deck => {
       currDeck = deck.data.deck_id
    })
    .catch(err => console.log(err))
}
let ranDegree = Math.floor(Math.random()*180)
$(document).ready(function(){
    newDeck()
});

$('.drawCard').on('click', function(e){
    e.preventDefault()
    let getCard = axios.get(`https://deckofcardsapi.com/api/deck/${currDeck}/draw/?count=1`)
    .then(card => {
        console.log(card.data)
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
        $('.CardPile').append(`<li><img src='${card.data.cards[0].image}' style='transform: rotate(${Math.floor(Math.random()*45) * (Math.round(Math.random()) ? 1 : -1)}deg) translateX(${Math.floor(Math.random()*90)}px)'></li>`)
    })
    .catch(err => {
        $('.CardPile').empty()
        newDeck()
    })
});