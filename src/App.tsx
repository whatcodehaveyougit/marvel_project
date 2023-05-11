import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/nav.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'
import { Grid } from '@mui/material';
import CharacterPage from './routes/character/character.component';

function App() {

  return (
    <>
      <Grid margin={2}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/character/:characterid' element={<CharacterPage />} />
        </Routes>
      </Grid>

    </>
  );
}

export default App;
