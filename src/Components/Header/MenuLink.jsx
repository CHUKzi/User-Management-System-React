import React from 'react'

function MenuLink(props) {
  return (
    
    <li><a href={props.url} className="nav-link px-2 text-white">{props.linkName}</a></li>

  )
}

export default MenuLink