import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
 return(
<>
<NavBar/>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/home" element={<HomePage/>} />
</Routes>
<Footer/>

</>
 );
}
export default App;
