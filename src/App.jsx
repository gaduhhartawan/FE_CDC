import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/Forgotpassword";
import Resetpassword from "./pages/auth/Resetpassword";

import PostJob from "./pages/PostJob";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<Job />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="resetpassword" element={<Resetpassword />} />
        <Route path="postjob" element={<PostJob />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
