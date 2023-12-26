import React from 'react'
import { Link } from "react-router-dom";
function FooterLink(props) {
  return (
    <li><Link to={props.url} className="nav-link px-2 text-muted">{props.linkName}</Link></li>
  )
}

export default FooterLink