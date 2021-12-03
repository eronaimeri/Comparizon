import React, { Component } from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/images/logo.png'
import facebook from '../../images/icons/facebook.svg'
import instagram from '../../images/icons/instagram.svg'
import twitter from '../../images/icons/twitter.svg'

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className="row">
                <div className="col-md-4 col-lg-4 col-xl-4">
                    <a href="/">
                        <img src={logo} alt="logo" id="logo" />
                    </a>
                </div>

                <div className="col-md-4 col-lg-4 col-xl-4">
                    <ul className="icons-list">
                        <li><a href="/"><img src={facebook} alt="facebook icon" className="icons" /></a></li>
                        <li><a href="/"><img src={instagram} alt="instagram icon" className="icons" /></a></li>
                        <li><a href="/"><img src={twitter} alt="twitter icon" className="icons" /></a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-lg-4 col-xl-4 pr-0">
                    <ul className="footer-list">
                        <li><a href="/Disclaimer">Disclaimer</a></li>
                        <li><a href="/Terms">Terms</a></li>
                        <li><a href="/Privacy">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
