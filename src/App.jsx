import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import SignUp from "./pages/SignUP";
import Header from "./components/Header";
export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/sign-in" element = {<Signin/>}/>
    <Route path="/sign-up" element = {<SignUp/>}/>
    <Route path="/profile" element = {<Profile/>}/>
    
    </Routes>
    </BrowserRouter>
}
