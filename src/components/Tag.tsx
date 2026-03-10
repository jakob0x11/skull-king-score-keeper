interface TagProps {
  text: string;
}

function Tag({text}: TagProps) {
  return (
    <div className="rounded p-2 text-sm font-medium text-black bg-radial-[at_50%_50%] from-blue-300 via-blue-300 to-blue-400 to-85%">
      <p className="font-semibold">{text}</p>
    </div>
  )
}


export default Tag;
