interface TagProps {
  text: string;
}

function Tag({text}: TagProps) {
  return (
    <div className="rounded p-2 text-sm font-medium text-black bg-red-400">
      <p className="font-semibold">{text}</p>
    </div>
  )
}


export default Tag;
