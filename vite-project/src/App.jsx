import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/login"
    element={<div>Login</div>}/>
    <Route path="/admin"
    element={<div>Admin</div>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App
