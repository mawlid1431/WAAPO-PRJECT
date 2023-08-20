import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SinglePost from "./Pages/SinglePost";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Job from "./Pages/Job";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { UserContext } from "./Context/UserContext";
import JobList from "./Pages/JobList";
import BlogCreate from "./Pages/BlogCreate";
import SingleBlog from "./Pages/SingleBlog";
import BlogList from "./Pages/BlogList";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
      setLoggedIn(true);
    }
    setLoading(false);
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/single/:id" element={<SinglePost />} />
            <Route path="jobs/single/:id" element={<SinglePost />} />
            <Route path="/blogs/singleBlog/:id" element={<SingleBlog />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route
              path="/createBlog"
              element={loggedIn ? <BlogCreate /> : <Navigate to="/login" />}
            />
            <Route
              path="/jobs"
              element={loggedIn ? <JobList /> : <Navigate to="/login" />}
            />
            <Route
              path="/createJob"
              element={loggedIn ? <Job /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
      <ToastContainer
        position="bottom-center"
        autoClose={400}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
