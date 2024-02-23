import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import About from "./pages/About";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/Forgotpassword";
import Resetpassword from "./pages/auth/Resetpassword";
import Layout from "./components/Layout";
import MyAccount from "./pages/MyAccount";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<Job />} />
          <Route path="about" element={<About />} />
          <Route path="myaccount" element={<MyAccount />} />
        </Route>
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
