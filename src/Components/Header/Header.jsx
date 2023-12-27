import React from 'react'
import MenuLink from './MenuLink'

function Header() {
  return (
    /*  <h1>User Management System</h1> */
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <MenuLink linkName="Home" url="/" />
              <MenuLink linkName="About" url="/about" />
              <MenuLink linkName="Users" url="/users" />
              <MenuLink linkName="Contact Us" url="/contact" />
            </ul>

          </div>
        </div>
      </header>

    </>
  )
}

export default Header