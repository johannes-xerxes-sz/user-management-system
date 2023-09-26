import React, { useEffect, useState } from "react";
import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./features/apiSlice";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Data } from "./data/Data";
import Landing from "./pages/Landing";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import Forgot from "./pages/forgot/Forgot";
import LandingUser from "./pages/user/LandingUser";
// import ToggleDarkModeButton from "./components/ToggleDarkModeButton";

const App: React.FC = () => {
  const [hasToken, setHasToken] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Check if there's a token and role in localStorage
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    setHasToken(!!token); // Use !! to convert to boolean
    setUserRole(role);
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box className="container">
          <Box mt={12}>
            <Navbar />
          </Box>
          <Box>
            <ApiProvider api={api}>
              <Router>
                <Routes>
                  <Route path="*" element={<Error />} />
                  <Route
                    path="/login"
                    element={hasToken ? <Navigate to="/" /> : <Login />}
                  />
                  <Route
                    path="/forgot"
                    element={hasToken ? <Navigate to="/" /> : <Forgot />}
                  />
                  {hasToken ? (
                    <>
                      {userRole === "admin" && (
                        <Route path="/" element={<Data />} />
                      )}
                      {userRole === "user" && (
                        <Route path="/" element={<LandingUser />} />
                      )}
                    </>
                  ) : (
                    <Route path="/" element={<Landing />} />
                  )}
                  {/* Add a default route for unmatched routes */}
                  <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
              </Router>
            </ApiProvider>
          </Box>
          {/* <ToggleDarkModeButton /> */}
          <Box mt={5}>
            <Footer />
          </Box>
        </Box>
      )}
    </Provider>
  );
};

export default App;
