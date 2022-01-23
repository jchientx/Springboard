const gameContainer = document.getElementById("game");
let stopClick = false;
let card1 = null;
let card2 = null;
let faceupCount = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  //console.log("eventTargetClass", event.target.class);

  if (stopClick) {
    return;
  }
  if (event.target.classList.contains("faceup")) {
    return;
  }

  // Clicking a card should change the background color to be the color of the class it has.
  // To access at className an element use e.target.className
  event.target.style.backgroundColor = event.target.classList[0];

  if (card1 === null || card2 === null) {
    //if (!card1 || !card2)
    event.target.classList.add("faceup");
    //card1 = card1 || event.target;
    if (card1 === null) {
      card1 = event.target;
    }
    console.log("card1: ", card1);
    card2 = event.target === card1 ? null : event.target;
    console.log("card2: ", card2);
  }

  if (card1 && card2) {
    stopClick = true;
    let card1Class = card1.className;
    let card2Class = card2.className;
    console.log(card1Class, card2Class);
    if (card1Class === card2Class) {
      faceupCount += 2;
      console.log("faceupCount: ", faceupCount);
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      stopClick = false;
    } else {
      setTimeout(function () {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("faceup");
        card2.classList.remove("faceup");
        card1 = null;
        card2 = null;
        stopClick = false;
      }, 1000);
    }
  }
  if (faceupCount === COLORS.length) {
    alert("YOU WIN!"); // Why the alert showup before the last div color showed?
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
