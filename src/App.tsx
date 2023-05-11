import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/nav.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'
import { Grid } from '@mui/material';
import { fetchData } from './utils/utils'
import { useState, useEffect } from 'react'
import CharacterPage from './routes/character/character.component';
import { Character } from './types/types'

function App() {

  const [charactersData, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const fetchPageData = async () => {
      const result = await fetchData<Character[]>('/characters')
      setCharacters(result['data']['results']);
    }
    fetchPageData()
      .catch(console.error)
  }, [])

  return (
    <>
      <Grid margin={2}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home charactersData={charactersData} />} />
          <Route path='about' element={<About />} />
          <Route path='/character/:characterid' element={<CharacterPage charactersData={charactersData} />} />
        </Routes>
      </Grid>

    </>
  );
}

export default App;
