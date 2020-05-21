import React from "react";
import img_page2 from "../../images/page2.png";
import img_page2_1 from "../../images/page2-1.png";
import img_page2_2 from "../../images/page2-2.png";
export default class Part2 extends React.Component {

    render() {
        return (
            <div>
                <section className="container-fluid bg-2" id="page2">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="right-pic">
                                <img src={img_page2_1} className="page2-1" alt="2-1.png"/>
                                <img src={img_page2_2} className="page2-2" alt="2-2.png"/>
                            </div>
                            <div className="left-text">
                                <h1 className="left-text">Introduction</h1>
                                <p>You'll find yourself In New Hope City, led by The
                                    <br/>
                                    Leader.He brought territories together, made
                                    <br/>
                                    peace and started rebuilding.
                                    <br/>
                                    He sounds like a saint,don't get too attached as
                                    <br/>
                                    he backstabbed everyone soon after.
                                    <br/>
                                    Now all territories are under his ruthless
                                    <br/>
                                    command.
                                    <br/>
                                    New Hope City is the wealthiest city in the world
                                    <br/>
                                    with its superior technology.
                                    <br/>
                                    Poor territories can compete in the annual
                                    <br/>
                                    tournament run by The Leader.
                                    <br/>
                                    And win the life changing prize of a
                                    Ticket To
                                    <br/>
                                    Heaven.
                                    <br/>
                                    This Tournament is a path to a
                                    better life, and
                                    <br/>
                                    you're going to be one of
                                    the competitors to win
                                    <br/>
                                    it.
                                </p>
                            </div>
                            <img src={img_page2} className="w-100" alt="page2.png"/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}