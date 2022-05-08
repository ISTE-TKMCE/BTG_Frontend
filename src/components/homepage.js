import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./common/navbar"
export default class Homepage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="body"><Navbar></Navbar>
        <h1>Hey this is the Home page</h1></div>
        )
    }
}