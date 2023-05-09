import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppointProvider } from "./contexts/AppointContext";
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AppointProvider><Home/></AppointProvider>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
