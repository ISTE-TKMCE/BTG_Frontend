import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./common/navbar";
import ImageBlock from "./common/imageblock"
import Table1 from "./chooseplayercomponents/table1"
export default class Playerchoose extends Component {
    color="#4608F6"
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bg-gradient1 bg-cover" style={{height:"100%", background: "linear-gradient(to right, #330708, #330708, #0E070E, #070E20, #050813)"}}>
                <Navbar></Navbar>
                {/* <h1 className="text-white">This is the Choose player page</h1> */}
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url="images/jadeja_csk.png" bordercolor="#D3961F" teamname="CSK"/></div>
                <div className="flex items-center justify-center font-bold">VS</div>
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url="images/kohli_rcb.png" bordercolor="#E2170A" teamname="RCB"/></div>
                <div className=" flex items-center justify-center  mt-10 mb-10">
                <span className="badge" style={{background:'linear-gradient(to right, #FB1935, #3404F8)'}}>First choose Captain and Vice-Captain</span>
                </div>
                <Table1 ></Table1>
            </div>
        
        )
    }
}