import { useState } from "react";
import TodoForm from "./components/todoForm/todoForm";
import TodoList from "./components/todoList/todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const onFormSubmit = (todo) => {
    setTodos([...todos, { ...todo, id: Math.random() * 1000 }]);
  };

  const onDeleteTodo = (todoId) => {
    const newTodos =
      todoId === "all" ? [] : todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header>TODO App</header>
      <TodoForm onFormSubmit={onFormSubmit} />
      <TodoList todos={todos} onDelete={onDeleteTodo} />
    </div>
  );
}

export default App;
