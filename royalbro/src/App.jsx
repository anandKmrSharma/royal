import logo from './logo.svg';
import './App.css';
import { Data } from './Components/Data';
import {Footer} from "./Components/Footer";
import {Home} from "./Components/Home"
import {BasicPagination } from "./Components/Pagination";
import {Routes, Route, Link} from 'react-router-dom';
import { Products } from './Components/Product';

function App() {
  return (
    <>
    <Routes>
      <Route path={"/home"} element={<Home/>} />
      <Route path={"/products/:id"} element={<Products/>} />
      <Route path={"/"} element={<Data/>} />


    </Routes>
    <Data/>
    <BasicPagination/>
    
    

</> 
   
  )
}

export default App;
