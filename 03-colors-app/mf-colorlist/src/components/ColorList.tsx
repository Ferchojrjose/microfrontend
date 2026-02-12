
import '../index.css';
import SweetAlert from 'sweetalert2';

interface ColorListProps {
  colors: string[];
}

const ColorList = (props: ColorListProps) => {
  // Destructuración de props
  const { colors } = props;

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    SweetAlert.fire({
      title: 'Color copiado',
      text: 'El color ha sido copiado al portapapeles',
      icon: 'success',
      timer: 1500
    });
  }


  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col gap-1 items-center w-full overflow-y-auto max-h-[30vh] pr-1">
        {colors.map((color) => (
          <button
            key={color}
            className="text-white w-1/2 min-w-[120px] h-10 flex items-center justify-center border border-zinc-300 rounded-md hover:border-zinc-400 cursor-pointer"
            title="Copiar color.."
            style={{ backgroundColor: color }}
            onClick={() => handleCopyColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorList;