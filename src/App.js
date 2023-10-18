import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./component/Home";
import Menspro from "./component/Menspro";
import Womenpr from "./component/Womenpr";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/menproduct" element={<Menspro/>}/>
          <Route path="/womenproduct" element={<Womenpr/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
