import React from "react";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Forgot from "./components/Forgot";
import NoNavbarLayout from "./components/NoNavbarLayout"; // Import the NoNavbarLayout component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NavbarLayout><Home /></NavbarLayout>} />
          <Route path="/signin" element={<NavbarLayout><SignIn /></NavbarLayout>} />
          <Route path="/signup" element={<NavbarLayout><SignUp /></NavbarLayout>} />
          <Route path="/forgot" element={<NavbarLayout><Forgot /></NavbarLayout>} />
          {/* 404 Route without Navbar */}
          <Route path="*" element={<NoNavbarLayout><NotFound /></NoNavbarLayout>} />
        </Routes>
      </div>
    </Router>
  );
}

function NavbarLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default App;
