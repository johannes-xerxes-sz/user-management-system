// import React from 'react'
import "./App.css";

//? Components
import Landing from "./pages/Landing";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
// import Login from "./components/login/Login";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      {/* <Login /> */}
      <Footer />
    </div>
  );
};

export default App;
