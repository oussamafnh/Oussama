import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/navbar';
import Home from './components/1stpage/sec1';
import ContactForm from './components/1stpage/sec3';
import Loader from "./components/loader";
import About from "./components/1stpage/sec2";
import RouterPage from "./router";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <div className="App">
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            {/* <Home />
            <About />
            <ContactForm /> */}
            <RouterPage />
          </>

        )
      }
    </div>
  );
}

export default App;
