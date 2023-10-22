import React, { useState } from 'react'
import classes from './Modal.module.css'
const Modal = ({children, switchVisible}) => {
  const [visible, setVisible] = useState(second)
    const rootClasses=[classes.Modal]
    if(visible){
        rootClasses.push(classes.active)
    }
   
  return (
    <div className={rootClasses.join(' ')} onClick={()=>{switchVisible(visible,setVisible)}}>
        <div className={classes.ModalContent} onClick={(e)=>{e.stopPropagation()}}>
            {children}
        </div>
    </div>
  )
}

export default Modal