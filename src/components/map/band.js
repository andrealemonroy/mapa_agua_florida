import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Band() {
  axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
  const instance = axios.create({
    baseURL: "https://api.aguaflorida.pe/api",
    headers: { "Content-Type": "application/json" },
  });

  // const { id } = useParams();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const test = useQuery();
  const it = test.get("id");

  const [bandInfo, setBandInfo] = useState({});

  useEffect(() => {
    //   fetch(`https://api.twitter.com/user/${id}`)
    //     .then(setUser)
    if (it) {
      instance.get(`/bands/${it}`).then(({ data }) => {
        setBandInfo(data.data);
        console.log(data.data);
      });
    }
  }, []);

  return (
    <div>
     {bandInfo !== {} ?
        <>
         <p>Banda: {bandInfo.bandsName}</p>
         <p>{bandInfo._id}</p> 
        </>

     
      
      : 
      <p></p>} 
    </div>
  );
}

export default Band;
