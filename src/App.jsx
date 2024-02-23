import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import About from "./pages/About";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/Forgotpassword";
import Resetpassword from "./pages/auth/Resetpassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs/:id" element={<Job />} />
        <Route path= "login" element = {<LoginPage/>} />
        <Route path= "register" element = {<RegisterPage/>} />
        <Route path= "forgotpassword" element = {<ForgotPassword/>} />
        <Route path= "resetpassword" element = {<Resetpassword/>} />
        
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
