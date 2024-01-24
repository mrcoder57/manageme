import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Working from "./pages/working";
import Finished from "./pages/finish";
import CreateTodo from "./pages/create";
import EditTodo from "./pages/edit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/working" element={<Working />} />
        <Route path="/finished" element={<Finished />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
