export declare const counterSlice: import("@reduxjs/toolkit").Slice<{
    value: number;
}, {
    increment: (state: {
        value: number;
    }) => void;
    decrement: (state: {
        value: number;
    }) => void;
    reset: (state: {
        value: number;
    }) => void;
}, "counter", "counter", import("@reduxjs/toolkit").SliceSelectors<{
    value: number;
}>>;
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/increment">, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/decrement">, reset: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/reset">;
