import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar'
import { HomePage } from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Experience } from './Pages/Experience';
import { Education } from './Pages/Education';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
