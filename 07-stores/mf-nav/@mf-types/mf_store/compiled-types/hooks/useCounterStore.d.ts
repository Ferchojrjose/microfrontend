export declare const useCounterStore: () => {
    counter: any;
    increment: () => {
        payload: undefined;
        type: "counter/increment";
    };
    decrement: () => {
        payload: undefined;
        type: "counter/decrement";
    };
    reset: () => {
        payload: undefined;
        type: "counter/reset";
    };
};
