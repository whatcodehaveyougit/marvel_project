import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./store/hooks.ts";
import About from "./routes/about/about.tsx";
import Character from "./routes/character/character.tsx";
import Nav from "./components/nav/nav.tsx";
import Home from "./routes/home/home.tsx";
import { fetchCharactersAsync } from "./store/characters/characters.action.ts";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCharactersAsync());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/character/:characterid" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
