import React, { Component } from "react";

import Table from "./playerslists/Table";
import Navbar from "./common/navbar";
import {BASE_URL} from '../constants/urls';
import colorNames from "daisyui/src/colors/colorNames";

const getToken = () => {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
};





export default class MyTeam extends Component {
  color = "#4608F6";
  constructor(props) {
    super(props);
    this.state = {
      selectedData: [
        {
          name: "Player1",
          team: "CSK",
          score: 108.5,
        },
        {
          name: "Player2",
          team: "RCB",
          score: 8.0,
        },
        {
          name: "Player3",
          team: "CSK",
          score: 9.5,
        },
      ],
    };
  }

  componentDidMount() {
    
    fetch(BASE_URL+'/users/myteam',
    { 
      method:"GET",
      headers:{
        "Authorization": `token ${getToken()}`
      }
    })
    .then((response) => {
      console.log(response)
      if(response.status === 308) {
        window.location="/select-team"};
      response.json()
    })
    .then(team => {
      console.log("<<<<<<<<<<<<<<<<<<<<<<<<" + team);

      this.setState({
        selectedData: team,
      });

    })
    .catch(e=>{
        console.log(e);
    })
}




  render() {
    return (
      <div
        className=" bg-gradient1 bg-cover"
        style={{
          height: "100vh",
          background:
            "linear-gradient(to right, #330708, #330708, #0E070E, #070E20, #050813)",
        }}
      >
        <div className="z-40 w-full">
          <Navbar />
        </div>

        <Table credits={this.state.credits} data={this.state.selectedData} />
      </div>
    );
  }
}
