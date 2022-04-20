import logo from './logo.svg';
import './App.css';
import { Data } from './Components/Data';
import {store} from './Redux/store';
import {MediaCard} from "./Components/Home" 
import { Home } from "./components/Home.jsx"

import { Navbar } from "./components/Navbar.jsx"

function App() {
  return (
    <>
    <Data/>
    <Navbar/>
   <MediaCard />
   <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/data" element={<Data />}></Route>
         <Route path="*" element={<div>404 page not found</div>}></Route>
      </Routes>    
    </>
  );
}

export default App;
