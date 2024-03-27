import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Character from "./routes/character/character.component";
import { Grid } from "@mui/material";
import { fetchData } from "./utils/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCharacters } from "./features/characters/charactersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPageData = async () => {
      const result = await fetchData("/characters");
      const resultData = result["data"]["results"];
      dispatch(setCharacters(resultData));
    };
    fetchPageData().catch(console.error);
  }, [dispatch]);

  return (
    <>
      <Grid margin={2}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/character/:characterid" element={<Character />} />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
