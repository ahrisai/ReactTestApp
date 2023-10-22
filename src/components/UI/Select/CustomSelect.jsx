import React from 'react'

const CustomSelect = ({options,onChange,...props}) => {
  return (
    
    <select {...props} onChange={(e)=>onChange(e.target.value)}>
        <option disabled >Сортировка по:</option>
        {options.map(option=>
        <option value={option.value} key={option.value}>
            {option.name}
        </option>
        )}
    </select>
    
  )
}

export default CustomSelect