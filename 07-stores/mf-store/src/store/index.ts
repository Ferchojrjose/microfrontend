import { configureStore } from "@reduxjs/toolkit";

import {counterSlice} from "../feature/counter/counterSlice";

// Configuracion de la store de Redux
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, // Reducer del contador
    },
});