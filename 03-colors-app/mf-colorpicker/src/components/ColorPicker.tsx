
import { useState } from 'react';
import '../index.css';

const ColorPicker = () => {

  const [color, setColor] = useState("#000000");

  // Manejador del evento de envío del formulario
  const handleAddColor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Agregar color a la lista", color);
  }

  return (
    <form onSubmit={handleAddColor}>
      <input className="w-full h-72" type="color" name="color" title="Selecciona un color..." value={color} onChange={(e) => setColor(e.target.value)} />
      <div className="text-center flex flex-col items-center">
        <h2 className="mt-3 text-2xl">
          <div className="w-[20px] h-[20px] bg-zinc-500 rounded-full inline-block mr-2 align-middle" style={{ backgroundColor: color }}></div>
          {color}
        </h2>

        <button 
        type="submit"
          className="mt-3 w-1/2 min-w-[120px] h-10 bg-zinc-400 text-white flex items-center justify-center border border-zinc-300 rounded-md hover:border-zinc-400"
        >
          Agregar color a la lista
        </button>

      </div>
    </form>
  )
}

export default ColorPicker;