const addTodo = document.getElementById("addTodo");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const todoInput = document.getElementById("todoInput");
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const filterForm = document.getElementById("filterForm");

import {
  createCompleteBtn,
  createDeleteBtn,
  createActionsMoreBtn,
  createDiv,
  createActionsDiv,
  createActionsCompleteBtn,
  createActionsDeleteBtn,
} from "./button.js";

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
    if (todos.some((todo) => todo.text.toLowerCase() === todoText.toLowerCase())) {
      alert("Todo already exists!");
      return;
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

    const completeBtn = createCompleteBtn();
    const deleteBtn = createDeleteBtn();
    const actionsMoreBtn = createActionsMoreBtn();
    const div = createDiv();
    const actionsDiv = createActionsDiv();
    const actionsCompleteBtn = createActionsCompleteBtn();
    const actionsDeleteBtn = createActionsDeleteBtn();

    li.textContent = todo.text[0].toUpperCase() + todo.text.slice(1);
    li.className = todo.completed ? "completed" : "list-item";

    completeBtn.style.pointerEvents = todo.completed ? "none" : "auto";
    actionsCompleteBtn.style.pointerEvents = todo.completed ? "none" : "auto";

    todos[index].completed
      ? (completeBtn.style.display = "none")
      : (completeBtn.style.display = "");

    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });
    actionsDeleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });
    actionsCompleteBtn.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    completeBtn.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    actionsMoreBtn.addEventListener("click", () => {
      if (actionsDiv.style.opacity === "0") {
        actionsDiv.style.opacity = "1";
      } else {
        actionsDiv.style.opacity = "0";
      }
    });
    actionsDiv.appendChild(actionsCompleteBtn);
    actionsDiv.appendChild(actionsDeleteBtn);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);
    div.appendChild(actionsMoreBtn);
    li.appendChild(actionsDiv);

    li.appendChild(div);
    todoList.appendChild(li);
  });
}

filterForm.addEventListener("change", (e) => {
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
      const completeBtn = createCompleteBtn();
      const deleteBtn = createDeleteBtn();
      const actionsMoreBtn = createActionsMoreBtn();
      const div = createDiv();
      const actionsDiv = createActionsDiv();
      const actionsCompleteBtn = createActionsCompleteBtn();
      const actionsDeleteBtn = createActionsDeleteBtn();

      completeBtn.style.pointerEvents = todo.completed ? "none" : "auto";
      actionsCompleteBtn.style.pointerEvents = todo.completed ? "none" : "auto";

      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });

      actionsDeleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });

      completeBtn.addEventListener("click", () => {
        todos[index].completed = !todos[index].completed;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });

      actionsCompleteBtn.addEventListener("click", () => {
        todos[index].completed = !todos[index].completed;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });
      actionsMoreBtn.addEventListener("click", () => {
        if (actionsDiv.style.opacity === "0") {
          actionsDiv.style.opacity = "1";
        } else {
          actionsDiv.style.opacity = "0";
        }
      });
      actionsDiv.appendChild(actionsCompleteBtn);
      actionsDiv.appendChild(actionsDeleteBtn);
      div.appendChild(completeBtn);
      div.appendChild(deleteBtn);
      div.appendChild(actionsMoreBtn);
      li.appendChild(actionsDiv);

      li.appendChild(div);
      todoList.appendChild(li);
    });
  } else if (filter === "completed") {
    const completedTodos = todos.filter((todo) => todo.completed);

    todoList.innerHTML = "";
    completedTodos.forEach((todo, index) => {
      const li = document.createElement("li");

      li.textContent = todo.text[0].toUpperCase() + todo.text.slice(1);
      li.className = todo.completed ? "completed" : "list-item";

      const deleteBtn = createDeleteBtn();
      const actionsMoreBtn = createActionsMoreBtn();
      const div = createDiv();
      const actionsDiv = createActionsDiv();
      const actionsDeleteBtn = createActionsDeleteBtn();

      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });
      actionsDeleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });

      actionsMoreBtn.addEventListener("click", () => {
        if (actionsDiv.style.opacity === "0") {
          actionsDiv.style.opacity = "1";
        } else {
          actionsDiv.style.opacity = "0";
        }
      });
      actionsDiv.appendChild(actionsDeleteBtn);
      div.appendChild(deleteBtn);
      div.appendChild(actionsMoreBtn);
      li.appendChild(actionsDiv);

      li.appendChild(div);
      todoList.appendChild(li);
    });
  }
});

renderTodos();
