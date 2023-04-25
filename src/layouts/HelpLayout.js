import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'


export default function HelpLayout() {
  return (
   <div className="help-layout">
    <h2>Website Help</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, distinctio.</p>
<nav>
    <NavLink to="faq">View FAQ</NavLink>
    <NavLink to="contact">Contact</NavLink>
</nav>

    <Outlet />
   </div>
  )
}
