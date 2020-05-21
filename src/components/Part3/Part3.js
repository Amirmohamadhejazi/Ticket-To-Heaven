import React from "react";
import img_page3 from "../../images/page3.png";
import img_charplace1 from "../../images/charplace.png";
import img_charplace2 from "../../images/charplace-active.png";
import img_c1_1 from "../../images/c1.png";
import img_c1_2 from "../../images/c1a.png";
import img_c2_1 from "../../images/c2.png";
import img_c2_2 from "../../images/c2a.png";
import img_c3_1 from "../../images/c3.png";
import img_c3_2 from "../../images/c3a.png";
import img_c4_1 from "../../images/c4.png";
import img_c4_2 from "../../images/c4a.png";
import img_heroes from "../../images/heroes_design_super_minimal.png";
import heroes_detail from "../../images/group282.png";
export default class Part3 extends React.Component {

    change_pic1() {
        const img_char1 = document.getElementById('img_ch_1');
        const img_char2 = document.getElementById('img_ch_2');
        const img_char3 = document.getElementById('img_ch_3');
        const img_char4 = document.getElementById('img_ch_4');
        const img_c1 = document.getElementById('img_c_1');
        const img_c2 = document.getElementById('img_c_2');
        const img_c3 = document.getElementById('img_c_3');
        const img_c4 = document.getElementById('img_c_4');

        switch (document.getElementsByName("img_char1")) {
            case document.getElementsByName("img_char1"):
                img_c1.src = img_c1_2;
                img_char1.src = img_charplace2;
                img_c2.src = img_c2_1;
                img_char2.src = img_charplace1;
                img_c3.src = img_c3_1;
                img_char3.src = img_charplace1;
                img_c4.src = img_c4_1;
                img_char4.src = img_charplace1;
                break;
        }
    }
    change_pic2() {
        const img_char1 = document.getElementById('img_ch_1');
        const img_char2 = document.getElementById('img_ch_2');
        const img_char3 = document.getElementById('img_ch_3');
        const img_char4 = document.getElementById('img_ch_4');
        const img_c1 = document.getElementById('img_c_1');
        const img_c2 = document.getElementById('img_c_2');
        const img_c3 = document.getElementById('img_c_3');
        const img_c4 = document.getElementById('img_c_4');

        switch (document.getElementsByName("img_char2")) {
            case document.getElementsByName("img_char2"):
                img_c1.src = img_c1_1;
                img_char1.src = img_charplace1;
                img_c2.src = img_c2_2;
                img_char2.src = img_charplace2;
                img_c3.src = img_c3_1;
                img_char3.src = img_charplace1;
                img_c4.src = img_c4_1;
                img_char4.src = img_charplace1;
                break;
        }
    }
    change_pic3() {
        const img_char1 = document.getElementById('img_ch_1');
        const img_char2 = document.getElementById('img_ch_2');
        const img_char3 = document.getElementById('img_ch_3');
        const img_char4 = document.getElementById('img_ch_4');
        const img_c1 = document.getElementById('img_c_1');
        const img_c2 = document.getElementById('img_c_2');
        const img_c3 = document.getElementById('img_c_3');
        const img_c4 = document.getElementById('img_c_4');

        switch (document.getElementsByName("img_char3")) {
            case document.getElementsByName("img_char3"):
                img_c1.src = img_c1_1;
                img_char1.src = img_charplace1;
                img_c2.src = img_c2_1;
                img_char2.src = img_charplace1;
                img_c3.src = img_c3_2;
                img_char3.src = img_charplace2;
                img_c4.src = img_c4_1;
                img_char4.src = img_charplace1;
                break;
        }
    }
    change_pic4() {
        const img_char1 = document.getElementById('img_ch_1');
        const img_char2 = document.getElementById('img_ch_2');
        const img_char3 = document.getElementById('img_ch_3');
        const img_char4 = document.getElementById('img_ch_4');
        const img_c1 = document.getElementById('img_c_1');
        const img_c2 = document.getElementById('img_c_2');
        const img_c3 = document.getElementById('img_c_3');
        const img_c4 = document.getElementById('img_c_4');

        switch (document.getElementsByName("img_char4")) {
            case document.getElementsByName("img_char4"):
                img_c1.src = img_c1_1;
                img_char1.src = img_charplace1;
                img_c2.src = img_c2_1;
                img_char2.src = img_charplace1;
                img_c3.src = img_c3_1;
                img_char3.src = img_charplace1;
                img_c4.src = img_c4_2;
                img_char4.src = img_charplace2;
                break;
        }
    }
    render() {
        return (
            <div>
                <section className="container-fluid" id="page3">
                    <div className="row">
                        <div className="col-md-12 p-0">

                            <div className="text-container">
                                <h1>CHOOSE YOUR HERO</h1>
                                <p>DIFFERENT HEROS DIFFERENT PLAYING</p>
                                <span>Each hero has different abilities and playing style
                                <br/>
                                Which creates a new experience for you every match
                                </span>
                            </div>


                            <img src={img_page3} className="w-100" alt="page3.png"/>

                            <div className="char-container cursor-pointer" id="img_ch">
                                <img src={img_charplace1} className="charplace  cp1" alt="charplace.png" id="img_ch_1"/>
                                <img src={img_c1_1} className="charplace c1 " onClick={this.change_pic1}
                                     name="img_char1" alt="c1.png" id="img_c_1"/>
                            </div>


                            <div className="char-container cursor-pointer position-relative">
                                <img src={img_charplace1} className="charplace  cp2" alt="charplace.png" id="img_ch_2"/>
                                <img src={img_c2_1} className="charplace c2  cursor-pointer" alt="c2.png" onClick={this.change_pic2} name="img_char2" id="img_c_2"/>
                                <div className="w-100 d-flex justify-content-center">
                                </div>
                            </div>

                            <div className="char-container cursor-pointer">
                                <img src={img_charplace1} className="charplace cp3  " alt="charplace.png" id="img_ch_3"/>
                                <img src={img_c3_1} className="charplace c3  cursor-pointer" alt="c2.png" onClick={this.change_pic3} name="img_char3" id="img_c_3"/>
                            </div>

                            <div className="char-container cursor-pointer">
                                <img src={img_charplace1} className="charplace cp4  " alt="charplace.png" id="img_ch_4"/>
                                <img src={img_c4_1} className="charplace c4  cursor-pointer" alt="c2.png" onClick={this.change_pic4} name="img_char4" id="img_c_4"/>
                            </div>
                            <div className="container-span">
                                <span className="s1">attacker</span>
                                <span className="s2">supporter</span>
                                <span className="s3">defender</span>
                            </div>
                            <img src={img_heroes} className="heros" alt="heroes_design_super_minimal.png"/>
                            <img src={heroes_detail} className="group282" alt="group282.png"/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}