import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./common/navbar";
import ImageBlock from "./common/imageblock"
import Table1 from "./chooseplayercomponents/table1"
export default class Playerchoose extends Component {
    color="#4608F6"
    constructor(props) {
        super(props)
        this.state = {
            credits:100,
            selectedCredits:0,
            teamData: [
              {
                
                name: "Player1",
                team: "CSK",
                credits: 108.5
              },
              {
                name: "Player2",
                team: "RCB",
                credits: 8.0
              },
              {
                name: "Player3",
                team: "CSK",
                credits: 9.5
              }
            ],
            selectedData: [
            ],
          };
    }

    handleAddToSelected= (player,index)=>{
        this.setState(prev=>({
        selectedCredits:prev.selectedCredits+player.credits,
        credits:prev.credits-player.credits,
        ...prev.teamData.splice(index,1),
        selectedData:[...prev.selectedData,player]
        }))
    }

    handleRemoveFromSelected= (player,index)=>{
        this.setState(prev=>({
            selectedCredits:prev.selectedCredits-player.credits,
            credits:prev.credits+player.credits,
            teamData:[...prev.teamData,player],
            ...prev.selectedData.splice(index,1),
            }))
    }

    render() {
        return (
            <div className="bg-gradient1 bg-cover" style={{height:"100%", background: "linear-gradient(to right, #330708, #330708, #0E070E, #070E20, #050813)"}}>
                <Navbar></Navbar>
                {/* <h1 className="text-white">This is the Choose player page</h1> */}
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url="images/jadeja_csk.png" bordercolor={"#D3961F"} teamname={"CSK"}/></div>
                <div className="flex items-center justify-center font-bold">VS</div>
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url="images/kohli_rcb.png" bordercolor={"#E2170A"} teamname={"RCB"}/></div>
                <div className=" flex items-center justify-center  mt-10 mb-10">
                <span className="badge" style={{background:'linear-gradient(to right, #FB1935, #3404F8)'}}>First choose Captain and Vice-Captain</span>
                </div>
                <p className="p-2 my-3">Remaining credits: {this.state.credits}</p>
                <p className="p-2 my-3">selected credits: {this.state.selectedCredits}</p>
                <Table1 credits={this.state.credits} handleAddToSelected={this.handleAddToSelected}  data={this.state.teamData}/>
                <Table1 handleRemoveFromSelected={this.handleRemoveFromSelected} selected data={this.state.selectedData}/>
            </div>
        
        )
    }
}