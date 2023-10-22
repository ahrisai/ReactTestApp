import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
            <Link to={'/about'} replace>О сайте</Link>
            <Link to={'/posts'} replace>Посты</Link>
    </div>
  )
}

export default Navbar