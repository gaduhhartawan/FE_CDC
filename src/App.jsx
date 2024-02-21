import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
