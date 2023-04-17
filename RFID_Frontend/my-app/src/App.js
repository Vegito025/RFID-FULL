import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import RFID_data from "./components/RFID Data/Data"
import Register from "./components/Register/Register"
import Analytics from "./components/Analytics/Analytics"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/data" element={<RFID_data/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/analytics" element={<Analytics />}/>
      </Routes>
    </Router>
  );
}

export default App;
