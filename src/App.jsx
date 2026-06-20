import {useState} from 'react';

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {

  const [activePlayer, setActivePlater] = useState('X');

  function handleSelectSquare(){
    setActivePlater((curActivePlayer) => curActivePlayer ==='X'?'O':'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        GAME BOARD
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOGS
    </main>
  )
}

export default App
