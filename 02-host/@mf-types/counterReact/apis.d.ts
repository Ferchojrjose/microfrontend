
    export type RemoteKeys = 'counterReact/CounterReact';
    type PackageType<T> = T extends 'counterReact/CounterReact' ? typeof import('counterReact/CounterReact') :any;