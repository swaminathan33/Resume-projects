import React, { useState } from 'react'
import './FilterCard.css'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";

const FilterCard = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='filtercard'>
      <div className="top">
        <div>Filter Jobs</div>
        <button className='name_button'>Clear All</button>
        <button className='icon_button'>❌</button>
      </div>
      <h4>Company Type</h4>
      <ul>
        <li>{toggle ? <IoCheckboxOutline onClick={() => setToggle(!toggle) } /> : <MdOutlineCheckBoxOutlineBlank onClick={() => setToggle(!toggle) } />} Startup</li>
        <li><MdOutlineCheckBoxOutlineBlank /> Foreign MNC</li>
        <li><MdOutlineCheckBoxOutlineBlank /> Indian MNC</li>
        <li><MdOutlineCheckBoxOutlineBlank /> Corporate</li>
        <li><MdOutlineCheckBoxOutlineBlank /> Other</li>
      </ul>
      <h4>Location</h4>
      <ul>
        <li><MdOutlineCheckBoxOutlineBlank /> Delhi</li>
        <li><MdOutlineCheckBoxOutlineBlank /> Bangalore</li>
        <li><MdOutlineCheckBoxOutlineBlank /> Ahmedabad</li>
        <li><MdOutlineCheckBoxOutlineBlank /> Mumbai</li>
        <li><MdOutlineCheckBoxOutlineBlank /> Chennai</li>
      </ul>
    </div>
  )
}

export default FilterCard
