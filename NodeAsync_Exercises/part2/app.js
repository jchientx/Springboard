// 1.
let URL = "https://deckofcardsapi.com/api/deck";
async function drawCard() {
  let draw = await axios.get(`${URL}/new/draw`);
  console.log(`${draw.data.cards[0].value} of ${draw.data.cards[0].suit}`);
}

// drawCard();

// 2.
async function drawSecondCard() {
  let draw1 = await axios.get(`${URL}/new/draw`);
  // console.log(draw1);
  let card1 = draw1.data.cards[0];
  // console.log(card1);
  let deck_id = draw1.data.deck_id;
  // console.log(deck_id);
  let draw2 = await axios.get(`${URL}/${deck_id}/draw`);
  let card2 = draw2.data.cards[0];
  // console.log(draw2);
  // console.log(card2);
  [card1, card2].forEach((data) => {
    console.log(`${data.value} of ${data.suit}`);
  });
}

// drawSecondCard();

// 3.
async function cardGame() {
  let $btn = $("button");
  let $cardsArea = $("#cards-area");
  let newDeck = await $.getJSON(`${URL}/new/shuffle/`);
  $btn.show().on("click", async function () {
    let cardData = await $.getJSON(`${URL}/${newDeck.deck_id}/draw/`);
    console.log(cardData);
    console.log(cardData.remaining);
    let cardImg = cardData.cards[0].image;
    console.log(cardImg);
    let angle = Math.random() * 60;
    let randomX = Math.random() * 40;
    let randomY = Math.random() * 40;
    $cardsArea.append(
      $("<img>", {
        src: cardImg,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
        },
      })
    );
    if (cardData.remaining === 0) $btn.remove();
  });
}

cardGame();
