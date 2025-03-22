// src/App.jsx

import React, { useState } from 'react';
import Matchmaking from './components/Matchmaking';
import ChatBox from './components/ChatBox';

const App = () => {
  const [inGame, setInGame] = useState(false);

  return (
    <div>
      <h1>Trust Me, I'm A Bot</h1>
      {!inGame ? (
        <Matchmaking onMatchFound={() => setInGame(true)} />
      ) : (
        <ChatBox />
      )}
    </div>
  );
};

export default App;