// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.
// Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
let URL = "https://deckofcardsapi.com/api/deck";

let draw = axios.get(`${URL}/new/draw/?deck_count=1`);
draw.then((data) => {
  console.log(`${data.data.cards[0].value} of ${data.data.cards[0].suit}`);
});

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck.
// Once you have the card, make a request to the same API to get one more card from the same deck.
// Once you have both cards, console.log the values and suits of both cards.
let card1 = null;
axios
  .get(`${URL}/new/draw/`)
  .then((data) => {
    card1 = data.data.cards[0];
    // console.log(data.data);
    let deck_id = data.data.deck_id;
    // console.log(deck_id);
    return axios.get(`${URL}/${deck_id}/draw/`);
  })
  .then((data) => {
    let card2 = data.data.cards[0];
    // console.log(data.data);
    // console.log(data.data.deck_id);
    // console.log(card1, card2);
    [card1, card2].forEach(function (data) {
      console.log(`${data.value} of ${data.suit}`);
    });
  });

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads,
// go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw
// a card. Every time you click the button, display a new card, until there are no cards left in the deck.
let deckId = null;
let $btn = $("button");
let $cardsArea = $("#cards-area");

$.getJSON(`${URL}/new/shuffle/`).then((data) => {
  deckId = data.deck_id;
  $btn.show();
});

$btn.on("click", function () {
  $.getJSON(`${URL}/${deckId}/draw/`).then((data) => {
    console.log(data.remaining);
    let cardSrc = data.cards[0].image;
    let angle = Math.random() * 60;
    let randomX = Math.random() * 40;
    let randomY = Math.random() * 40;
    $cardsArea.append(
      $("<img>", {
        src: cardSrc,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
        },
      })
    );
    if (data.remaining === 0) $btn.remove();
  });
});
