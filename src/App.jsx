import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Home from "./routes/home/home";
import About from "./routes/about/about";
import Character from "./routes/character/character";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCharactersAsync } from "./store/characters/characters.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersAsync());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/character/:characterid" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
