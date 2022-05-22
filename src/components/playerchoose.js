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
            yes:['btn-active','','',''],
            yess:['btn-active','','',''],
            active:'WKtable',
            sactive:'WKstable',
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
            WK: [
              {
                
                name: "Dhoni",
                team: "CSK",
                credits: 98.5
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
            BatsMan:[
              {
                
                name: "Kohli",
                team: "Rcb",
                credits: 8.5
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
            Bowlers:[
              {
                
                name: "Bravo",
                team: "CSK",
                credits: 8.5
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
            AllRounders:[
              {
                
                name: "Jadeja",
                team: "CSK",
                credits: 8.5
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
            selectedWKData:[],
            selectedBatData:[],
            selectedBowData:[],
            selectedARData:[],
          };
    }
    handleWKTable=()=>{
      this.setState({
        active:'WKtable',
        yes:['btn-active','','','']
      })
    }
    handleWKsTable=()=>{
      this.setState({
        sactive:'WKstable',
        yess:['btn-active','','','']
      })
    }
   
    
    handleBatsmanTable=()=>{
      this.setState({
        active:'Batsmantable',
        yes:['','btn-active','','']
      })
    }
    handleBatmansTable=()=>{
      this.setState({
        sactive:'Batsmanstable',
        yess:['','btn-active','','']
      })
    }
    handleBowlerTable=()=>{
      this.setState({
        active:'Bowlertable',
        yes:['','','btn-active','']
      })
    }
    handleBowlersTable=()=>{
      this.setState({
        sactive:'Bowlerstable',
        yess:['','','btn-active','']
      })
    }
    handleAllRounderTable=()=>{
      this.setState({
        active:'AllRoundertable',
        yes:['','','','btn-active']
      })
    }
    handleAllRoundersTable=()=>{
      this.setState({
        sactive:'ARstable',
        yess:['','','','btn-active']
      })
    }
    handleAddWKToSelected= (player,index)=>{
        this.setState(prev=>({
        selectedCredits:prev.selectedCredits+player.credits,
        credits:prev.credits-player.credits,
        ...prev.WK.splice(index,1),
        selectedData:[...prev.selectedData,player],
        selectedWKData:[...prev.selectedWKData,player],
        }))
    }
    
    handleRemoveWKFromSelected= (player,index)=>{
        this.setState(prev=>({
            selectedCredits:prev.selectedCredits-player.credits,
            credits:prev.credits+player.credits,
            WK:[...prev.WK,player],
            ...prev.selectedData.splice(index,1),
            ...prev.selectedWKData.splice(index,1),
            }))
    }
    handleAddBatToSelected= (player,index)=>{
      this.setState(prev=>({
      selectedCredits:prev.selectedCredits+player.credits,
      credits:prev.credits-player.credits,
      ...prev.BatsMan.splice(index,1),
      selectedData:[...prev.selectedData,player],
      selectedBatData:[...prev.selectedBatData,player]
      }))
  }
  
  handleRemoveBatFromSelected= (player,index)=>{
    this.setState(prev=>({
        selectedCredits:prev.selectedCredits-player.credits,
        credits:prev.credits+player.credits,
        BatsMan:[...prev.BatsMan,player],
        ...prev.selectedData.splice(index,1),
        ...prev.selectedBatData.splice(index,1)
        }))
    }
    handleAddBowToSelected= (player,index)=>{
      this.setState(prev=>({
      selectedCredits:prev.selectedCredits+player.credits,
      credits:prev.credits-player.credits,
      ...prev.Bowlers.splice(index,1),
      selectedData:[...prev.selectedData,player],
      selectedBowData:[...prev.selectedBowData,player]
      }))
  }
  handleRemoveBowFromSelected= (player,index)=>{
    this.setState(prev=>({
        selectedCredits:prev.selectedCredits-player.credits,
        credits:prev.credits+player.credits,
        Bowlers:[...prev.Bowlers,player],
        ...prev.selectedData.splice(index,1),
        ...prev.selectedBowData.splice(index,1)
        }))
    }
    handleAddARToSelected= (player,index)=>{
      this.setState(prev=>({
      selectedCredits:prev.selectedCredits+player.credits,
      credits:prev.credits-player.credits,
      ...prev.AllRounders.splice(index,1),
      selectedData:[...prev.selectedData,player],
      selectedARData:[...prev.selectedARData,player]
      }))
  }
  handleRemoveARFromSelected= (player,index)=>{
    this.setState(prev=>({
        selectedCredits:prev.selectedCredits-player.credits,
        credits:prev.credits+player.credits,
        AllRounders:[...prev.AllRounders,player],
        ...prev.selectedData.splice(index,1),
        ...prev.selectedARData.splice(index,1)
        }))
    }
    showSelected=()=>{
      console.log(this.state.selectedARData)
    }
    render() {
        return (
         

            
            <div className=" bg-gradient1 bg-cover" style={{height:"100%",width:'100vw', background: "linear-gradient(to right, #330708, #330708, #0E070E, #070E20, #050813)"}}>
            <div className="z-40 w-full">
                
                <Navbar />
            </div>
                
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url={DhoniImage} bordercolor={"#D3961F"} teamname={"CSK"}/></div>
                <div className="flex items-center justify-center font-bold">VS</div>
                <div className="imagespart flex items-center justify-center" style={{margin:'10px'}}><ImageBlock url={kohliImage} bordercolor={"#E2170A"} teamname={"RCB"}/></div>
                <div className=" flex items-center justify-center  mt-10 mb-10 mx-3">
                <span className="badge p-2 text-center" style={{background:'linear-gradient(to right, #FB1935, #3404F8)', height:'100%'}}>First two players you choose will be your Captain and Vice-Captain</span>
                </div>
                <p className="ml-2 my-3 text-white">Remaining credits: {this.state.credits}</p>
                <p className="ml-2 my-3 text-white">Selected credits: {this.state.selectedCredits}</p>
                <div className="flex justify-center">
                  <div  style={{borderRight:'solid 1px'}}>
                  <button type="button" className={"btn btn-ghost"+ this.state.yes[0]} onClick={this.handleWKTable}>WK</button>
                  </div>
                  <div  style={{borderRight:'solid 1px'}}>
                  <button type="button" className={"btn btn-ghost"+ this.state.yes[1]} onClick={this.handleBatsmanTable}>BAT</button>
                  </div>
                  <div  style={{borderRight:'solid 1px'}}>
                  <button type="button" className={"btn btn-ghost"+ this.state.yes[2]} onClick={this.handleBowlerTable} >BOW</button>
                  </div>
                  <div >
                  <button type="button" className={"btn btn-ghost"+ this.state.yes[3]} onClick={this.handleAllRounderTable}>AR</button>
                  </div>
                </div>
                <div className="flex justify-center" >
                {
                this.state.active=== "WKtable" && <Table1 credits={this.state.credits} handleAddToSelected={this.handleAddWKToSelected}  data={this.state.WK} color="btn btn-accent"/>
                }
                {
                this.state.active=== "Batsmantable" && <Table1 credits={this.state.credits} handleAddToSelected={this.handleAddBatToSelected}  data={this.state.BatsMan} color="btn btn-accent"/>
                }
                {
                this.state.active=== "Bowlertable" && <Table1 credits={this.state.credits} handleAddToSelected={this.handleAddBowToSelected}  data={this.state.Bowlers} color="btn btn-accent"/>
                }
                {
                this.state.active=== "AllRoundertable" && <Table1 credits={this.state.credits} handleAddToSelected={this.handleAddARToSelected}  data={this.state.AllRounders} color="btn btn-accent"/>
                }
                </div>
                <h2 className="text-white pl-2">Selected Players: </h2>
                {
                  this.state.selectedData.length==1 &&
                  <div>
                  <h4 className="text-white pl-2">Captain: {this.state.selectedData[0].name}</h4>
                  
                  </div>
                }
                {
                  this.state.selectedData.length>1 &&
                  <div>
                  <h4 className="text-white pl-2">Captain: {this.state.selectedData[0].name}</h4>
                  <h4 className="text-white pl-2">Vice-captain: {this.state.selectedData[1].name}</h4>
                  
                  </div>
                }
                <div className="flex justify-center mt-4">
                  <div  style={{borderRight:'solid 1px'}}>
                  <button type="button" className={"btn btn-ghost"+ this.state.yess[0]} onClick={this.handleWKsTable}>WK</button>
                  </div>
                  <div  style={{borderRight:'solid 1px'}}>
                  <button type="button" className={"btn btn-ghost"+ this.state.yess[1]} onClick={this.handleBatmansTable}>BAT</button>
                  </div>
                  <div  style={{borderRight:'solid 1px'}}>
                  <button type="button" className={"btn btn-ghost"+ this.state.yess[2]} onClick={this.handleBowlersTable} >BOW</button>
                  </div>
                  <div >
                  <button type="button" className={"btn btn-ghost"+ this.state.yess[3]} onClick={this.handleAllRoundersTable}>AR</button>
                  </div>
                </div>
                <div className="flex justify-center mt-2" >
                {
                  this.state.sactive=== "WKstable" && <Table1 handleRemoveFromSelected={this.handleRemoveWKFromSelected} selected data={this.state.selectedWKData} color="btn btn-error"/>
                }
                {
                  this.state.sactive=== "Batsmanstable" && <Table1 handleRemoveFromSelected={this.handleRemoveBatFromSelected} selected data={this.state.selectedBatData} color="btn btn-error"/>
                }
                {
                  this.state.sactive=== "Bowlerstable" && <Table1 handleRemoveFromSelected={this.handleRemoveBowFromSelected} selected data={this.state.selectedBowData} color="btn btn-error"/>
                }
                {
                  this.state.sactive=== "ARstable" && <Table1 handleRemoveFromSelected={this.handleRemoveARFromSelected} selected data={this.state.selectedARData} color="btn btn-error"/>
                }
                </div>
                <div className="flex items-center justify-center">
                  <button type="button" className="btn btn-accent" onClick={this.showSelected}>SAVE</button>
                </div>
            </div>
        
        )
    }
}