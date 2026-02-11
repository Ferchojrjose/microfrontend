

import '../index.css';



const ColorList = () => {

  const colors = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#FFFFFF"];


  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-1 items-center w-full">
        {colors.map((color) => (
          <button
            key={color}
            className="text-white w-1/2 min-w-[120px] h-10 flex items-center justify-center border border-zinc-300 rounded-md hover:border-zinc-400"
            title="Copiar color.."
            aria-current-color="true"
            style={{ backgroundColor: color }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorList;