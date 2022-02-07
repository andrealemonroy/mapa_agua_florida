import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import axios from "axios";
import SINFOTO from "../../assets/SVG/SINFOTO.svg";
const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  height: calc(100vh - 64px);
`;
const ContainerMap = styled.div`
  display: flex;
  width: 800px;
  height: calc(100vh - 64px);
`;
const DotMarker = styled.div`
  width: 25px;
  height: 25px;
  background-color: #ea8644ff;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #64599eff;
  }
`;

const DotMarkerBands = styled.div`
  width: 25px;
  height: 25px;
  background-color: blue;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #64599eff;
  }
`;
const ContainerCard = styled.div`
  width: calc(100vw - 800px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
  overflow: scroll;
`;

export const Map = () => {
  const [usersLocation, setUsersLocation] = useState([]);
  const [bandsLocation, setBandsLocation] = useState([]);
  const [users, setUsers] = useState([]);
  const [bands, setBands] = useState([]);
  axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
  const instance = axios.create({
    baseURL: "https://api.aguaflorida.pe/api",
    headers: { "Content-Type": "application/json" },
  });

  const getMusiciansByLatLng = async (place) => {
    instance.post(`/total/byLocation`, place).then((res) => {
      setUsers(res.data.data[0]);
      setBands(res.data.data[1]);
    });
  };

  useEffect(() => {
    instance.get("/total/location").then(({ data }) => {
      setUsersLocation(data.data[0]);
      setBandsLocation(data.data[1]);
    });
  }, []);

  return (
    <Wrapper>
      <ContainerMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCPzQz0K77TBg7KX8mtBis5Q4sVE3JD2I8" }}
          defaultZoom={5.5}
          defaultCenter={[-10.046374, -77.042793]}
        >
          {usersLocation ? (
            usersLocation.map((place) => {
              return (
                <DotMarker
                  key={place.value}
                  lat={place.coordinates?.lat}
                  lng={place.coordinates?.lng}
                  onClick={() => getMusiciansByLatLng(place)}
                ></DotMarker>
              );
            })
          ) : (
            <div></div>
          )}
          {bandsLocation ? (
            bandsLocation.map((place) => {
              return (
                <DotMarkerBands
                  key={place.value}
                  lat={place.coordinates?.lat}
                  lng={place.coordinates?.lng}
                  onClick={() => getMusiciansByLatLng(place)}
                ></DotMarkerBands>
              );
            })
          ) : (
            <div></div>
          )}
        </GoogleMapReact>
      </ContainerMap>
      <ContainerCard>
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform max-w-xs mx-auto my-2 border-2 w-72">
                <h2 class="font-semibold text-2xl mb-6">{user.fullName}</h2>
                <img
                  class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                  src={user.photo ? user.photo : SINFOTO}
                  alt="User avatar"
                />
                <p class="capitalize text-xl mt-1">{user.genres}</p>
                <span class="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
                  <div class="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
                  Nombre
                </span>
                <button class="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">
                  Redes
                </button>
              </div>
            );
          })
        ) : (
          <span></span>
        )}
        {bands.length > 0 ? (
          bands.map((band) => {
            return (
              <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform  max-w-xs mx-auto my-2 border-2 w-72">
                <h2 class="font-semibold text-2xl mb-6">{band.bandsName}</h2>
                <img
                  class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                  src={band.photo ? band.photo : SINFOTO}
                  alt="User avatar"
                />
                <p class="capitalize text-xl mt-1">{band.genres}</p>
                <span class="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
                  <div class="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
                  Nombre
                </span>
                <button class="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">
                  Redes
                </button>
              </div>
            );
          })
        ) : (
          <span></span>
        )}
      </ContainerCard>
    </Wrapper>
  );
};
