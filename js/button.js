export function createCompleteBtn() {
  const btn = document.createElement("button");
  btn.className = "complete-btn";
  btn.innerHTML = `<img src="./icons/check.svg" alt="check todo">`;
  return btn;
}

export function createDeleteBtn() {
  const btn = document.createElement("button");
  btn.className = "delete-btn";
  btn.innerHTML = `<img src="./icons/delete.svg" alt="Delete Todo">`;
  return btn;
}

export function createActionsMoreBtn() {
  const btn = document.createElement("button");
  btn.className = "actions-more-btn";
  btn.innerHTML = `<img src="./icons/more.svg" alt="More Actions">`;
  return btn;
}

export function createActionsCompleteBtn() {
  const btn = document.createElement("button");
  btn.className = "actionsCompleteBtn";
  btn.innerHTML = `<img src="./icons/check.svg" alt="check todo">`;
  return btn;
}

export function createActionsDeleteBtn() {
  const btn = document.createElement("button");
  btn.className = "actionsDeleteBtn";
  btn.innerHTML = `<img src="./icons/delete.svg" alt="Delete Todo">`;
  return btn;
}

export function createDiv() {
  const div = document.createElement("div");
  div.className = "todoBtn";
  return div;
}

export function createActionsDiv() {
  const div = document.createElement("div");
  div.className = "actionsDiv";
  div.style.opacity = "0"; 
  return div;
}
