
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Reserva from './components/Reserva/Reserva'
import Home from "./components/Home/Home";
function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/reserva' element={<Reserva/>}></Route>
    </Routes>
   </div>
  );
}

export default App;
