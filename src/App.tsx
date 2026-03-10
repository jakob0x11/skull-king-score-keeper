import { useState } from "react"
import Start from "./screens/Start";

const Screens = {
  Start: 'Start'
} as const;

function App() {
  const [screen, setScreen] = useState<keyof typeof Screens>(Screens.Start);

  const screenComponents = {
    [Screens.Start]: <Start />
  }

  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col justify-center items-center gap-24 px-4 text-white font-semibold font-[Noto_Sans] bg-radial-[at_50%_75%] from-amber-700 via-amber-900 to-amber-950 to-90%">
      <h1 className="text-3xl text-center font-bold underline decoration-2 font-[Segoe_UI] text-yellow-500">
        Skull King - Score Keeper
      </h1>
      {screenComponents[screen] || <p>Error! No screen chosen!</p>}
    </div>
  )
}

export default App
