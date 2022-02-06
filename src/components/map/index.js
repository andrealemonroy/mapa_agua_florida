import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
// import 'google-map-react/dist/index.css'
import styled from "styled-components";
// import LOS_ANGELES_CENTER from './const/la_center';
import axios from "axios";
import Marker from "../Marker";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { musicians } from "../../services/register";
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
  overflow: scroll
`
const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border: 1px solid #F6E3DE;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #F6E3DE;
  }
`;

let isPlaces = true;
const MusiciansContainer = styled.section`
  width: 100vw;
  display: ${isPlaces ? "none" : "inherit"};
  height: 100vh;
  display: flex;
`;

export const Map = () => {
  //   return <p>Mapa</p>;
  const [places, setPlaces] = useState({});
  const [usersLocation, setUsersLocation] = useState([]);
  const [bandsLocation, setBandsLocation] = useState([]);
  const [users, setUsers] = useState([]);
  const [bands, setBands] = useState([]);
  const [musician, setMusician] = useState([]);
  const [name, setName] = React.useState("");
  axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
  const instance = axios.create({
    baseURL: "https://api.aguaflorida.pe/api",
    headers: { "Content-Type": "application/json" },
  });
  const fetchPlaces = async () => {
    instance.get("/total/location").then((res) => {
      console.log(res.data);
      const newData = res.data;
      setPlaces(newData);
    });
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const getMusiciansByLatLng = async (place) => {
    instance.post(`/total/byLocation`, place).then((res) => {
      console.log(res.data.data);
      setUsers(res.data.data[0]);
      setBands(res.data.data[1]);
      // setMusician(res.data.data);
      // if (!musician || musician.length === 0) {
      //   isPlaces = false;
      // }
      // const location = musician.location;
      // instance.post(`/users/location`, { location }).then((res) => {
      //   console.log(res);
      // });
    });
  };

  useEffect(() => {
    instance.get("/total/location").then(({ data }) => {
      console.log(data.data);
      setUsersLocation(data.data[0]);
      setBandsLocation(data.data[1]);
    });
  }, []);

  if (!places || places.length === 0) {
    // isPlaces = false;
    console.log("hola");
    return null;
  }

  return (
    <Wrapper>
      <ContainerMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCPzQz0K77TBg7KX8mtBis5Q4sVE3JD2I8" }}
          defaultZoom={5.5}
          defaultCenter={[-10.046374, -77.042793]}
        >
          {/* {places.map((place) => {

              place.map((type) => {
                console.log(type)
                return (

                
                <DotMarker 
                  key={type._id}  
                  lat={type.location.coordinates?.lat}
                  lng={type.location.coordinates?.lng}
                //  onClick={getMusiciansByLatLng(place)} 
                >
                </DotMarker>
                

                
                )
              }
              )
          console.log(place)
        }
        )} */}
          {usersLocation ? (
            usersLocation.map((place) => {
              return (
                <DotMarker
                  key={place._id}
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
                  key={place._id}
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
            return <Card>{user.email}</Card>;
          })
        ) : (
          <span></span>
        )}
        {bands.length > 0 ? (
          bands.map((band) => {
            return <Card>{band.email}</Card>;
          })
        ) : (
          <span></span>
        )}
      </ContainerCard>
    </Wrapper>
  );
};
