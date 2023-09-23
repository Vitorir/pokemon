import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Pokemon from "./Pages/Pokemon/Pokemon";
import Home from "./Pages/Home/Home";
import PokemonUnico from "./Pages/Pokemon/Pokemon2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="">
            <Route path="/" element={<Home />}></Route>
            <Route path="/pokemon" element={<Pokemon />}></Route>
            <Route path="/pokemon/:id" element={<PokemonUnico />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
