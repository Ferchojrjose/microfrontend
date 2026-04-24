
    export type RemoteKeys = 'mf_charaterDetail/CharacterDetail';
    type PackageType<T> = T extends 'mf_charaterDetail/CharacterDetail' ? typeof import('mf_charaterDetail/CharacterDetail') :any;