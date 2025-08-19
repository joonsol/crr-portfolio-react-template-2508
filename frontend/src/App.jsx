import "./App.scss";

import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import Notfound from "./pages/Notfound";
function App() {

  return (
    <div>
      <Routes>
        <Route path="*" element={<Notfound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
      </Routes>

    </div>
  )
}

export default App
