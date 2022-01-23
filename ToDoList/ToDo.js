const form = document.querySelector("#add-todo");
const input = document.querySelector("#todo-item");
const todoList = document.querySelector("#todo-list");
const todos = document.querySelector("li");
const colorSection = document.querySelector("#colors");


// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todosAll")) || [];
console.log("savedTodos: ", savedTodos);

const savedbgc = JSON.parse(localStorage.getItem("bgColor")) || [];
for (let i = 0; i < savedbgc.length; i++) {
  document.body.style.backgroundColor =
    savedbgc[savedbgc.length - 1].backgroundColor;
}

for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].todoItem;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
    newTodo.style.color = "aqua";
  }
  const removeBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  //completeBtn.innerText = "Completed";
  if (newTodo.isCompleted) {
    completeBtn.innerText = "Undo";
  } else {
    completeBtn.innerText = "Completed";
  }
  newTodo.appendChild(removeBtn);
  newTodo.appendChild(completeBtn);
  todoList.appendChild(newTodo);
}

// Add Todo button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("input value: ", input.value);

  let newTodo = document.createElement("li");
  const removeBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  completeBtn.innerText = "Completed";
  //newTodo.classList.add("todo");
  newTodo.innerText = input.value;
  newTodo.isCompleted = false;
  // save to localStorage
  savedTodos.push({
    todoItem: newTodo.innerText,
    isCompleted: false,
  });
  localStorage.setItem("todosAll", JSON.stringify(savedTodos));

  newTodo.appendChild(removeBtn);
  newTodo.appendChild(completeBtn);
  input.value = "";
  todoList.appendChild(newTodo);
});

// Remove and Completed button
todoList.addEventListener("click", function (e) {
  console.log("target tagName: ", e.target.tagName); //BUTTON
  console.log("target innerText: ", e.target.innerText); //Completed
  if (e.target.innerText === "Remove") {
    for (let i = 0; i < savedTodos.length; i++) {
      if (e.target.parentElement.innerText.includes(savedTodos[i].todoItem)) {
        //console.log(savedTodos[i].todoItem);
        savedTodos.splice(i, 1); // Being splice at element i, deleting (and returning) 1 element
      }
    }
    //delete savedTodos[target]; => Do not use delete or it will generate null value. delete doesn't affect the length of the array;  it leaves this undefined value in the middle of the array
    localStorage.setItem("todosAll", JSON.stringify(savedTodos));
    e.target.parentElement.remove();
  } else if (e.target.innerText === "Completed") {
    e.target.parentElement.classList.add("completed");
    //document.querySelector("li completed").style.color = "aqua";
    console.log(e.target.parentElement.innerText); //Todo 1RemoveCompleted
    e.target.isCompleted = true;
    e.target.innerText = "Undo";

    for (let i = 0; i < savedTodos.length; i++) {
      console.log(e.target.parentElement.innerText); //Todo 1RemoveCompleted
      if (e.target.parentElement.innerText.includes(savedTodos[i].todoItem)) {
        //Todo 1 !== Todo 1RemoveCompleted --> Failed ==> use .includes() instead of ===
        savedTodos[i].isCompleted = true;
        localStorage.setItem("todosAll", JSON.stringify(savedTodos));
      }
    }
  } else if (e.target.innerText === "Undo") {
    e.target.parentElement.classList.remove("completed");
    e.target.isCompleted = false;
    e.target.innerText = "Completed";
    for (let i = 0; i < savedTodos.length; i++) {
      if (e.target.parentElement.innerText.includes(savedTodos[i].todoItem)) {
        savedTodos[i].isCompleted = false;
        localStorage.setItem("todosAll", JSON.stringify(savedTodos));
      }
    }
  }
  
// Change background color
colorSection.addEventListener("click", function (e) {
  document.body.style.backgroundColor = e.target.dataset.hex;
  savedbgc.push({ backgroundColor: e.target.dataset.hex });
  localStorage.setItem("bgColor", JSON.stringify(savedbgc));
});

//localStorage.removeItem("todosAll");
