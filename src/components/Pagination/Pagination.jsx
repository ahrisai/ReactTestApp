import React from 'react'

const Pagination = ({pagesArray,setPage,page}) => {

  return (
    <div className="pages">
    {pagesArray.map((p,index)=><span className={page===p?'page active':'page'} key={index} onClick={()=>{setPage(p)}}>{p} </span>)
    }
  </div>
  )
}

export default Pagination