import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
<<<<<<< HEAD
import CareerCoach from "./pages/CareerCoach";
=======
import WorkingOn from "./pages/Maintenance";
import PostJobView from "./pages/PostJobView";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
>>>>>>> master

function App() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<Job />} />
          <Route path="about" element={<About />} />
          <Route
            path="myaccount/:id"
            element={user ? <MyAccount /> : <Navigate to={"/login"} replace />}
          />
          <Route
            path="postjob"
            element={
              user?.isAdmin || user?.isCompany ? (
                <PostJob />
              ) : (
                <Navigate to={"/login"} replace />
              )
            }
          />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<Resetpassword />} />
        </Route>
        <Route path="maintenance" element={<WorkingOn />} />
        <Route path="postjobview" element={<PostJobView />} />
        <Route path="*" element={<Notfound />} />
        <Route path="testcoach" element={<CareerCoach />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
  protected
    layout
      home
      jobs
      jobs/:id
      about
    layout
    myaccount
    postjob (only admin and company)
    login
    register
    forgot
    reset
  protected
  404
 */
