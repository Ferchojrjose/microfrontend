import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// Slice de Redux para el contador, estados iniciales y reducers
// Es un constructor de Redux Toolkit que crea un slice de Redux
export const counterSlice = createSlice({
  name: "counter", // Nombre del slice
  initialState, // Estado inicial
  reducers: { // Metodos para modificar el estado
    // Incrementar el contador
    increment: (state) => {
      state.value += 1;
    },
    // Decrementar el contador
    decrement: (state) => {
      state.value -= 1;
    },
    // Resetear el contador
    reset: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;