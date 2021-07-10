var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(){
// prevent browser from reloading
event.preventDefault();
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
listItemEl.textContent = "This is a new task";
tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
