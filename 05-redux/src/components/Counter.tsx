import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { decrement, increment } from "../feature/counter/counterSlice";


export const Counter = () => {
    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}
