import React from "react";
import "./styles/App.css";
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
export default function App() {
return (
  <>
  <BrowserRouter>
  <Navbar/>

 <AppRouter/>
 
  </BrowserRouter>
  </>
)
  
}
