import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter', // Nombre del slice
    initialState: {
        value: 0 // Valor inicial del estado
    },
    reducers: { // Reducers son las funciones que actualizan el estado
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
});

export const { increment, decrement } = counterSlice.actions;