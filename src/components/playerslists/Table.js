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
                            <th>Team</th>
                            <th>Points</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                       
                        
                         
                                <tr key="4">
                                <td>{data.p1} hello</td>
                                </tr>
                        
                    
                        </tbody>
                    </table>
                    </div>
            </div>
        )     
        
    }
}