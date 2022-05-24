import React, { Component } from "react";
import { render } from "react-dom";
export default class Table extends Component {
    render() {
        
        return(
            <div className="table1 my-5">
                <div class="overflow-x-auto">
                    <table className="table-compact w-full">
                       
                        <thead>
                        <tr>
                            <th>Player name</th>
                            <th>Team</th>
                            <th>Points</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                       
                        {
                            this.props.data.map((item,index)=>{
                            return (
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.team}</td>
                                <td>{item.score}</td>
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