import React from "react";
// import { TimelineLite, CSSPlugin } from "gsap/all";
import Navbar from "./components/Navbar/Navbar";
import Part1 from "./components/Part1/Part1";
import Part2 from "./components/Part2/Part2";
import Part3 from "./components/Part3/Part3";
import Part4 from "./components/Part4/Part4";
import Part5 from "./components/Part5/Part5";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
    myRef;

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            scrollTop: 0,
            Part_num: "01"
        }
    }

    onScroll = () => {
        const scrollTop = this.myRef.current.scrollTop;
        this.setState({
            scrollTop: scrollTop,
            // Part_num: this.props.Part_num
        });

        if (scrollTop < 634) {
            this.setState({
                Part_num: "01"
            })

        } else if (scrollTop >= 634 && scrollTop < 1352) {
            this.setState({
                Part_num: "02"
            })

        } else if (scrollTop >= 1352 && scrollTop < 2244) {
            this.setState({
                Part_num: "03"
            })

        } else if (scrollTop >= 2244 && scrollTop < 2951) {
            this.setState({
                Part_num: "04"
            })

        } else if (scrollTop >= 2951) {
            this.setState({
                Part_num: "05"
            })

        } else {
            // console.log({scrollTop}, "Footer")
        }
    };


    render() {
        // Part_num = this.state.Part_num;
        return (

            <div ref={this.myRef} onScroll={this.onScroll}
                 style={{width: '100%', height: '100%', overflow: 'auto'}}  id="containerElement">
                <Navbar Part_num={this.state.Part_num}/>
                <Part1/>
                <Part2/>
                <Part3/>
                <Part4/>
                <Part5/>
                <Footer/>
            </div>


        )
    }
}