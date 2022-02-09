import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function MusicianInfo() {
  axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
  const instance = axios.create({
    baseURL: "https://api.aguaflorida.pe/api",
    headers: { "Content-Type": "application/json" },
  });

  // const { id } = useParams();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const test = useQuery();
  const it = test.get("id");
  const [userInfo, setUserInfo] = useState({});
  const [bandInfo, setBandInfo] = useState(null);

  useEffect(() => {
    //   fetch(`https://api.twitter.com/user/${id}`)
    //     .then(setUser)
    if (it) {
      instance.get(`/users/${it}`).then(({ data }) => {
        setUserInfo(data.data);
        console.log(data.data);
      });
    }
  }, []);

  return (
    <div>
     {userInfo !== {} ? 
    <>
      <h2>{userInfo.artisticName}</h2>
      <p>{userInfo._id}</p>
    </>

      :
       <p></p>} 
    </div>
  );
}

export default MusicianInfo;
