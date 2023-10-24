import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from './UI/Button/CustomButton'
import { authContext } from '../context'

const Navbar = () => {
const {isAuth, setIsAuth}=useContext(authContext)
function logout() {
  setIsAuth(false)
  localStorage.removeItem('auth')
}
  return (
    <div className='navbar'>
      <CustomButton onClick={logout}>Выход</CustomButton>
      <div className="navbar__links">

      <Link to={'/about'} replace>О сайте</Link>
      <Link to={'/posts'} replace>Посты</Link>
      </div>
            
    </div>
  )
}

export default Navbar