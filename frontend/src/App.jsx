import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [names, setNames] = useState([]);

  const generateNames = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/generate-names');
      setNames(res.data);
    } catch (err) {
      console.error('Erreur lors de la génération des noms :', err);
    }
  };

  return (
    <div className="app-container">
      <h1>Générateur de noms de groupes</h1>
      <button onClick={generateNames}>Générer 10 noms</button>
      <ul>
        {names.map((name, idx) => <li key={idx}>{name}</li>)}
      </ul>
    </div>
  );
}

export default App;