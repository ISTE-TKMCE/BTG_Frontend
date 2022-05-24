import { data } from "autoprefixer";
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
                            
                        </tr>
                        </thead>
                        <tbody>
                       
                        
                        
                         
                                <tr ><td>{ this.props.data.p1 }</td></tr>
                                <tr ><td>{ this.props.data.p2 }</td></tr>
                                <tr ><td>{ this.props.data.p3 }</td></tr>
                                <tr ><td>{ this.props.data.p4 }</td></tr>
                                <tr><td>{ this.props.data.p5 }</td></tr>
                                <tr ><td>{ this.props.data.p6 }</td></tr>
                                <tr ><td>{ this.props.data.p7 }</td></tr>
                                <tr ><td>{ this.props.data.p8 }</td></tr>
                                <tr ><td>{ this.props.data.p9 }</td></tr>
                                <tr ><td>{ this.props.data.p10 }</td></tr>
                                <tr ><td>{ this.props.data.p11 }</td></tr>
                        
                    
                        </tbody>
                    </table>
                    </div>
            </div>
        )     
        
    }
}