import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../feature/counter/counterSlice";

export const store = configureStore({
    reducer : {
        counter: counterSlice.reducer
    }
});

// Exportamos el tipo del estado global y el tipo de la función de despacho
export type RootState = ReturnType<typeof store.getState>;
// Exportamos el tipo de la función de despacho
export type AppDispatch = typeof store.dispatch;