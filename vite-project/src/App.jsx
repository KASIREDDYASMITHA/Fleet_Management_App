import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (

  <BrowserRouter>
   <Routes>
    <Route path="/login"
    element={<h2>Login Page</h2>} />
    <Route path="/admin"
    element={<h2>Admin Page</h2>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
