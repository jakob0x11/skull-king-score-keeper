interface TextboxProps {
  id: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void; 
}

function Textbox({id, label, value, onValueChange}: TextboxProps) {
  const textboxId = `${id}-textbox`;
  
  return (
    <div className="flex flex-col items-center gap-2">
      <label htmlFor={textboxId} className="font-medium">{label}</label>
      <input 
        type="text" 
        id={textboxId} 
        value={value}
        onChange={e => onValueChange(e.target.value)} 
        className="rounded shadow-lg outline-2 px-2 text-center" 
        minLength={1}
        maxLength={30}
      />
    </div>
  )
}

export default Textbox;
