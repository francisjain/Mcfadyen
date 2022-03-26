import React from 'react'
import "./Sidebar.css"

function Sidebar({sidebar}) {
  return (
    <div className={sidebar?"sidebar sidebar_open":"sidebar"}>
      <li>Bakery</li>
      <li>Nuts & Seeds</li>
      <li>Vegetables</li>
      <li>Cheeses</li>
      <li>Sea Food</li>
      <li>Dairy</li>
      <li>Meat</li>
      <li>Snacks</li>
    </div>
  )
}

export default Sidebar