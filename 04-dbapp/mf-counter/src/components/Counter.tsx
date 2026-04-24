import { useState } from "react";

import "../index.css";

interface CounterProps {
  initialCounter?: number;
}

export const Counter = ({ initialCounter = 0 }: CounterProps) => {
  const [counter, setCounter] = useState<number>(initialCounter);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-slate-200 w-fit mx-auto">
      <label className="text-5xl font-bold text-slate-800 tabular-nums tracking-tight">
        {counter}
      </label>
      <div className="flex gap-3">
        <button
          onClick={handleIncrement}
          className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow-sm hover:bg-emerald-600 active:scale-95 transition cursor-pointer"
        >
          + 1
        </button>
        <button
          onClick={handleDecrement}
          className="px-5 py-2 rounded-lg bg-rose-500 text-white font-semibold shadow-sm hover:bg-rose-600 active:scale-95 transition cursor-pointer"
        >
          - 1
        </button>
      </div>
    </div>
  );
};

export default Counter;
