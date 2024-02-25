import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import NoteState from "./context/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
          <Routes>
            {/* <Route exact path="/" element={<Navbar />} /> */}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
