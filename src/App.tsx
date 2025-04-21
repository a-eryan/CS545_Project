import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/saira-condensed/400.css";
import "@fontsource/saira-condensed/600.css";
import "@fontsource/saira-condensed/500.css";
import { useUser } from "./store/userContext";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  return (
    <BrowserRouter>
      {user && (
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} user={user} />
      )}
      <Main menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </BrowserRouter>
  );
}

export default App;
