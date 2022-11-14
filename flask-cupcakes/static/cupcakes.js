// Localhost caused axios network error (http://localhost:5000/api doesn't work)
// Type this line in Ubuntu: flask run --host=0.0.0.0
// and get * Running on http://172.29.88.4:5000 (Press CTRL+C to quit)
const URL = "http://172.29.88.4:5000/api";

// Generate the html of the given cupcake
function createCupcakeHTML(cupcake) {
  return `
  <div data-cupcake-id=${cupcake.id}>
    <li>
        ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
        <button class="delete-button">DELETE</button>
    </li>
    <img class="Cupcake-img" src="${cupcake.image}" alt="no image">
  </div>
  `;
}

// Show initial cupcakes
async function initialCupcakes() {
  const res = await axios.get(`${URL}/cupcakes`);
  for (let cupcake of res.data.cupcakes) {
    let newCupcake = $(createCupcakeHTML(cupcake));
    $("#cupcakes-list").append(newCupcake);
  }
}

// Form handling: adding the new cupcakes
$("#add-new-cupcake-form").on("submit", async function (event) {
  event.preventDefault();

  let flavor = $("#form-flavor").val();
  let size = $("#form-size").val();
  let rating = $("#form-rating").val();
  let image = $("#form-image").val();

  const addCupcakeRes = await axios.post(`${URL}/cupcakes`, {
    flavor,
    size,
    rating,
    image,
  });

  let addCupcake = $(createCupcakeHTML(addCupcakeRes.data.cupcake));
  $("#cupcakes-list").append(addCupcake);
  $("#add-new-cupcake-form").trigger("reset");
});

// Button handling: click and delete the cupcake
$("#cupcakes-list").on("click", ".delete-button", async function (event) {
  event.preventDefault();
  let $cupcake = $(event.target).closest("div");
  let cupcakeID = $cupcake.attr("data-cupcake-id");

  await axios.delete(`${URL}/cupcakes/${cupcakeID}`);
  $cupcake.remove();
});

$(initialCupcakes);
