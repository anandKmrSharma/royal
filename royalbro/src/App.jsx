import logo from './logo.svg';
import './App.css';
import { Data } from './Components/Data';
import {Footer} from "./Components/Footer";
import {Home} from "./Components/Home"

import {Routes, Route} from 'react-router-dom';
import { Products } from './Components/Product';

function App() {
  return (
    <>
    <Routes>
      <Route path={"/home"} element={<Home/>} />
      <Route path={"/home"} element={<Products/>} />

    </Routes>
    <Data/>
    {/* <Footer/> */}

</> 
   
  )
}

export default App;
