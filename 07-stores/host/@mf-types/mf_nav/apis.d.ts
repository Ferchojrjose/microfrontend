
    export type RemoteKeys = 'mf_nav/Navbar';
    type PackageType<T> = T extends 'mf_nav/Navbar' ? typeof import('mf_nav/Navbar') :any;