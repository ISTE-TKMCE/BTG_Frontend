import React, { Component } from "react";
import { render } from "react-dom";
export default class Table1 extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            birth: "",
            data: [
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
            ]
          };
    }
    handleincrement= player=>{
        console.log(player)
        this.setState()
    }
    render() {
        
        return(
            <div className="table1">
                <div class="overflow-x-auto">
                    <table className="table-compact w-full">
                       
                        <thead>
                        <tr>
                            
                            <th>Player</th>
                            <th>Team</th>
                            <th>Credits</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                       
                        {
                            this.state.data.map(item=>{
                            return (
                                <tr>
                                <td>{item.name}</td>
                                <td>{item.team}</td>
                                <td>{item.credits}</td>
                                <td><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style={{marginLeft:"20%"}} onClick={this.handleincrement}>+</button></td>
                                </tr>
                            );
                            })
                        }
                        </tbody>
                    </table>
                    </div>
            </div>
        )     
        
    }
}