// Part 1: Number Facts
let URL = "http://numbersapi.com";
let myFavnum = 99;

// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number.
// (Make sure you get back JSON by including the json query key, specific to this API.
let numPromise = axios.get(`${URL}/${myFavnum}?json`);
numPromise.then((data) => console.log(data.data));

// Another jQuery  way:
$.getJSON(`${URL}/${myFavnum}?json`).then((data) => {
  console.log(data);
});

// 2. Figure out how to get data on multiple numbers in a single request.
// Make that request and when you get the data back, put all of the number facts on the page.
let myFavnums = [99, 1, 56, 777];
let numPromise2 = axios.get(`${URL}/${myFavnums}?json`);
numPromise2.then((data) => console.log(data.data));

// Another jQuery  way:
$.getJSON(`${URL}/${myFavnums}?json`).then((data) => {
  console.log(data);
});

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page.
// It’s okay if some of the facts are repeats.

let fourPromises = [];

for (let i = 1; i < 5; i++) {
  fourPromises.push(axios.get(`${URL}/${myFavnum}?json`));
}

console.log(fourPromises);

Promise.all(fourPromises).then((fact) => {
  // fact.forEach((data) => console.log(data.data));
  fact.forEach((data) => $("body").append(`<p>${data.data.text}</p>`));
});

// Another jQuery way:
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${URL}/${myFavnum}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
  // facts.forEach((data) => console.log(data.text));
});
