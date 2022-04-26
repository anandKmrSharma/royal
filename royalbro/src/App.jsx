import logo from './logo.svg';
import './App.css';
import { Data } from './Components/Data';
import {Footer} from "./Components/Footer";
import {Home} from "./Components/Home"

import {Routes, Route, Link} from 'react-router-dom';
import { Products } from './Components/Product';

function App() {
  return (
    <>
    <Routes>
      <Route path={"/home"} element={<Home/>} />
      <Route path={"/products/:id"} element={<Products/>} />
      <Route path={"/data"} element={<Data/>} />


    </Routes>
    
    

</> 
   
  )
}

export default App;
