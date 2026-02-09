
    export type RemoteKeys = 'colorpicker/ColorPicker';
    type PackageType<T> = T extends 'colorpicker/ColorPicker' ? typeof import('colorpicker/ColorPicker') :any;