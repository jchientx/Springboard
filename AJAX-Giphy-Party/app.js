// console.log("Let's get this party started!");

const $gifArea = $("#gif-area");
const $searchWord = $("#search");

function addGif(result) {
  let resultNums = result.data.length;
  if (resultNums) {
    let randomId = Math.floor(Math.random() * resultNums);
    let $newDiv = $("<div>", {
      class: "my-3 mx-3",
      style: "width: 30%;",
    });
    let $newGif = $("<img>", {
      src: result.data[randomId].images.original.url,
      class: "w-100",
      // Create equal-width columns that span multiple rows by inserting
      // a .w-100 where you want the columns to break to a new line
    });
    $newDiv.append($newGif);
    $gifArea.append($newDiv);
    console.log("Append Gif to gifArea!");
  }
}

$("form").on("submit", async function (e) {
  e.preventDefault();

  let searchWord = $searchWord.val();
  $searchWord.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchWord,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);
});

$("#remove").on("click", function () {
  $gifArea.empty();
});
