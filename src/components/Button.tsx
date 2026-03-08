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
      className="rounded shadow-lg outline-1 px-2 bg-sky-200 disabled:opacity-25"
    >
      {text}
    </button>
  )
}

export default Button;
