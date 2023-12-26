import React from 'react'

function FooterLink(props) {
  return (
    <li><a href={props.url} className="nav-link px-2 text-muted">{props.linkName}</a></li>


  )
}

export default FooterLink