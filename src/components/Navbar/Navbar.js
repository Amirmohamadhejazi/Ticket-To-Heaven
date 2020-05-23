import React from "react";
import {TweenMax } from "gsap/all";
import barimg from "../../images/bar.png";
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
export default class Navbar extends React.Component {


    render() {

        const $el = document.getElementById("scrool_helper");
        const duration = 1;
        if (this.props.Part_num === "01") {
            const from = { y : 0};
            TweenMax.to($el, duration, from);
        }
        else if (this.props.Part_num === "02") {
            const from = { y : 68};
            TweenMax.to($el, duration, from);
        }
        else if (this.props.Part_num === "03") {
            const from = { y : 136};
            TweenMax.to($el, duration, from);
        }
        else if (this.props.Part_num === "04" ) {
            const from = { y : 204};
            TweenMax.to($el, duration, from);
        }
        else if (this.props.Part_num === "05") {
            const from = { y : 272};
            TweenMax.to($el, duration, from);
        };
        return (
            <div>
                {/*Scroll Helper */}
                <div className="scroll-helper">
                    <div className="bar">
                        <span className="active-scroll " id="scrool_helper" ></span>
                        <span className="top">{this.props.Part_num}</span>
                        <span className="bottom"> 05 </span>
                    </div>
                </div>
                {/*Scroll Helper */}

                {/*Navbar*/}
                <nav className="navbar navbar-expand-md navbar-dark custom-bg-light fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src={barimg} width="40" height="40" className="d-inline-block align-top" alt="bar.png"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav custom-navbar">
                            <li className="nav-item nav-tex">
                                <Link activeClass="active" to="page1" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link active-scroll-header cursor-pointer">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" to="page2" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link nav-tex cursor-pointer">INTRODUCTION</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" to="page3" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link nav-tex  cursor-pointer">HEROS</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" to="page4" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link nav-tex cursor-pointer">MAPS AND TRAPS</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" to="page5" spy={true} smooth={true} duration={500} containerId="containerElement" className="nav-link nav-tex cursor-pointer">JOIN US!</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*Navbar */}
            </div>
        )
    }
}