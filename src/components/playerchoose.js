import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./common/navbar";
import kohliImage from '../assets/images/kohli_rcb.png'
import DhoniImage from '../assets/images/jadeja_csk.png'
import ImageBlock from "./common/imageblock"
import Table1 from "./chooseplayercomponents/table1"
export default class Playerchoose extends Component {
    color="#4608F6"
    constructor(props) {
        super(props)
        this.state = {
            teamData: [
              {
                
                name: "Player1",
                team: "CSK",
                credits: "8.5"
              },
              {
                name: "Player2",
                team: "RCB",
                credits: "8.0"
              },
              {
                name: "Player3",
                team: "CSK",
                credits: "9.5"
              }
            ],
            selectedData: [
              {
                
                name: "Player1",
                team: "CSK",
                credits: "8.5"
              },
            ],
          };
    }

    handleincrement= (player,index)=>{
        this.setState(prev=>({
        ...prev.teamData.splice(index,1),
        selectedData:[...prev.selectedData,player]
        }))
    }

    handledecrement= (player,index)=>{
        this.setState(prev=>({
            teamData:[...prev.teamData,player],
            ...prev.selectedData.splice(index,1),
            }))
    }

    render() {
        return (
            <div className="p-2 bg-gradient1 bg-cover" style={{background: "linear-gradient(to right, #330708, #330708, #0E070E, #070E20, #050813)"}}>
                
                
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url={kohliImage} bordercolor={"#D3961F"} teamname={"CSK"}/></div>
                <div className="flex items-center justify-center font-bold">VS</div>
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url={DhoniImage} bordercolor={"#E2170A"} teamname={"RCB"}/></div>
                <div className=" flex items-center justify-center  mt-10 mb-10">
                <span className="badge" style={{background:'linear-gradient(to right, #FB1935, #3404F8)'}}>First choose Captain and Vice-Captain</span>
                </div>
                <Table1 handleincrement={this.handleincrement} data={this.state.teamData}/>
                <Table1 handledecrement={this.handledecrement} selected data={this.state.selectedData}/>
            </div>
        
        )
    }
}