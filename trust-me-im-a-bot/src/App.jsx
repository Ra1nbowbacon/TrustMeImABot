import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBot, setIsBot] = useState(true);  // Starten mit der Annahme, dass es ein Bot ist
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [gameStatus, setGameStatus] = useState('');

  // Chat hinzufügen
  const handleChatSubmit = () => {
    if (userInput.trim()) {
      const newChat = { user: userInput, bot: response };
      setChatHistory([...chatHistory, newChat]);

      // Generiere eine neue Antwort (hier kannst du beliebige Logik einfügen)
      setResponse(isBot ? 'Ich bin der Bot und versuche menschlich zu klingen...' : 'Ich bin menschlich und versuche bot-mäßig zu wirken...');
      setUserInput('');
    }
  };

  // Wenn das Spiel beendet ist
  const endGame = (result) => {
    setGameStatus(result);
  };

  return (
    <div className="App">
      <h1>Trust Me, I'm A Bot</h1>
      <p>{gameStatus ? `Spiel beendet: ${gameStatus}` : 'Versuche herauszufinden, ob du mit einem Bot sprichst!'}</p>

      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
            <p><strong>Du:</strong> {chat.user}</p>
            <p><strong>Bot:</strong> {chat.bot}</p>
          </div>
        ))}
      </div>

      {!gameStatus && (
        <div>
          <input 
            type="text" 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
            placeholder="Schreibe hier..." 
          />
          <button onClick={handleChatSubmit}>Absenden</button>
        </div>
      )}

      <button onClick={() => endGame('Gewonnen! Du hast den Bot entlarvt!')}>Beende das Spiel</button>
    </div>
  );
}

export default App;
