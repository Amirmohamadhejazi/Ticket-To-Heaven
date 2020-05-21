import React from "react";
import img_kickstarter from "../../images/group2.png";
import img_page1 from "../../images/page1.png";
export default class Part1 extends React.Component {


    render() {
        return (
            <div>
                <section className="container-fluid part1" id="page1">
                    <div className="row">
                        <div className="col-md-12 p-0" >
                            <a className="join-us-btn"  href="page5"> </a>
                            <img src={img_kickstarter} className="group2" alt="group2.png"/>
                                <img src={img_page1} className="w-100" alt="page1.png"/>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}