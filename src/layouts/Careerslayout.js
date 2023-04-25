import React from 'react'
import { Outlet } from 'react-router' 

export default function Careerslayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quos.</p>


        <Outlet />
    </div>
  )
}
