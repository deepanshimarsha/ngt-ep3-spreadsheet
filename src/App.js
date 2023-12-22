import Spreadsheet from 'react-spreadsheet';
import './App.css'
import { GenerateSpreadsheet } from './components/GenerateSpreadsheet';
import { Home } from './components/Home';
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { GeneratedSpreadsheet } from './components/GeneratedSpreadsheet';
import { AttributesProvider, DataProvider } from './AttributesContext';

const App = () => {
  
  return (
    <AttributesProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="generate-spreadsheet" element={<GenerateSpreadsheet />} />
        <Route path="spreadsheet-manager" element={<GeneratedSpreadsheet />} />
      </Routes>
    </Router>
    </AttributesProvider>
  )
};

export default App;