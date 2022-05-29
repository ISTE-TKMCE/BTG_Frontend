import React, { Component, useEffect, useState } from "react";

import Table from "./playerslists/Table";
import Navbar from "./common/navbar";
import { BASE_URL } from "../constants/urls";
import colorNames from "daisyui/src/colors/colorNames";
import useFetchAuth from '../hooks/useFetchAuth';
import { Redirect } from "react-router-dom";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};




export default function MyTeam() {
  const color = "#4608F6";
  
  const { error, isPending, data: list } = useFetchAuth(BASE_URL+'/users/myteam' , getToken());

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


      {/* {isPending ?  "loading" :  ( list.message ? <Redirect to="/select-team" />: <Table  data={list} />)} */}

      {isPending ?  "loading" :  ( !list ? <h4 className=" p-4 p-8"> You dont have a team for this match, see you in the next one.</h4> : <Table  data={list} />)}


    </div>
  );
}
