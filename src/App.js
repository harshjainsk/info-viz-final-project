import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";


function App() {

 


  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/assignment1" element={<Page1/>} />
        <Route exact path="/assignment2" element={<Page2/>} />
       
       

        </Routes>
      </BrowserRouter></>
    
  );
}

export default App;
