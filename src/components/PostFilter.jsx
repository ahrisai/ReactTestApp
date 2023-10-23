import React from 'react'
import CustomInput from './UI/Input/CustomInput'
import CustomSelect from './UI/Select/CustomSelect'
import { useState } from 'react'
const PostFilter = ({filter, setFilter}) => {
  const [options] = useState([
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ]);
  return (
    <>
      <hr style={{ margin: "15px 0" }} />

        <CustomInput
        placeholder={"Поиск"}
        value={filter.search}
        onChange={(e) => setFilter({...filter,search:e.target.value})}
      />
      <CustomSelect
        options={options}
        value={filter.sort}
        onChange={(selectedSort)=>setFilter({...filter,sort:selectedSort})}
      />
    </>
  )
}

export default PostFilter