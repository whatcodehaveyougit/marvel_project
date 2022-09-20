import './App.css';
import { fetchData } from './utils/utils'
import { useState } from 'react'

function App() {

  const [ charactersData, setCharacters ] = useState([])

  const handleClick = async () => {
    const result = await fetchData()
    setCharacters( result['data']['results'] );
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click Me</button>
        {
          charactersData && charactersData.map(( character ) => (
            <p>{character.name}</p>
          ))
        }
      </header>
    </div>
  );
}

export default App;
