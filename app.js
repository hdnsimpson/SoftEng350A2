'use strict'

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var taskModal = document.getElementById('taskModal');
var taskBtn = document.getElementById('taskBtn');
var span = document.getElementsByClassName('close')[0];

var editModal = document.getElementById('editModal');
var editBtn = document.getElementById('editButton');
var saveBtn = document.getElementById('saveButton');
var doneBtn = document.getElementById('doneButton');
var doneBtn2 = document.getElementById('doneButton2');

taskBtn.onclick = function() {
  taskModal.style.display = "block";
}

span.onclick = function() {
  taskModal.style.display = "none";
  editModal.style.display = "none";
}

editBtn.onclick = function() {
	taskModal.style.display = "none";
	editModal.style.display = "block";
}

saveBtn.onclick = function() {
	taskModal.style.display = "block";
	editModal.style.display = "none";
}

doneBtn.onclick = function() {
	taskModal.style.display = "none";
	editModal.style.display = "none";
}

doneBtn2.onclick = function() {
	taskModal.style.display = "none";
	editModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == taskModal) {
    taskModal.style.display = "none";
  }
}
