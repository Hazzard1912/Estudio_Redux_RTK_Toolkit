import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// baseQuery es una funcion

/**
 * La caracteristica mas interesante es que podemos establecer
 * de forma explicita una seria de enpoints que comparten cierta
 * url. Esto es, como cuando se trabaja con express por ejemplo.
 *
 * createApi nos crea un customHook por cada funcion creada con el
 * builder.
 */
export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),

    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
