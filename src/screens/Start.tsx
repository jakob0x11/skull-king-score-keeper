import { useEffect, useState } from 'react'
import Textbox from '../components/Textbox'
import Button from '../components/Button';
import Tag from '../components/Tag';
import { MAX_PLAYERS } from '../utils/Constants';
  
function Start() { 
  const [playerName, setPlayerName] = useState('');
  const [playerNames, setPlayerNames] = useState<Array<string>>([]);

  const canSubmitName = playerName && playerNames.length < MAX_PLAYERS;

  useEffect(() => {
    function handleKeyClicked(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        handleSubmitName();
      }
    }
    window.addEventListener('keydown', handleKeyClicked)
    return () => {
      window.removeEventListener('keydown', handleKeyClicked);
    }
  }, [playerName, playerNames]);

  const handleSubmitName = () => {
    if (!canSubmitName) return;
    setPlayerNames(prev => {
      return [...prev, playerName];
    })
    setPlayerName('');
  }

  return (
    <div className="flex flex-col gap-8">
      <div className='flex flex-row flex-wrap gap-2 justify-center'>
        {
          playerNames.map((name, index) => {
            return (
              <Tag key={`${name}-${index}`} text={name} />
            )
          })
        }
      </div>
      <div className="flex flex-col items-center gap-4">
        <Textbox 
          id="player-name" 
          label={`Enter a name - ${playerNames.length}/${MAX_PLAYERS}`} 
          value={playerName} 
          onValueChange={setPlayerName} 
        />
        <Button 
          text="Submit" 
          onClick={handleSubmitName} 
          disabled={!canSubmitName} 
        />
      </div>
    </div>
  )
}

export default Start;
