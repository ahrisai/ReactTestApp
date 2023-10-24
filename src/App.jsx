import React, { useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { authContext } from "./context";
import { useState } from "react";
export default function App() {
const [isAuth, setIsAuth] = useState(false)
const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
  
  if(localStorage.getItem('auth')) setIsAuth(true)
  setIsLoading(false)
}, )

  return (
    <>
    <authContext.Provider value={{isAuth,setIsAuth,isLoading}}>
    <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </authContext.Provider>
    </>
  );
}
