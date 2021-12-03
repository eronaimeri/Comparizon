import React, { Component } from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, NavLink, NavMenu, Button } from './NavbarElements'
import logo from '../../images/images/logo.png'
import tick from '../../images/icons/tick.svg'
import comparewith from '../../images/icons/comparewith.svg'
import speedtest from '../../images/icons/speed.svg'
import Modal from '../Modal/Modal'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" id="logo" />
                </NavLink>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <NavMenu className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/Plans">MOBILE PLANS</NavLink></li>
                    <li><NavLink to="/Blogs">BLOG</NavLink></li>
                    <li><NavLink to="/Contact">CONTACT</NavLink></li>
                    <li><NavLink to="/About">ABOUT</NavLink></li>
                </NavMenu>

                <div className="compare">
                    <div className="inline-flex">
                        <img src={tick} alt="top comparison" />

                        <div>
                            <p className="bold">Top comparison</p>

                            <p>Independent & Free</p>
                        </div>
                    </div>

                    <Modal show={this.state.show} handleClose={this.hideModal}></Modal>

                    <div className="inline-flex">
                        <img src={comparewith} alt="compare with" />

                        <div>
                            <Button onClick={this.showModal}>
                                <NavLink to="/">
                                    <p className="bold float-left">Compare with</p>

                                    <p>Your current plan</p>
                                </NavLink>
                            </Button>
                        </div>
                    </div>

                    <div className="inline-flex">
                        <img src={speedtest} alt="speed test" />

                        <div>
                            <a href="https://www.speedtest.net/" target="_blank">
                                <p className="bold">Speed test</p>

                                <p>Check now</p>
                            </a>
                        </div>
                    </div>
                </div>
            </Nav>
        )
    }
}

export default Navbar