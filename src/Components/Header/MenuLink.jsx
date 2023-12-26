import React from 'react'
import { Link } from "react-router-dom";

function MenuLink(props) {
  return (
    
    <li><Link to={props.url} className="nav-link px-2 text-white">{props.linkName}</Link></li>

  )
}

export default MenuLink