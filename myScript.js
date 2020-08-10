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
(function () {
  var todoList = {
    todoData: localStorage.getItem("Todos"),
    addBtn: document.getElementById("addBtn"),
    editBtn: document.getElementById("editBtn"),
    newTodo: document.getElementById("newTodo"),
    todos: [],
    init: function () {
      if (todoList.todoData) {
        todoList.todos = JSON.parse(todoList.todoData);
        todoList.generateTodoList();
      }
      this.bindUIActions();
    },
    addTodoData: function (todoText) {
      this.todos.push({
        todoText: todoText,
        id: new Date().getUTCMilliseconds(),
        completed: false,
      });
      console.log(todoText);
      this.saveTodos();
    },
    addTodoEditData: function (todoText) {
      this.todos.insertbefore({
        todoText: todoText,
        id: new Date().getUTCMilliseconds(),
        completed: true,
      });
      console.log(todoText);
      this.saveTodos();
      this.generateTodoList();
    },
    createTodoItem: function (todoObj) {
      //  Create  dom nodes/html elements for a single todo item
      var todo = document.createElement("div"),
        todo_toggle = document.createElement("div"),
        todo_text = document.createElement("input"),
        edit_btn = document.createElement("span"),
        edit_icon = document.createElement("i"),
        delete_btn = document.createElement("span"),
        delete_icon = document.createElement("i");

      // Add classess to each element
      todoObj.completed
        ? (todo.className = "todo complete")
        : (todo.className = "todo");
      todo_toggle.className = "todo_toggle";
      todo_toggle.className = "todo_toggle";
      todo_text.setAttribute("type", "text");
      todo_text.readOnly = true;

      edit_btn.className = "edit_btn";
      edit_icon.className = "fa fa-edit fa-2x";
      delete_btn.className = "delete_btn";
      delete_icon.className = "fa fa-trash-o fa-2x";
      edit_btn.appendChild(edit_icon);
      delete_btn.appendChild(delete_icon);

      todo_text.value = todoObj.todoText;

      // Build the todo item
      todo.appendChild(todo_toggle);
      todo.appendChild(todo_text);
      todo.appendChild(edit_btn);
      todo.appendChild(delete_btn);

      // Add functionality to the todo item
      todo_text.addEventListener("click", function () {
        todoList.toggleEdit(todoObj, this);
      });

      todo_toggle.addEventListener("click", function () {
        todoList.toggleComplete(todoObj, todo);
      });

      delete_btn.addEventListener("click", function () {
        todoList.deleteTodo(todoObj);
      });
      edit_btn.addEventListener("click", function () {
        todo_text.readOnly = false;
      });
      edit_btn.addEventListener("keypress", function () {
        if (event.keyCode === 13 && todoList.newTodo.value !== "") {
          localStorage.removeItem("Todos", JSON.stringify(this.todos));
          todoList.addTodoEditData(todo_text);
          todo_text.readOnly = "true";
        }
      });
      return todo;
    },
    generateTodoList: function () {
      this.todoData = localStorage.getItem("Todos");
      this.todos = JSON.parse(this.todoData);
      // Sort Todos, put completed Todos at bottom
      //this.todos.sort(compare);
      this.todos = this.todos.reverse();

      document.querySelector(".todo-list").innerHTML = "";
      this.todos.forEach(function (todo) {
        document
          .querySelector(".todo-list")
          .appendChild(todoList.createTodoItem(todo));
      });
      document.querySelector(
        "#remainingTodos"
      ).innerHTML = this.remainingTodos();
    },
    toggleEdit: function (todoObj, todo) {
      if (!todoObj.completed) {
        todo.addEventListener("keyup", function () {
          todoObj.text = todo.value;
        });
        todo.addEventListener("blur", function () {
          todoList.saveTodos();
        });
      }
    },
    toggleComplete: function (todoObj) {
      todoObj.completed = !todoObj.completed;
      this.saveTodos();
      this.generateTodoList();
      this.completeTodos();
    },
    deleteTodo: function (todoObj) {
      this.todos.splice(this.todos.indexOf(todoObj), 1);
      this.saveTodos();
      this.generateTodoList();
    },

    saveTodos: function () {
      localStorage.setItem("Todos", JSON.stringify(this.todos));
    },
    remainingTodos: function () {
      var remainingTodos = this.todos.filter(function (todo) {
        if (todo.completed === false) {
          return todo;
        }
      });
      return remainingTodos.length;
    },
    completeTodos: function () {
      let todoList = this.parentNode;
      let parent = todoList.parentNode;
      let id = parent.id;
      let target =
        id === "todo"
          ? document.getElementById("showCompletedTodos")
          : document.getElementById("todo-list");
      removeEventListener.removerChild(todoList);
      target.insertBefore(todoList, target.childNodes[0]);
    },
    bindUIActions: function () {
      // Add a todo by pressing enter key
      todoList.newTodo.addEventListener("keypress", function (event) {
        if (event.keyCode === 13 && todoList.newTodo.value !== "") {
          todoList.addTodoData(todoList.newTodo.value);
          todoList.newTodo.value = "";
          todoList.generateTodoList();
        }
      });

      // On click of add button, add a todo to the list
      todoList.addBtn.addEventListener("click", function () {
        if (todoList.newTodo.value !== "") {
          todoList.addTodoData(todoList.newTodo.value);
          todoList.newTodo.value = "";
          todoList.generateTodoList();
        }
      });
    },
  };

  todoList.init();
})();
