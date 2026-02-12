
    export type RemoteKeys = 'colorpicker/ColorPicker' | 'colorpicker/useColors';
    type PackageType<T> = T extends 'colorpicker/useColors' ? typeof import('colorpicker/useColors') :T extends 'colorpicker/ColorPicker' ? typeof import('colorpicker/ColorPicker') :any;