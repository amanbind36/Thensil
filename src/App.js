import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Navbar from './Components/Navabar/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
