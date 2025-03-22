import React, { useState, useEffect } from 'react';

const Matchmaking = ({ onMatchFound }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuliere das Matchmaking (verzögert die Verbindung)
    const timeout = setTimeout(() => {
      setLoading(false);
      onMatchFound(); // Spiel starten
    }, 3000); // 3 Sekunden warten

    return () => clearTimeout(timeout);
  }, [onMatchFound]);

  return (
    <div>
      {loading ? <p>Warte auf einen Gegner...</p> : <p>Du wurdest verbunden!</p>}
    </div>
  );
};

export default Matchmaking;
