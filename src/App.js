import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/navbar';
import Sec1 from './components/1stpage/sec1';
import ContactForm from './components/1stpage/sec3';
import Loader from "./components/loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading with a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust the duration as needed

    // Your other initialization code
  }, []);
  return (
    <div className="App">
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Sec1 />
            <ContactForm />
          </>

        )
      }
    </div>
  );
}

export default App;
