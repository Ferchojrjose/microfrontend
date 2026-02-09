import { useState } from "react";
import Button from "./Button";

import "../index.css";

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const getTextColor = () => {
        if (count > 0) return "text-green-500";
        if (count < 0) return "text-red-500";
        return "text-white";
    }

    return (
        <div className="bg-[#444] text-white text-center p-4">
            <h2 className={getTextColor()}>Counter: {count}</h2>
            <div className="flex gap-3 justify-center mt-4">
                <Button onClick={increment} text="+1" />
                <Button onClick={decrement} text="-1" />
                <Button onClick={reset} text="Reset" />
            </div>
        </div>
    )
}

export default Counter;