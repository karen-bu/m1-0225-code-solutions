/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): any {
  const todosStorage = localStorage.getItem('todos-storage') as string;
  if (todosStorage !== '') {
    return JSON.parse(todosStorage);
  } else {
    return [];
  }
}

todos = readTodos();
