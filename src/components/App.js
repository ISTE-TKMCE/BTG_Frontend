import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./homepage";
import Instructions from "./instructions"
import About from "./about"
import Leaderboard from "./leaderboard"
import Login from "./login"
import Register from "./register"
import Chooseplayer from "./playerchoose"
import Stats from "./stats"
import { BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
export default class App extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return(
        <BrowserRouter>
           
            <Switch>
                <Route exact path="/" ><h1>{this.props.name} first React APP</h1></Route>
                <Route path="/homepage" component={Homepage} />
                <Route path="/instructions" component={Instructions} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/about" component={About} />
                <Route path="/chooseplayers" component={Chooseplayer} />
                <Route path="/stats" component={Stats} />
            </Switch>
        </BrowserRouter>
        );
    }
}

