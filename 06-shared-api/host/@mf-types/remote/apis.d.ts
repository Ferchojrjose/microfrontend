
    export type RemoteKeys = 'remote/Header';
    type PackageType<T> = T extends 'remote/Header' ? typeof import('remote/Header') :any;