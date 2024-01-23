import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Working from "./pages/working";
import Finished from "./pages/finish";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/working" element={<Working />} />
        <Route path="/finished" element={<Finished />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
