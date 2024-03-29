import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Character from "./routes/character/character.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchCharactersAsync from "./store/characters/characters.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersAsync());
  }, [dispatch]);

  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/character/:characterid" element={<Character />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
