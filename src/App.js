import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

    // <NotFound />
  );
}

export default App;
