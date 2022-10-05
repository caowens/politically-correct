import './App.css';
import NavBar from './components/NavBar';
import BiasNavBar from './components/BiasNavBar';
import Card from './components/Card';
import Layout from './components/Layout';
import RowLayout from './components/RowLayout';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <BiasNavBar />
      <Layout />
      <RowLayout />
      <RowLayout />
      {/* <Card /> */}
      {/* <img src={require("./images/Screen Shot 2022-08-29 at 11.43.58 PM.png")} class="img-fluid" alt="..."></img> */}
      {/* src/images/Screen Shot 2022-08-29 at 11.43.58 PM.png */}
    </div>
  );
}

export default App;
