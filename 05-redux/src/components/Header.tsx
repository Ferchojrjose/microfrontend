import { useSelector } from "react-redux";
import type { RootState } from "../store";


export const Header = () => {

    const counter = useSelector((state: RootState) => state.counter.value);

    return (
        <header>
            <h1>Header</h1>
            <p>Counter: {counter}</p>
        </header>
    )
}
