import '../index.css';
interface ColorPickerProps {
    color: string;
    setColor: (color: string) => void;
    handleAddColor: (e: React.FormEvent<HTMLFormElement>) => void;
}
declare const ColorPicker: (props: ColorPickerProps) => import("react/jsx-runtime").JSX.Element;
export default ColorPicker;
