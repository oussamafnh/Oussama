import './App.css';
import Navbar from './components/navbar';
import Sec1 from './components/1stpage/sec1';
import ContactForm from './components/1stpage/sec3';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sec1/>
      <ContactForm/>

    </div>
  );
}

export default App;
