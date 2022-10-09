var items = 0;
var themeIcon = document.getElementById('themeIcon')
var todo = document.getElementsByClassName('todo')[0]
var add = document.getElementById('add')
var checkbox = document.getElementsByClassName("checkbox");
var startup = document.getElementsByClassName("startup")[0];
var noTask = document.querySelector(".startup h3")
var taskContent = document.querySelector(".taskContainers .content")
var footer = document.querySelector(".taskContainers .content .footer");
var add = document.getElementById("add");
var tasks = document.getElementsByClassName("tasks")[0];
var create = document.getElementById("create");
var alert = document.getElementById("alert");
var mobileFilter = document.getElementById("mobile");
var itemsLeft = document.getElementById("itemsLeft");
let storage = [];
window.onload = () => {
  const data = JSON.parse(localStorage.getItem("storage"));
  data.map(el => {
    items = items + 1;
    startup.style.display = "none";
    var div = document.createElement("div");
    var label = document.createElement("label");
    var input = document.createElement("input");
    var span = document.createElement("span");
    var taskTitle = document.createElement("span");
    div.setAttribute("class", "task");
    label.setAttribute("class", "container");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "checkbox");
    input.setAttribute("onclick", "taskDone(this)");
    span.setAttribute("class", "checkmark");
    taskTitle.setAttribute("class", "tasktitle");
    taskTitle.innerText = el.task;
    storage.push({ "task": el.task })
    footer.style.display = "flex";

    label.appendChild(taskTitle);
    label.appendChild(input);
    label.appendChild(span);
    div.appendChild(label);
    tasks.insertBefore(div, tasks.childNodes[0]);
    updateItems();
  })
}

add.addEventListener("click", createTask);
create.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add").click();
    create.blur()
  }
});
function createTask() {
  if (create.value == "") {
    alert.style.display = "block";
    setTimeout(function () {
      alert.style.display = "none";
    }, 2000);
    return;
  }
  checkbox = document.getElementsByClassName("checkbox");
  items = items + 1;
  startup.style.display = "none";
  var div = document.createElement("div");
  var label = document.createElement("label");
  var input = document.createElement("input");
  var span = document.createElement("span");
  var taskTitle = document.createElement("span");

  div.setAttribute("class", "task");
  label.setAttribute("class", "container");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "checkbox");
  input.setAttribute("onclick", "taskDone(this)");
  span.setAttribute("class", "checkmark");
  taskTitle.setAttribute("class", "tasktitle");
  taskTitle.innerText = create.value;
  storage.push({ "task": create.value })
  create.value = "";
  footer.style.display = "flex";

  label.appendChild(taskTitle);
  label.appendChild(input);
  label.appendChild(span);
  div.appendChild(label);
  tasks.insertBefore(div, tasks.childNodes[0]);
  updateItems();
  console.log(storage)
}
function updateItems() {
  itemsLeft.innerText = items;
}

function taskDone(e) {
  if (e.checked == true) {
    e.previousSibling.style.textDecoration = "line-through";
    items = items - 1;
    updateItems();
  } else {
    e.previousSibling.style.textDecoration = "none";
    items = items + 1;
    updateItems();
  }
}

var clearTask = document.querySelector(".clear p");
clearTask.addEventListener("click", clearCompleted);
function clearCompleted() {
  let taskCheckbox = document.querySelectorAll(".task .checkbox");
  for (let i = 0; i < taskCheckbox.length; i++) {
    if (taskCheckbox[i].checked) {
      console.log(taskCheckbox[i].parentNode.textContent);
      storage = storage.filter(el => el.task != taskCheckbox[i].parentNode.textContent)
      taskCheckbox[i].parentNode.parentNode.remove();
    }
  }
  updateLayout();
}

function updateLayout() {
  let noOftask = document.getElementsByClassName("task");
  if (noOftask.length <= 0) {
    startup.style.display = "block";
    footer.style.display = "none";
    noTask.innerText = "All tasks will be listed here!!"
    document.getElementsByClassName('active')[0].click()
  }
  else {
    startup.style.display = "none"
  }
}

var allTasks = document.getElementsByClassName("allTasks");
var activeTasks = document.getElementsByClassName("activeTasks");
var completedTasks = document.getElementsByClassName("completedTasks");

for (let i = 0; i < allTasks.length; i++) {
  allTasks[i].addEventListener("click", function () {
    showAllTasks(this);
  });
}

for (let i = 0; i < activeTasks.length; i++) {
  activeTasks[i].addEventListener("click", function () {
    showActiveTasks(this);
  });
}

for (let i = 0; i < completedTasks.length; i++) {
  completedTasks[i].addEventListener("click", function () {
    showCompletedTasks(this);
  });
}

function showAllTasks(ev) {
  setActiveClass(ev);
  let taskCheckbox = document.querySelectorAll(".task .checkbox");
  for (let i = 0; i < taskCheckbox.length; i++) {
    taskCheckbox[i].parentNode.parentNode.style.display = "block";
  }
  updateLayout()
}

function showActiveTasks(ev) {
  setActiveClass(ev);
  let isActive = false
  let taskCheckbox = document.querySelectorAll(".task .checkbox");
  for (let i = 0; i < taskCheckbox.length; i++) {
    if (taskCheckbox[i].checked) {
      taskCheckbox[i].parentNode.parentNode.style.display = "none";
    }
    else {
      isActive = true
      taskCheckbox[i].parentNode.parentNode.style.display = "block";
    }
  }
  if (!isActive) {
    startup.style.display = "block"
    noTask.innerText = "No Active task found"
  }
  else {
    startup.style.display = "none"
  }

}

function showCompletedTasks(ev) {
  setActiveClass(ev);
  let isCompleted = false
  let taskCheckbox = document.querySelectorAll(".task .checkbox");
  for (let i = 0; i < taskCheckbox.length; i++) {
    if (!taskCheckbox[i].checked) {
      taskCheckbox[i].parentNode.parentNode.style.display = "none";
    }
    else {
      taskCheckbox[i].parentNode.parentNode.style.display = "block";
      isCompleted = true
    }
  }
  if (!isCompleted) {
    startup.style.display = "block"
    noTask.innerText = "No completed task found"
  }
  else {
    startup.style.display = "none"
  }
}

function setActiveClass(elmt) {
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].classList.remove("active");
  }

  for (let i = 0; i < activeTasks.length; i++) {
    activeTasks[i].classList.remove("active");
  }

  for (let i = 0; i < completedTasks.length; i++) {
    completedTasks[i].classList.remove("active");
  }
  elmt.classList.add("active");
}

themeIcon.addEventListener("click", changeTheme)

function changeTheme() {
  if (themeIcon.src.includes("sun")) {
    mobileFilter.style.backgroundColor = "hsl(236, 33%, 92%)"
    mobileFilter.style.color = "rgba(0, 0, 0, .8)"
    themeIcon.src = "img/todo/icon-moon.svg"
    todo.style.backgroundImage = "url('img/todo/bg-desktop-light.jpg')"
    themeIcon.alt = "Dark theme"
    document.body.style.backgroundColor = "hsl(0, 0%, 98%)"
    create.style.backgroundColor = "hsl(236, 33%, 92%)"
    create.style.color = "hsl(235, 24%, 19%)"
    add.style.color = "black"
    taskContent.style.backgroundColor = "hsl(233, 11%, 84%)"
    taskContent.style.color = "hsl(234, 11%, 40%)"
    taskContent.style.boxShadow = "2px 2px 10px white"
  }
  else {
    mobileFilter.style.color = "white"
    themeIcon.src = "img/todo/icon-sun.svg"
    todo.style.backgroundImage = "url('img/todo/bg-desktop-dark.jpg')"
    themeIcon.alt = "light theme"
    document.body.style.backgroundColor = "hsl(235, 21%, 11%)"
    create.style.backgroundColor = "rgb(37 39 60)"
    create.style.color = "white"
    add.style.color = "white"
    taskContent.style.backgroundColor = "rgb(37 39 60)"
    taskContent.style.color = "hsl(234, 11%, 52%)"
    taskContent.style.boxShadow = "2px 2px 10px hsl(235, 21%, 11%)"
    mobileFilter.style.backgroundColor = "rgb(37 39 60)"
  }
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("storage", JSON.stringify(storage));
})
window.onunload = () =>{
  localStorage.setItem("storage", JSON.stringify(storage));
}
