const form = document.querySelector("#add-todo");
const input = document.querySelector("#todo-item");
const todoList = document.querySelector("#todo-list");
const todos = document.querySelector("li");
const colorSection = document.querySelector("#colors");
const removeBtn = document.createElement("button");
const completeBtn = document.createElement("button");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todosAll")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].todoItem;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  // Why no completed effect?
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  removeBtn.innerText = "Remove";
  newTodo.appendChild(removeBtn);
  completeBtn.innerText = "Completed";
  newTodo.appendChild(completeBtn);
  todoList.appendChild(newTodo); // Why Remove and Completed button only exists for the last todo item?
}

// Add Todo button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(input.value);

  let newTodo = document.createElement("li");

  removeBtn.innerText = "Remove";
  completeBtn.innerText = "Completed";
  newTodo.classList.add("todo");
  newTodo.innerText = input.value;
  newTodo.isCompleted = false;
  // save to localStorage
  savedTodos.push({ todoItem: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todosAll", JSON.stringify(savedTodos));

  newTodo.appendChild(removeBtn);
  newTodo.appendChild(completeBtn);
  input.value = "";
  todoList.appendChild(newTodo);
});

// Remove and Completed button
todoList.addEventListener("click", function (e) {
  console.log(e.target.tagName); //BUTTON
  console.log(e.target.innerText); //Remove / Completed
  
  if (e.target.innerText === "Remove") {
    e.target.parentElement.remove();
    //localStorage.removeItem("todos"); => How to link this effect to Remove button?
  } else if (e.target.innerText === "Completed") {
    e.target.parentElement.classList.toggle("completed");
    e.target.isCompleted = true;
    console.log(e.target.isCompleted); //true
    e.target.innerText = "Undo"; //=> Toggle Undo & Completed
  } else if (e.target.innerText === "Undo") {
    e.target.parentElement.classList.remove("completed");
    e.target.isCompleted = false;
    e.target.innerText = "Completed";
  }
});

// Change background color
colorSection.addEventListener("click", function (e) {
  document.body.style.backgroundColor = e.target.dataset.hex;
});

//localStorage.removeItem("todosAll");
