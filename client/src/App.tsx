// import React from 'react'
import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./features/apiSlice";
import { Data } from "./data/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//? Components
import Landing from "./pages/Landing";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

//? Pages
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Error from "./pages/error/Error";
import Forgot from "./pages/forgot/Forgot";

// console.log('current component: ', bodyContainer)
// localStorage.removeItem("token");

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={8000} />
      <Navbar />
      <ApiProvider api={api}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="*" element={<Error />} />
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/dashboard" element={<Data />} />
              {/* You can add more routes here */}
            </Routes>
            {/* <Data /> */}
            {/* <SignUp /> */}
            {/* <Login /> */}
          </div>
        </Router>
      </ApiProvider>
      <Footer />
    </Provider>
  );
};

export default App;
