
    export type RemoteKeys = 'mf_store/StoreProvider';
    type PackageType<T> = T extends 'mf_store/StoreProvider' ? typeof import('mf_store/StoreProvider') :any;