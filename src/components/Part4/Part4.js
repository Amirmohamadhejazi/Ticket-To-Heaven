import React from "react";
import img_page4 from "../../images/bg4-2.png";
export default class Part4 extends React.Component {
    render() {
        return (
            <div>
                <section className="container-fluid" id="page4">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="text-page-4">
                                <p className="p1">Fight in the deserts of the New
                                    <br/>
                                    Hope City and Snowy lands of Old
                                    <br/>
                                    Utah... As each map has its own
                                    <br/>
                                    unique challenges
                                </p>
                                <p className="p2">
                                    your enemy is not the only one
                                    <br/>
                                    who can kill you!
                                    <br/>
                                    Watch for the traps, and use them
                                    <br/>
                                    against your opponents.

                                </p>
                            </div>
                            <img src={img_page4} className="w-100" alt="page4.jpg"/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}