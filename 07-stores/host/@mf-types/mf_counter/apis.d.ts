
    export type RemoteKeys = 'mf_counter/Counter';
    type PackageType<T> = T extends 'mf_counter/Counter' ? typeof import('mf_counter/Counter') :any;