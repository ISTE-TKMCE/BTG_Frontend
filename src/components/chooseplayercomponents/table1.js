import React, { Component } from "react";
import { render } from "react-dom";
export default class Table1 extends Component {
    render() {
        
        return(
            <div className="table1 my-5">
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
                            this.props.data.map((item,index)=>{
                            return (
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.team}</td>
                                <td>{item.credits}</td>
                                <td><button disabled={this.props.credits<item.credits?true:false} onClick={()=>{this.props.selected?this.props.handleRemoveFromSelected(item,index):this.props.handleAddToSelected(item,index)}} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style={{marginLeft:"20%"}}>{this.props.selected?"-":"+"}</button></td>
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