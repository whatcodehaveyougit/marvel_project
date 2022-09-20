import { Route, Routes } from 'react-router-dom';
import Nav from './routes/nav/nav.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'
import { Grid } from '@mui/material';


function App() {

  return (
    <>
      <Grid margin={2}>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
        </Routes>
      </Grid>

    </>
  );
}

export default App;
