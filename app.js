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
var closeButton = documnet.getElementsByTagName("LI");
var i;
for (i = 0; i < closeButton.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(txt);
  closeButton[i].appendChild(span);
}
function newElement() {
  console.log("add task...");
  var inputValue = taskInput.value;
  console.log("Element: " + inputValue);
  var listItem = document.createTextNode(inputValue);
  var newItem = document.createElement("li");
  var checkbox = document.createElement("checkbox");
  newItem.appendChild(checkbox);
  newItem.appendChild(listItem);
  //   var editButton = document.createElement("button");
  //   newItem.appendChild(editButton);
  //   var deleteButton = document.createElement("button");
  //   newItem.appendChild(deleteButton);
  document.getElementById("new-task").value = "";
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
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
