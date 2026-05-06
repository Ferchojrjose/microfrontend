
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../feature/counter/counterSlice";


export const useCounterStore = () => {

    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    return {
        counter,
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
    }
}