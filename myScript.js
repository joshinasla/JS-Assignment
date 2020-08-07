var date = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("day").innerHTML = days[date.getDay()];
document.getElementById("date").innerHTML = date.getDate();
document.getElementById("month").innerHTML = months[date.getMonth()];
var addButton = document.getElementsByTagName("button")[0];
addButton.onclick = addTask;
var taskInput = document.getElementById("new-task");
var incompleteTasks = document.getElementById("incomplete-tasks");

function addTask() {
  console.log("add task...");
  var inputValue = taskInput.value;
  console.log("Element: " + inputValue);
  var listItem = document.createTextNode(inputValue);
  var newItem = document.createElement("li");
  var x = document.createElement("IMG");
  x.setAttribute("src", "img/edit-icon.png");
  x.setAttribute("width", "15 px");
  newItem.appendChild(x);
  var y = document.createElement("IMG");
  y.setAttribute("src", "img/delete-icon.png");
  y.setAttribute("width", "15 px");
  newItem.appendChild(y);
  newItem.appendChild(listItem);
  //var checkbox = document.createElement("checkbox");
  //newItem.appendChild(checkbox);
  //   newItem.append(
  //     `<label class="checkbox" id="checkbox"
  //   >` +
  //       { listItem } +
  //       `<input type="checkbox" /><span class="checkmark"></span
  // ></label>
  // <button class="edit">
  //   <img src="img/edit-icon.png" alt="EDIT" />
  // </button>
  // <button class="delete">
  //   <img src="img/delete-icon.png" alt="DELETE" />
  // </button>`
  //   );
  //   var editButton = document.createElement("button");
  //   newItem.appendChild(editButton);
  //   var deleteButton = document.createElement("button");
  //   newItem.appendChild(deleteButton);
  //   document.getElementById("new-task").value = "";
  //   var span = document.createElement("SPAN");
  //   var txt = document.createTextNode("\u00D7");
  //   span.className = "close";
  //   span.appendChild(txt);
  //   li.appendChild(span);

  //   for (i = 0; i < close.length; i++) {
  //     close[i].onclick = function () {
  //       var div = this.parentElement;
  //       div.style.display = "none";
  //     };
  //   }
  //   document.getElementById("incomplete-tasks"). = listItem;
  incompleteTasks.appendChild(newItem);
}

var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var edit = document.getElementsByClassName("edit");
var i;
for (i = 0; i < edit.length; i++) {
  edit[i].onclick = function () {
    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");
  
    if (containsClass) {
      
      
      label.innerText = editInput.value;
    } else {
      editInput.value = label.innerText;
    }

    /
    listItem.classList.toggle("editMode");
  };
}

var taskCompleted = function () {
  console.log("Complete Task...");
  var listItem = this.parentNode;
  document.getElementById("completed-tasks").append(listItem);
};
var taskIncomplete = function () {
  console.log("Incomplete Task...");
  var listItem = this.parentNode;
  document.getElementById("incomplete-tasks").appendChild(listItem);
};
// const ITEM = `<li class="clearfix"><label class="checkbox">${{
//     toDo,
//   }}<input type="checkbox" /><span class="checkmark"></span>
//       </label>
//       <button class="edit">
//         <img src="img/edit-icon.png" alt="EDIT" />
//       </button>
//       <button class="delete">
//         <img src="img/delete-icon.png" alt="DELETE" />
//       </button>
//     </li>`;
//   var listItem = document.createTextNode(ITEM);
//   var newItem = document.createElement("li");
//   newItem.appendChild(listItem);
//   document.getElementById("incomplete-tasks").appendChild(newItem);
//   //incompleteTasks.insertAdjecentHTML(POSITION, ITEM);
// }
// addTask("hi");
// {

var editTask = function () {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  if (containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }

  listItem.classList.toggle("editMode");
};
