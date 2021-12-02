import { React, useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import SingleAd from "../SingleAd";

export default function Ads() {

  const [adList, setAdList] = useState({});

  const loadData = async () => {

    console.log("1");

    let response = {'data':{'token':''}};
    while (response.data.token === '') {
      response = await axios.get("https://tecweb-avaliacao-final-2021-2.herokuapp.com/matheusk/token")
      console.log(response.data);
    }

    let headers = {'headers' : {'Authorization' : `Token ${response.data.token}`}};
    console.log(headers)

    let response1 = {'data':{}};
    while (response1.data.length !== 2) {
      response1 = await axios.get("https://tecweb-avaliacao-final-2021-2.herokuapp.com/matheusk/ads", headers)
    }

    console.log(response1.data)

    return response1.data;
  }
  
  useEffect(async () => {
    setAdList(loadData());
  }, [])


  return (
    <div>
      <p>{adList[0]}</p>
    </div>
  )
}