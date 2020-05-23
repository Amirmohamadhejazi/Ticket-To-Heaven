import React from "react";
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <section className="container-fluid p-0" id="footer">
                    {/*Navbar */}
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbarFooter">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbarFooter">
                            <ul className="navbar-nav custom-navbar">
                                <li className="nav-item">
                                    <Link activeClass="active" to="page1" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link active-scroll-header cursor-pointer">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClass="active" to="page2" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link nav-tex cursor-pointer">INTRODUCTION</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClass="active" to="page3" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link nav-tex  cursor-pointer">CHOOSE YOUR HEROS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClass="active" to="page4" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link nav-tex cursor-pointer">MAPS AND TRAPS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClass="active" to="page5" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link nav-tex cursor-pointer">CONTACT US</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <p className="text-center text-white">
                        @2020 HANDMADE INTERACTIVE LLC. ALL RIGHT RESERVED.
                        <br/>
                        All trademarks referenced herein the properties of their respective
                        <br/>
                        owners.
                        <br/>
                        CA Residents only: Do not sell my personal information.
                    </p>
                    {/*Navbar*/}
                </section>
            </div>
        )
    }
}