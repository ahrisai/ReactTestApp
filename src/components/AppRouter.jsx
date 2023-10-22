import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
const AppRouter = () => {
  return (
    
         <Routes>
  <Route path="/posts" element={<Posts />} />
    <Route element={<About/>} path="/About"/>
    <Route
        path="*"
        element={<Navigate to="/posts" replace />}
    />
  </Routes>
    
  )
}

export default AppRouter