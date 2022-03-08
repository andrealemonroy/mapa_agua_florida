import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import axios from "axios";
import LogoMapa from "../../assets/SVG/logoMapa.svg";
import MapPresentation from "../MapPresentation";


const ContainerMap = styled.div`
  display: flex;
  width: 50%;
  height: calc(100vh - 64px);
  @media (max-width: 700px) {
    width: 100vw;
    height: 100vh;
  }
`;
const DotMarker = styled.div`
  width: 25px;
  height: 25px;
  background-color: #c1badc;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #c1badc;
  }
`;

const DotMarkerBands = styled.div`
  width: 25px;
  height: 25px;
  background-color: #64599eff;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #64599eff;
  }
`;
const ContainerCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
  overflow: scroll;
  @media (max-width: 600px) {
    width: 100%;
    height: 70vh;
  }
`;

const BtnCard = styled.div`
  height: 45px;
  margin: 10px;
  background: rgb(100, 89, 158);
  background: linear-gradient(
    90deg,
    rgba(100, 89, 158, 1) 30%,
    rgba(234, 134, 68, 1) 100%
  );
  color: white;
  transition: background 3s linear;

  &:hover {
    cursor: pointer;
    background: rgb(234, 134, 68);
    background: linear-gradient(
      90deg,
      rgba(234, 134, 68, 1) 30%,
      rgba(100, 89, 158, 1) 100%
    );
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Map = () => {
  const [column, setColumn] = useState(true);
const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  height: calc(100vh - 64px);
  @media (max-width: 600px) {
    flex-direction: ${column ? "column-reverse" : "column"};
    height: auto;
  }
`;

  const [usersLocation, setUsersLocation] = useState([]);
  const [bandsLocation, setBandsLocation] = useState([]);
  const [users, setUsers] = useState([]);
  const [bands, setBands] = useState([]);
  const [selected, setSelected] = useState(false);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [place, setPlace] = useState(null);
  axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
  const instance = axios.create({
    baseURL: "https://api.aguaflorida.pe/api",
    headers: { "Content-Type": "application/json" },
  });

  const getMusiciansByLatLng = async (place) => {
    instance.post(`/total/byLocation`, place).then((res) => {
      setColumn(false);
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

  const handleMouseOver = (place) => {
    console.log("e");
    // setPlace(place);
    // setShowInfoWindow(true);
  };

  const handleMouseExit = (place) => {
    console.log("i");
    // setTimeout(() => {
      // setShowInfoWindow(false);
    //   setPlace(null);
    // }, 200);
  };

  return (
    <Wrapper>
      <ContainerMap>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "AIzaSyCPzQz0K77TBg7KX8mtBis5Q4sVE3JD2I8" }}
          defaultZoom={5.2}
          defaultCenter={[-10.046374, -77.042793]}
        >
          {showInfoWindow ? (
            <div
              key={place.value}
              lat={place.coordinates?.lat}
              lng={place.coordinates?.lng}
              className="mb-10 w-24 bg-white popup"
              onClick={() => getMusiciansByLatLng(place)}
            >
              <p className="text-md z-10">
                Ver las solistas o bandas en este lugar
              </p>
            </div>
          ) : (
            <span></span>
          )}
          {usersLocation ? (
            usersLocation.map((place) => {
              return (
                <DotMarker
                  key={place.value}
                  lat={place.coordinates?.lat}
                  lng={place.coordinates?.lng}
                  onClick={() => getMusiciansByLatLng(place)}
                  onMouseOver={() => handleMouseOver(place)}
                  onMouseOut={() => handleMouseExit(place)}
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

      {bands.length === 0 && users.length === 0 ? (
        <MapPresentation />
      ) : (
        <ContainerCard>
          {users.length > 0 ? (
            users.map((user) => {
              return (
                <div
                  key={user._id}
                  className="bg-white py-8 px-10 text-center rounded-lg shadow-lg transform mx-auto my-2 border-2 border-primary md:w-64 sm:w-full heightCard"
                >
                  <h2 className="font-semibold text-lg mb-2">
                    {user.artisticName}
                  </h2>
                  <p className="capitalize text-xs mt-1 mb-2">
                    {" "}
                    Persona/Solista
                  </p>
                  <img
                    className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg "
                    src={user.photo ? user.photo : LogoMapa}
                    alt="User avatar"
                  />

                  <span className="flex items-center border border-mmGray rounded-full w-34 pr-2 justify-center mx-auto mt-3 ">
                    <div className="bg-mmOrange rounded-full w-2.5 h-2.5 block mr-2"></div>
                    {`${user.role[0]} `}
                  </span>

                  <p className="capitalize text-xs mt-1 mb-12 font-bold">
                    {user.location.value}
                  </p>

                  <Link
                    to={`/musician?id=${user._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BtnCard className="rounded-full pt-3 pb-4 px-8">
                      Ver más
                    </BtnCard>
                  </Link>
                </div>
              );
            })
          ) : selected ? (
            <span>No Hay Personas/Solistas en esa localidad</span>
          ) : (
            <span></span>
          )}

          {bands.length > 0 ? (
            bands.map((band) => {
              return (
                // <div
                //   key={band._id}
                //   className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform mx-auto my-2 border-2 border-primary w-64 heightCard"
                // >
                //   <h2 className="font-semibold text-2xl mb-6">
                //     {band.bandsName}
                //   </h2>
                //   <img
                //     className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                //     src={band.photo ? band.photo : LogoMapa}
                //     alt="User avatar"
                //   />
                //   <p className="capitalize text-xl mt-1">{band.genres}</p>
                //   <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
                //     <div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
                //     Banda
                //   </span>
                //   <Link to={`/band?id=${band._id}`}>
                //     <BtnCard className="rounded-md pt-3 pb-4 px-8">
                //       Ver más
                //     </BtnCard>
                //   </Link>
                // </div>

                <div
                  key={band._id}
                  className="bg-white py-8 px-10 text-center rounded-lg shadow-lg transform mx-auto my-2 border-2 border-primary md:w-64 sm:w-full heightCard"
                >
                  <h2 className="font-semibold text-xl mb-2">
                    {band.bandsName}
                  </h2>
                  <p className="capitalize text-xs mt-1 mb-2">
                    {" "}
                    Banda
                  </p>
                  <img
                    className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg "
                    src={band.photo ? band.photo : LogoMapa}
                    alt="User avatar"
                  />

                  <span className="flex items-center border border-mmGray rounded-full w-34 pr-2 justify-center mx-auto mt-3 ">
                    <div className="bg-mmOrange rounded-full w-2.5 h-2.5 block mr-2"></div>
                    {`${band.genres} `}
                  </span>

                  <p className="capitalize text-xs mt-1 mb-12 font-bold">
                    {band.location.value}
                  </p>

                  <Link
                    to={`/band?id=${band._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BtnCard className="rounded-full pt-3 pb-4 px-8">
                      Ver más
                    </BtnCard>
                  </Link>
                </div>
              );
            })
          ) : selected ? (
            <span>No Hay Bandas en esa localidad</span>
          ) : (
            <span></span>
          )}
        </ContainerCard>
      )}
    </Wrapper>
  );
};
