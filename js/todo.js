var items = 0;
var checkbox = document.getElementsByClassName("checkbox");
var startup = document.getElementsByClassName("startup")[0];
var noTask = document.querySelector(".startup h3")
var footer = document.querySelector(".taskContainers .content .footer");
var add = document.getElementById("add");
var tasks = document.getElementsByClassName("tasks")[0];
var create = document.getElementById("create");
var alert = document.getElementById("alert");
var mobileFilter = document.getElementById("mobile");
var itemsLeft = document.getElementById("itemsLeft");
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
  create.value = "";
  footer.style.display = "flex";

  label.appendChild(taskTitle);
  label.appendChild(input);
  label.appendChild(span);
  div.appendChild(label);
  tasks.insertBefore(div, tasks.childNodes[0]);
  updateItems();
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
  else{
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

function showAllTasks(ev){
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
    else{
      isActive = true
      taskCheckbox[i].parentNode.parentNode.style.display = "block";
    }
  }
  if(!isActive){
    startup.style.display = "block"
    noTask.innerText = "No Active task found"
  }
  else{
    startup.style.display = "none"
  }

}

function showCompletedTasks(ev) {
  setActiveClass(ev);
  let isCompleted = false
  let taskCheckbox = document.querySelectorAll(".task .checkbox");
  for (let i = 0; i < taskCheckbox.length; i++) {
    if(!taskCheckbox[i].checked) {
      taskCheckbox[i].parentNode.parentNode.style.display = "none";
    }
    else{
      taskCheckbox[i].parentNode.parentNode.style.display = "block";
      isCompleted = true
    }
  }
  if(!isCompleted){
    startup.style.display = "block"
    noTask.innerText = "No completed task found" 
  }
  else{
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
