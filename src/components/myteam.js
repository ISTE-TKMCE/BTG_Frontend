import React, { Component, useEffect, useState } from "react";

import Table from "./playerslists/Table";
import Navbar from "./common/navbar";
import { BASE_URL } from "../constants/urls";
import colorNames from "daisyui/src/colors/colorNames";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

export default function MyTeam() {
  const color = "#4608F6";
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    fetch(BASE_URL + "/users/myteam", {
      method: "GET",
      headers: {
        Authorization: `token ${getToken()}`,
      },
    })
      .then((response) => {
        if (response.status === 308) {
          window.location = "/select-team";
        }
        return response.json();
      })
      .then((team) => {

        setSelectedData()

        console.log(team);
        console.log(selectedData);


      })
      .catch((e) => {
        console.log(e);
      });
  },[]);

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

      <Table  data={selectedData} />
    </div>
  );
}
