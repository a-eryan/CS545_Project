import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/saira-condensed/400.css";
import "@fontsource/saira-condensed/600.css";
import "@fontsource/saira-condensed/500.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Main menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </BrowserRouter>
  );
}

export default App;
