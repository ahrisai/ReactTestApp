import React from 'react'
import classes from './CustomInput.module.css'
const CustomInput = (props) => {
  return (
    <input className={classes.input} type='text' {...props}/>
  )
}

export default CustomInput