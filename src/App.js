import "./App.css";
// import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Technology from "./components/Technology";
import Tech from "./components/Tech";
import Music from "./components/Music";
import { Route, Routes } from "react-router-dom";
// import Ribbon from "./components/Ribbon";
import Awwards from "./components/Awwards";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Siderbar";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/music" element={<Music />} />
          <Route path="/awwards" element={<Awwards />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/menuicon" element={<MenuIcon />} />
        </Routes>
      </AnimatePresence>
      {/* <Ribbon /> */}
    </div>
  );
}

export default App;
