import { useState } from "react";

import { useCounterStore } from "mf_store/StoreProvider"; // Hook para usar el store de Redux en el microfrontend


import "../index.css";

const Counter = () => {


  const { counter, increment, decrement } = useCounterStore(); // Hook para usar el store de Redux en el microfrontend


  return (
    <div className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-slate-800">Administrar stock</h2>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={decrement}
          aria-label="Decrementar"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500 text-2xl font-bold text-white shadow-sm transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 active:scale-95"
        >
          −
        </button>
        <button
          type="button"
          onClick={increment}
          aria-label="Incrementar"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white shadow-sm transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 active:scale-95"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
