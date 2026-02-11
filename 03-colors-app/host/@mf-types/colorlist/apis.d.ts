
    export type RemoteKeys = 'colorlist/ColorList';
    type PackageType<T> = T extends 'colorlist/ColorList' ? typeof import('colorlist/ColorList') :any;