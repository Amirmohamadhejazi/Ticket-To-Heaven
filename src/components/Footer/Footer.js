import React from "react";

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
                                    <a data-easing="linear" className="nav-link" href="#page1">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a data-easing="linear" className="nav-link"  href="#page2">INTRODUCTION</a>
                                </li>
                                <li className="nav-item">
                                    <a data-easing="linear" className="nav-link"  href="#page3">CHOOSE YOUR HEROS</a>
                                </li>
                                <li className="nav-item">
                                    <a data-easing="linear" className="nav-link"   href="#page4">MAPS AND TRAPS</a>
                                </li>
                                <li className="nav-item">
                                    <a data-easing="linear" className="nav-link"  href="#page5">CONTACT US</a>
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