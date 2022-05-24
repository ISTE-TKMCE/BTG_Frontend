import React, { Component } from "react";
import kohliImage from "../assets/images/RajastanRoyals.jpg";
import DhoniImage from "../assets/images/GujaratTitans.jpg";
import ImageBlock from "./common/imageblock";
import Table1 from "./chooseplayercomponents/table1";
import Navbar from "./common/navbar";
import Footer from "./Footer";
import { BASE_URL } from '../constants/urls';
import { Redirect } from "react-router-dom";

const getToken = () => {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
};

const saveTeam = (team) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      "Authorization": `token ${getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(team)
  };
  fetch(BASE_URL + '/users/myteam', requestOptions)
    .then(response => {
      if (response.status === 200) {
        this.setState({
          re:true
        })
      };
      // response.json()
    })
}


export default class Playerchoose extends Component {
  color = "#4608F6";
  constructor(props) {
    super(props);


    this.state = {
      yes: ["btn-active", "", "", ""],
      yess: ["btn-active", "", "", ""],
      active: "WKtable",
      sactive: "WKstable",
      error: "",
      credits: 100,
      selectedCredits: 0,

      WK: [],
      BatsMan: [],
      Bowlers: [],
      AllRounders: [],
      selectedData: [],
      selectedWKData: [],
      selectedBatData: [],
      selectedBowData: [],
      selectedARData: [],
      re:false,
    };
  }

  componentDidMount() {

    fetch(BASE_URL + '/createnewteam/RR/GT',
      {
        method: "GET",
        headers: {
          "Authorization": `token ${getToken()}`
        }
      })
      .then((response) => {
        console.log(">>>>>>>>>>>>>>" , response);
        if (response.status === 308) {
          this.setState({
            re:true
          })


        }else{
          this.setState({
            re:false
          })

        }

        return response.json()
      })
      .then(teamR => {
        console.log(teamR)


        const team = teamR.map(({
          credit: credits,
          ...rest
        }) => ({
          credits,
          ...rest
        }));

        this.setState({
          BatsMan: team.filter((player) => { return player.skill === "Batter" }),
          Bowlers: team.filter((player) => { return player.skill === "Bowler" }),
          AllRounders: team.filter((player) => { return player.skill === "All Rounder" }),
          WK: team.filter((player) => { return player.skill === "WicketKeeper" })



        });
      })
      .catch(e => {
        console.log(e);
      })
  }


  handleWKTable = () => {
    this.setState({
      active: "WKtable",
      yes: ["btn-active", "", "", ""],
    });
  };
  handleWKsTable = () => {
    this.setState({
      sactive: "WKstable",
      yess: ["btn-active", "", "", ""],
    });
  };

  handleBatsmanTable = () => {
    this.setState({
      active: "Batsmantable",
      yes: ["", "btn-active", "", ""],
    });
  };
  handleBatmansTable = () => {
    this.setState({
      sactive: "Batsmanstable",
      yess: ["", "btn-active", "", ""],
    });
  };
  handleBowlerTable = () => {
    this.setState({
      active: "Bowlertable",
      yes: ["", "", "btn-active", ""],
    });
  };
  handleBowlersTable = () => {
    this.setState({
      sactive: "Bowlerstable",
      yess: ["", "", "btn-active", ""],
    });
  };
  handleAllRounderTable = () => {
    this.setState({
      active: "AllRoundertable",
      yes: ["", "", "", "btn-active"],
    });
  };
  handleAllRoundersTable = () => {
    this.setState({
      sactive: "ARstable",
      yess: ["", "", "", "btn-active"],
    });
  };
  handleAddWKToSelected = (player, index) => {
    this.setState((prev) => ({
      // selectedCredits: prev.selectedCredits + player.credits,
      credits: prev.credits - player.credits,
      ...prev.WK.splice(index, 1),
      selectedData: [...prev.selectedData, player],
      selectedWKData: [...prev.selectedWKData, player],
    }));
  };

  handleRemoveWKFromSelected = (player, index) => {
    this.setState((prev) => ({
      // selectedCredits: prev.selectedCredits - player.credits,
      credits: prev.credits + player.credits,
      WK: [...prev.WK, player],
      ...prev.selectedData.splice(index, 1),
      ...prev.selectedWKData.splice(index, 1),
    }));
  };
  handleAddBatToSelected = (player, index) => {
    this.setState((prev) => ({
      // selectedCredits: prev.selectedCredits + player.credits,
      credits: prev.credits - player.credits,
      ...prev.BatsMan.splice(index, 1),
      selectedData: [...prev.selectedData, player],
      selectedBatData: [...prev.selectedBatData, player],
    }));
  };

  handleRemoveBatFromSelected = (player, index) => {
    this.setState((prev) => ({
      // selectedCredits: prev.selectedCredits - player.credits,
      credits: prev.credits + player.credits,
      BatsMan: [...prev.BatsMan, player],
      ...prev.selectedData.splice(index, 1),
      ...prev.selectedBatData.splice(index, 1),
    }));
  };
  handleAddBowToSelected = (player, index) => {
    this.setState((prev) => ({
      // selectedCredits: prev.selectedCredits + player.credits,
      credits: prev.credits - player.credits,
      ...prev.Bowlers.splice(index, 1),
      selectedData: [...prev.selectedData, player],
      selectedBowData: [...prev.selectedBowData, player],
    }));
  };
  handleRemoveBowFromSelected = (player, index) => {
    this.setState((prev) => ({
      // selectedCredits: prev.selectedCredits - player.credits,
      credits: prev.credits + player.credits,
      Bowlers: [...prev.Bowlers, player],
      ...prev.selectedData.splice(index, 1),
      ...prev.selectedBowData.splice(index, 1),
    }));
  };
  handleAddARToSelected = (player, index) => {
    this.setState((prev) => ({
      // selectedCredits: prev.selectedCredits + player.credits,
      credits: prev.credits - player.credits,
      ...prev.AllRounders.splice(index, 1),
      selectedData: [...prev.selectedData, player],
      selectedARData: [...prev.selectedARData, player],
    }));
  };
  handleRemoveARFromSelected = (player, index) => {
    this.setState((prev) => ({
      // selectedCredits: prev.selectedCredits - player.credits,
      credits: prev.credits + player.credits,
      AllRounders: [...prev.AllRounders, player],
      ...prev.selectedData.splice(index, 1),
      ...prev.selectedARData.splice(index, 1),
    }));
  };
  handleError = () => {
    if (
      this.state.selectedWKData.length < 1 ||
      this.state.selectedWKData.length > 4
    ) {
      this.setState({
        error:
          "There should be atleast 1 and maximum of 4 WicketKeepers in your team",
      });
    } else if (
      this.state.selectedBatData.length < 3 ||
      this.state.selectedBatData.length > 6
    ) {
      this.setState({
        error:
          "There should be atleast 3 and maximum of 6 Batsmen in your team",
      });
    } else if (
      this.state.selectedBowData.length < 3 ||
      this.state.selectedBowData.length > 6
    ) {
      this.setState({
        error:
          "There should be atleast 3 and maximum of 6 Bowlers in your team",
      });
    } else if (
      this.state.selectedARData.length < 1 ||
      this.state.selectedARData.length > 4
    ) {
      this.setState({
        error:
          "There should be atleast 1 and maximum of 4 All-Rounders in your team",
      });
    }
    else if (
      this.state.selectedData.length < 11 ||
      this.state.selectedData.length > 11
    ) {
      this.setState({
        error:
          "There should be 11 players in your team",
      });
    }
    else {
      this.setState({
        error: "",
      });
      console.log(this.state.selectedData);

      //send post requests
      // saveTeam()

      const data = {}

      for (let i = 0; i < this.state.selectedData.length; i++) {
        data[`p${i + 1}`] = this.state.selectedData[i].name

      }
      console.log(data)

      saveTeam(data);

    }
  };

  render() {

    

    
    return (

      
      
      <div
        className=" bg-gradient1 bg-cover"
        style={{
          height: "100%",
          width: "100vw",
          background:
            "linear-gradient(to right, #330708, #330708, #0E070E, #070E20, #050813)",
        }}
      >
        {this.state.re && <Redirect to="/myteam" />}
        <div className="z-40 w-full">
          <Navbar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div
            className="imagespart flex items-center justify-center"
            style={{ margin: "10px" }}
          >
            <ImageBlock
              url={DhoniImage}
              bordercolor={"#D3961F"}
              teamname={"GT"}
            />
          </div>
          <div className="mt-10 flex items-center justify-center font-bold md:text-4xl">
            VS
          </div>
          <div
            className="imagespart flex items-center justify-center"
            style={{ margin: "10px" }}
          >
            <ImageBlock
              url={kohliImage}
              bordercolor={"#E2170A"}
              teamname={"RR"}
            />
          </div>
        </div>
        <div className=" flex items-center justify-center  mt-10 mb-10 mx-3">
          <span
            className="badge text-center text-lg md:text-2xl p-4 "
            style={{
              background: "linear-gradient(to right, #FB1935, #3404F8)",
              height: "100%",
            }}
          >
            First two players you choose will be your Captain and Vice-Captain
          </span>
        </div>
        <p className="ml-2 my-3 text-white text-2xl uppercase">
          Remaining credits: {this.state.credits}
        </p>
        <p className="ml-2 my-3 text-white text-2xl uppercase">
          Selected credits: {100 - this.state.credits}
        </p>
        <div className="flex items-center justify-center mb-6">
          <div className="badge  p-6">
            <p className="text-xl p-4">Available Players:</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div style={{ borderRight: "solid 1px" }}>
            <button
              type="button"
              className={"btn btn-ghost" + this.state.yes[0]}
              onClick={this.handleWKTable}
            >
              WK
            </button>
          </div>
          <div style={{ borderRight: "solid 1px" }}>
            <button
              type="button"
              className={"btn btn-ghost" + this.state.yes[1]}
              onClick={this.handleBatsmanTable}
            >
              BAT
            </button>
          </div>
          <div style={{ borderRight: "solid 1px" }}>
            <button
              type="button"
              className={"btn btn-ghost" + this.state.yes[2]}
              onClick={this.handleBowlerTable}
            >
              BOW
            </button>
          </div>
          <div>
            <button
              type="button"
              className={"btn btn-ghost" + this.state.yes[3]}
              onClick={this.handleAllRounderTable}
            >
              AR
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {this.state.active === "WKtable" && (
            <Table1
              credits={this.state.credits}
              handleAddToSelected={this.handleAddWKToSelected}
              data={this.state.WK}
              color="btn btn-accent"
            />
          )}
          {this.state.active === "Batsmantable" && (
            <Table1
              credits={this.state.credits}
              handleAddToSelected={this.handleAddBatToSelected}
              data={this.state.BatsMan}
              color="btn btn-accent"
            />
          )}
          {this.state.active === "Bowlertable" && (
            <Table1
              credits={this.state.credits}
              handleAddToSelected={this.handleAddBowToSelected}
              data={this.state.Bowlers}
              color="btn btn-accent"
            />
          )}
          {this.state.active === "AllRoundertable" && (
            <Table1
              credits={this.state.credits}
              handleAddToSelected={this.handleAddARToSelected}
              data={this.state.AllRounders}
              color="btn btn-accent"
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="badge  p-6">
            <p className="text-xl p-4">Selected Players:</p>
          </div>
          {this.state.selectedData.length == 1 && (
            <div>
              <h4 className="text-white pl-2 mt-3">
                Captain: {this.state.selectedData[0].name}
              </h4>
            </div>
          )}
          {this.state.selectedData.length > 1 && (
            <div>
              <h4 className="text-white pl-2 mt-3">
                Captain: {this.state.selectedData[0].name}
              </h4>
              <h4 className="text-white pl-2 mt-3">
                Vice-captain: {this.state.selectedData[1].name}
              </h4>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <div style={{ borderRight: "solid 1px" }}>
            <button
              type="button"
              className={"btn btn-ghost" + this.state.yess[0]}
              onClick={this.handleWKsTable}
            >
              WK
            </button>
          </div>
          <div style={{ borderRight: "solid 1px" }}>
            <button
              type="button"
              className={"btn btn-ghost" + this.state.yess[1]}
              onClick={this.handleBatmansTable}
            >
              BAT
            </button>
          </div>
          <div style={{ borderRight: "solid 1px" }}>
            <button
              type="button"
              className={"btn btn-ghost" + this.state.yess[2]}
              onClick={this.handleBowlersTable}
            >
              BOW
            </button>
          </div>
          <div>
            <button
              type="button"
              className={"btn btn-ghost" + this.state.yess[3]}
              onClick={this.handleAllRoundersTable}
            >
              AR
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          {this.state.sactive === "WKstable" && (
            <Table1
              handleRemoveFromSelected={this.handleRemoveWKFromSelected}
              selected
              data={this.state.selectedWKData}
              color="btn btn-error"
            />
          )}
          {this.state.sactive === "Batsmanstable" && (
            <Table1
              handleRemoveFromSelected={this.handleRemoveBatFromSelected}
              selected
              data={this.state.selectedBatData}
              color="btn btn-error"
            />
          )}
          {this.state.sactive === "Bowlerstable" && (
            <Table1
              handleRemoveFromSelected={this.handleRemoveBowFromSelected}
              selected
              data={this.state.selectedBowData}
              color="btn btn-error"
            />
          )}
          {this.state.sactive === "ARstable" && (
            <Table1
              handleRemoveFromSelected={this.handleRemoveARFromSelected}
              selected
              data={this.state.selectedARData}
              color="btn btn-error"
            />
          )}
        </div>
        {this.state.error !== "" && (
          <div>
            <div class="alert alert-error shadow-lg my-2 mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{this.state.error}</span>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center pb-4">
          <button
            type="button"
            className="btn btn-warning "
            onClick={this.handleError}
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}
