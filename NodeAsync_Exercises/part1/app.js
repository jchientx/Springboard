// Part 1: Number Facts
let URL = "http://numbersapi.com";
let myFavnum = 99;

// 1.
async function getFavnum() {
  let numAsync = await axios.get(`${URL}/${myFavnum}?json`);
  console.log(numAsync.data);
}

getFavnum();

// 2.
let multiNum = [1, 5, 46];
async function getMultiNum() {
  let multiAsync = await axios.get(`${URL}/${multiNum}?json`);
  console.log(multiAsync.data);
}

getMultiNum();

// 3.

async function favNum4() {
  let fourPromises = [];
  for (let i = 1; i < 5; i++) {
    fourPromises.push(axios.get(`${URL}/${myFavnum}?json`));
  }
  let facts = await Promise.all(fourPromises);
  facts.forEach((data) => {
    $("body").append(`<p>${data.data.text}</p>`);
  });
}

favNum4();
