interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

function Button({text, onClick, disabled}: ButtonProps) {
  
  return (    
    <button 
      onClick={onClick}
      disabled={disabled}
      className="rounded shadow-lg px-2 text-xl bg-amber-300 text-black hover:scale-110 cursor-pointer disabled:opacity-25"
    >
      {text}
    </button>
  )
}

export default Button;
