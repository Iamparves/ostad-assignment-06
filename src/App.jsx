import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// const initialTodos = [
//   {
//     id: 0,
//     title: "Complete online React course",
//     completed: true,
//   },
//   {
//     id: 1,
//     title: "Read for 1 hour",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Jog around the park 3x",
//     completed: true,
//   },
//   {
//     id: 3,
//     title: "10 minutes meditation",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "Pick up groceries",
//     completed: false,
//   },
// ];

const genereateNewId = (todos) => {
  const lastId = todos.reduce((prevId, todo) => Math.max(prevId, todo.id), -1);
  const newId = lastId + 1;

  return newId;
};

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    if (title === "") return;

    const newTodo = {
      id: genereateNewId(todos),
      title,
      completed: false,
    };

    setTodos((todos) => [...todos, newTodo]);
    e.target.reset();
  };

  const handleTodoCompleted = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const handleTodoRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleTodoClearCompleted = () => {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  };

  return (
    <AppLayout>
      <Header />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onTodoCompleted={handleTodoCompleted}
        onTodoRemove={handleTodoRemove}
        onTodoClearCompleted={handleTodoClearCompleted}
      />
    </AppLayout>
  );
};

export default App;
