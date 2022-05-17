import React, { Component } from "react";
import kohliImage from '../assets/images/kohli_rcb.png'
import DhoniImage from '../assets/images/jadeja_csk.png'
import ImageBlock from "./common/imageblock"
import Table1 from "./chooseplayercomponents/table1"
import Navbar from "./common/navbar";
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
    showSelected=()=>{
      console.log(this.state.selectedData)
    }
    render() {
        return (
         

            
            <div className=" bg-gradient1 bg-cover" style={{height:"100%", background: "linear-gradient(to right, #330708, #330708, #0E070E, #070E20, #050813)"}}>
            <div className="z-40 w-full">
                
                <Navbar />
            </div>
                
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url={DhoniImage} bordercolor={"#D3961F"} teamname={"CSK"}/></div>
                <div className="flex items-center justify-center font-bold">VS</div>
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url={kohliImage} bordercolor={"#E2170A"} teamname={"RCB"}/></div>
                <div className=" flex items-center justify-center  mt-10 mb-10 mx-3">
                <span className="badge p-2 text-center" style={{background:'linear-gradient(to right, #FB1935, #3404F8)', height:'100%'}}>First two players you choose will be your Captain and Vice-Captain</span>
                </div>
                <p className="p-2 my-3 text-white">Remaining credits: {this.state.credits}</p>
                <p className="p-2 my-3 text-white">Selected credits: {this.state.selectedCredits}</p>
                <Table1 credits={this.state.credits} handleAddToSelected={this.handleAddToSelected}  data={this.state.teamData} color="btn btn-accent"/>
                <h2 className="text-white pl-2">Selected Players</h2>
                <Table1 handleRemoveFromSelected={this.handleRemoveFromSelected} selected data={this.state.selectedData} color="btn btn-error"/>
                <div className="flex items-center justify-center">
                  <button type="button" className="btn btn-accent" onClick={this.showSelected}>SAVE</button>
                </div>
            </div>
        
        )
    }
}