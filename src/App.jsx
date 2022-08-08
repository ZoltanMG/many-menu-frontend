import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;