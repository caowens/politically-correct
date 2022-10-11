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
      
      <NavBar />
      <BiasNavBar />

    
      <div className='routes-wrapper'>
        <Routes>
          <Route path="left" element={<Left/>} />
          <Route path="center" element={<Center/>} />
          <Route path="right" element={<Right/>} />
        </Routes>
      </div>
      
      {/* <Layout />
      <RowLayout />
      <RowLayout /> */}
      {/* <Card /> */}
      {/* <img src={require("./images/Screen Shot 2022-08-29 at 11.43.58 PM.png")} class="img-fluid" alt="..."></img> */}
      {/* src/images/Screen Shot 2022-08-29 at 11.43.58 PM.png */}
    </div>
  );
}

export default App;
