
    export type RemoteKeys = 'mf_character/LayoutCard';
    type PackageType<T> = T extends 'mf_character/LayoutCard' ? typeof import('mf_character/LayoutCard') :any;