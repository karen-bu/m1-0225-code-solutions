'use strict';
let todos = [];
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const todosStorage = localStorage.getItem('todos-storage');
  if (todosStorage !== '') {
    return JSON.parse(todosStorage);
  } else {
    return [];
  }
}
todos = readTodos();
