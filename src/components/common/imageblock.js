import React, { Component } from "react";
import { render } from "react-dom";
export default class ImageBlock extends Component {
    mystyle={
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor:''
    }
    constructor(props) {
        super(props)
    }
    render() {
        
        // if(this.props.teamname==='CSK')
        // {
        //     this.mystyle.borderColor="#D3961F"
        // }
        // if(this.props.teamname==='RCB')
        // {
        //     this.mystyle.borderColor="#E2170A"
        // }
        return (
            <div className="card " style={this.mystyle}>
                
                <figure className="flex items-center justify-center"><img src={this.props.url}></img></figure>
                <div className="card-body flex items-center justify-center">
                    <div className="card-title items-center font-bold">{this.props.teamname}</div>
                </div>
            </div>
        
        )
    }
}