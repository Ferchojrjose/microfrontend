
interface ButtonProps {
    onClick: () => void;
    text: string;
}


const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button 
        className="bg-[#666] hover:bg-[#777] text-white px-5 py-2 rounded transition-colors" 
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button