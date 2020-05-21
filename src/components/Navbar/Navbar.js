import React from "react";
import {TweenMax } from "gsap/all";
import jump from 'jump.js'

import barimg from "../../images/bar.png";


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
                                <a data-easing="linear" className="nav-link   active-scroll-header "  href="#page1">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a data-easing="linear" className="nav-link nav-tex "  href="#page2">INTRODUCTION</a>
                            </li>
                            <li className="nav-item">
                                <a data-easing="linear" className="nav-link nav-tex  "  href="#page3">HEROS</a>
                            </li>
                            <li className="nav-item">
                                <a data-easing="linear" className="nav-link nav-tex "  href="#page4">MAPS AND TRAPS</a>
                            </li>
                            <li className="nav-item">
                                <a data-easing="linear" className="nav-link nav-tex " href="#page5">JOIN US!</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*Navbar */}
            </div>
        )
    }
}