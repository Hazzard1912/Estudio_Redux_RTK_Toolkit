import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    /**
     * En Redux Toolkit, podemos actualizar propiedades del estado directamente
     * dentro de nuestros reducers. Aunque esto parece una mutación directa,
     * en realidad Redux Toolkit interpreta y transpila adecuadamente el retorno
     * de un nuevo estado en el que modificamos las propiedades que deseamos.
     *
     * Por ejemplo, si tuviéramos otras propiedades en nuestro objeto de estado,
     * como "name", no necesitamos devolver explícitamente un nuevo objeto
     * mediante `{...state, counter: state.counter + 1}`. En su lugar,
     * simplemente podemos actualizar el valor de "counter" directamente, y
     * Redux Toolkit se encargará de realizar la transpilación necesaria
     * para mantener el estado inmutable.
     */
    decrement: (state) => {
      state.counter -= 1;
    },

    // Asi recibimos argumento.
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions;

// export default counterSlice.reducer;
