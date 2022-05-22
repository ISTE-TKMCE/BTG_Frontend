import React, { Component } from "react";
import { render } from "react-dom";
export default class Table1 extends Component {
    render() {
        
        return(
            <div className="table1 my-5">
                <div class="overflow-x-auto">
                    <table className="table-normal">
                       
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
                                <td><button disabled={this.props.credits<item.credits?true:false} onClick={()=>{this.props.selected?this.props.handleRemoveFromSelected(item,index):this.props.handleAddToSelected(item,index)}} className={this.props.color} style={{marginLeft:"20 %"}}>{this.props.selected?"-":"+"}</button></td>
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