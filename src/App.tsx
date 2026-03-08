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
    <div className="min-h-screen w-screen overflow-hidden bg-blue-500 flex flex-col justify-center items-center gap-24 px-4">
      <h1 className="text-3xl text-center font-bold underline">
        Skull King - Score Keeper
      </h1>
      {screenComponents[screen] || <p>Error! No screen chosen!</p>}
    </div>
  )
}

export default App
