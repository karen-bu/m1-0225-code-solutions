'use strict';
let todos = [];
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const todosStorage = localStorage.getItem('todos-storage');
  if (todosStorage !== '') {
    JSON.parse(todosStorage);
    return todos;
  } else {
    return [];
  }
}
todos = readTodos();
