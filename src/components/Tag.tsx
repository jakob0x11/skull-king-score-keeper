interface TagProps {
  text: string;
  onClickDismiss?: () => void;
}

function Tag({text, onClickDismiss}: TagProps) {
  return (
    <div className="relative min-w-20">
      {onClickDismiss && (
        <div className="w-4 h-4 bg-black rounded-full outline-1 absolute -right-2 -top-2">
          <button onClick={onClickDismiss} className="absolute left-1 -top-1/3">x</button>
        </div>
      )}
      <div className="rounded p-2 text-sm font-medium text-black bg-radial-[at_50%_50%] from-blue-300 via-blue-300 to-blue-400 to-85%">
        <p className="font-semibold text-center">{text}</p>
      </div>
    </div>
  )
}


export default Tag;
