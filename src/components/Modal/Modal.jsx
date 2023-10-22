import React, { useState } from 'react'
import CustomButton from '../UI/Button/CustomButton'
import classes from './Modal.module.css'
const Modal = ({children}) => {
  const [visible, setVisible] = useState(false)
    const rootClasses=[classes.Modal]
    if(visible){
        rootClasses.push(classes.active)
    }
  return (
    <>
      <CustomButton onClick={()=>setVisible(true)}>Создать пост</CustomButton>
    <div className={rootClasses.join(' ')} onClick={()=>{setVisible(false)}}>
        <div className={classes.ModalContent} onClick={(e)=>{e.stopPropagation()}}>
            {children}
        </div>
    </div>
    </>
  )
}

export default Modal