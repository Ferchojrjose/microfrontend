import { Provider } from "react-redux";

import { store } from "./store";

export { useCounterStore } from "./hooks/useCounterStore";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider;