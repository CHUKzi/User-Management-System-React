import React from 'react'
import FooterLink from './FooterLink'

function Footer() {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <FooterLink linkName="Home" url="#home"/>
                <FooterLink linkName="About" url="#about"/>
                <FooterLink linkName="Contact Us" url="#contact"/>
            </ul>
            <p className="text-center text-muted">© 2023 | Alex Lanka | All Right Received</p>
        </footer>
    )
}

export default Footer