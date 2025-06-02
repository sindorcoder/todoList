const addTodo = document.getElementById("addTodo");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const todoInput = document.getElementById("todoInput");
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const filterForm = document.getElementById("filterForm");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

addTodo.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  todoInput.value = "";
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = e.target[0].value.trim();

  if (todoText != "") {
    if (todos.some((todo) => todo.text.toLowerCase() === todoText)) {
      alert("Todo already exists!");
    }

    todos.push({ text: todoText, completed: false });
    localStorage.setItem("todos", JSON.stringify(todos));
    modal.style.display = "none";
    todoInput.value = "";
    renderTodos();
  }
});

function renderTodos() {
  todoList.innerHTML = "";
  if (todos.length === 0) {
    todoList.innerHTML = `<li class="text">Create Todo List</li>`;
  }

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.textContent = todo.text[0].toUpperCase() + todo.text.slice(1);
    li.className = todo.completed ? "completed" : "list-item";

    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const div = document.createElement("div");
    div.className = "todoBtn";

    completeBtn.className = "complete-btn";

    completeBtn.style.pointerEvents = todo.completed ? "none" : "auto";

    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = `<img src="./icons/delete.svg" alt="Delete Todo">`;
    completeBtn.innerHTML = `<img src="./icons/check.svg" alt="check todo">`;

    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    completeBtn.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    li.appendChild(div);
    todoList.appendChild(li);
  });
}

filterForm.addEventListener("change", (e) => {
  console.log(e.target.value);
  const filter = e.target.value;

  if (filter === "all") {
    renderTodos();
  } else if (filter === "active") {
    const activeTodos = todos.filter((todo) => !todo.completed);
    todoList.innerHTML = "";
    activeTodos.forEach((todo, index) => {
      const li = document.createElement("li");

      li.textContent = todo.text[0].toUpperCase() + todo.text.slice(1);
      li.className = todo.completed ? "completed" : "list-item";

      const completeBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      const div = document.createElement("div");
      div.className = "todoBtn";

      completeBtn.className = "complete-btn";

      completeBtn.style.pointerEvents = todo.completed ? "none" : "auto";

      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = `<img src="./icons/delete.svg" alt="Delete Todo">`;
      completeBtn.innerHTML = `<img src="./icons/check.svg" alt="check todo">`;

      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });

      completeBtn.addEventListener("click", () => {
        todos[index].completed = !todos[index].completed;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });
      div.appendChild(completeBtn);
      div.appendChild(deleteBtn);

      li.appendChild(div);
      todoList.appendChild(li);
    });
  } else if (filter === "completed") {
    const completedTodos = todos.filter((todo) => todo.completed);

    console.log(completedTodos);
    todoList.innerHTML = "";
    completedTodos.forEach((todo, index) => {
      const li = document.createElement("li");

      li.textContent = todo.text[0].toUpperCase() + todo.text.slice(1);
      li.className = todo.completed ? "completed" : "list-item";

      const completeBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      const div = document.createElement("div");
      div.className = "todoBtn";

      completeBtn.className = "complete-btn";

      completeBtn.style.pointerEvents = todo.completed ? "none" : "auto";

      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = `<img src="./icons/delete.svg" alt="Delete Todo">`;
      completeBtn.innerHTML = `<img src="./icons/check.svg" alt="check todo">`;

      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });

      completeBtn.addEventListener("click", () => {
        todos[index].completed = !todos[index].completed;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });
      div.appendChild(completeBtn);
      div.appendChild(deleteBtn);

      li.appendChild(div);
      todoList.appendChild(li);
    });
  }
});

renderTodos();
