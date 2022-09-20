import { Route, Routes } from 'react-router-dom';
import Nav from './routes/nav/nav.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
