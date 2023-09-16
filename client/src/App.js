import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Community from "./pages/Community";
import Review from "./components/Review";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="w-screen h-screen background flex flex-col"> 
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/community" element={<Community  setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
        <Route path="/community/review" element={<Review  setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } />
        <Route path="/contact" element={<Contact setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/about" element={<About setIsLoggedIn={setIsLoggedIn}/>}></Route>

      </Routes>

    </div>
    )
}

export default App;
