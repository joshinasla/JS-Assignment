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
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var i = 0;

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
    i--;
  }

  li.addEventListener("click", crossOut);

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
  var eBtn = document.creatElement("button");
  eBtn.appendChild(document.createTextNode("-"));
  li.appendChild(eBtn);
  eBtn.addEventListener("click", editListItem);
  function editListItem() {
    li.classList.add("edit");
  }
  i++;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
document.getElementById("day").innerHTML = days[date.getDay()];
