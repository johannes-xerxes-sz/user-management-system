// import React from 'rea ct'
import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./features/apiSlice";
import { Data } from "./data/Data";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Box } from "@mui/material";

//? Components
import Landing from "./pages/Landing";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

//? Pages
import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
import Error from "./pages/error/Error";
import Forgot from "./pages/forgot/Forgot";

// console.log('current component: ', bodyContainer)
// localStorage.removeItem("token");

const App: React.FC = () => {

  const hasToken = !!localStorage.getItem("token");

  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <Box>
      <Navbar />
      </Box>
      <ApiProvider api={api}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="*" element={<Error />} />
              <Route
                path="/"
                element={hasToken ? <Navigate to="/dashboard" /> : <Landing />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route
                path="/dashboard"
                element={hasToken ? <Data /> : <Navigate to="/" />}
              />
              {/* You can add more routes here */}
            </Routes>
          </div>
        </Router>
      </ApiProvider>
      <Footer />
    </Provider>
  );
};

export default App;
