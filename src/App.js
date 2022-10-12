import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import BiasNavBar from './components/BiasNavBar';
import Center from './pages/Center';
import Left from './pages/Left';
import Right from './pages/Right';

function App() {
  return (
    <div className="App">
      
      {/* NavBars for every page */}
      <NavBar />
      <BiasNavBar />

    
      {/* Links to each media bias page */}
      <div className='routes-wrapper'>
        <Routes>
          <Route path="left" element={<Left/>} />
          <Route path="center" element={<Center/>} />
          <Route path="right" element={<Right/>} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
