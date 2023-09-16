import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  /**
   * El custom hook generado por el RTK nos devuelve mucha
   * informacion automaticamente (en la cual no tuvimos que
   * pensar como obtenerla).
   *
   * Luego solo tenemos que desestructurar lo que nos interese.
   */
  // const { data: todos = [], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>isLoading: {isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Previus todo</button>
      <button onClick={() => setTodoId(todoId + 1)}>Next todo</button>

      {/* Esto hace parte del ejemplo de useGetTodosQuery */}
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done " : "Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};

// El RTK aprovecha mucho el cache del navegador, evitando hacer
// llamadas a api innecesarias, mejorando bastante el performance
// de nuestras aplicaciones.