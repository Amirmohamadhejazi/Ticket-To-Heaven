import React from "react";
import img_input from "../../images/input.png";
import img_backsingup from "../../images/path323.png";
import img_yes from "../../images/yes.png";
import img_social from "../../images/social.png";
import img_kickstarter from "../../images/group2.png";
import img_endbg from "./../../images/page5.png" ;
import img_c1_2 from "../../images/c1a.png";
import img_charplace2 from "../../images/charplace-active.png";
import img_c2_1 from "../../images/c2.png";
import img_charplace1 from "../../images/charplace.png";
import img_c3_1 from "../../images/c3.png";
import img_c4_1 from "../../images/c4.png";
export default class Part5 extends React.Component {
    sing_up() {
        console.log("clicked")
    }
    render() {
        return (
            <div>
                <section className="container-fluid" id="page5">
                    <div className="row">
                        <div className="col-md-12 p-0 text-img">
                            <div className="text-parent">
                                <h3>Ticket To Heaven</h3>
                                <p className="p2">Jump into the battlefield, support youtteammates, kill your opponnets
                                    <br/>
                                    and Heaven will be your nex stop.
                                </p>
                                <p className="p2">
                                    What are you waiting for, become a backer and you can get to play with exclusive
                                    <br/>
                                    content before anyone else.
                                </p>
                                <div className="col-sm-8 col-md-5">
                                    <div className="name-input">
                                        <img src={img_input} className="input-pic" alt=""/>
                                        <input type="text" id="name-input" placeholder="enter your Name..."/>
                                    </div>

                                    <div className="mail-input">
                                        <img src={img_input} className="input-pic" alt=""/>

                                        <input type="text" id="mail-input" placeholder="enter your mail..."/>
                                    </div>
                                    <div className="col-md-8 col-sm-8 yes-btn" onClick={this.sing_up}>
                                        <img src={img_backsingup} className="path" alt="path323.png"/>
                                        <img src={img_yes} className="yes" alt="yes.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="social">
                                <a href="#" className="t"> </a>
                                <a href="#" className="l"> </a>
                                <a href="#" className="y"> </a>
                                <a href="#" className="i"> </a>
                                <img src={img_social} className="w-100" alt="social.png"/>
                                <img src={img_kickstarter} className="social-group2" alt="group2.png"/>
                            </div>
                            <img src={img_endbg} className="w-100" alt="page5.png"/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}