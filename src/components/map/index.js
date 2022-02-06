import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
// import 'google-map-react/dist/index.css'
import styled from 'styled-components';
// import LOS_ANGELES_CENTER from './const/la_center';
import axios from 'axios';
import Marker from '../Marker';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { musicians } from '../../services/register';
const Wrapper = styled.main`
  width: 100vw;
  height: 88vh;
  display: flex;
`;

const DotMarker = styled.div`
width: 25px;
height: 25px;
background-color: #EA8644ff;
border-radius: 15px;
&:hover {
  cursor: pointer;
  background-color: #64599Eff;
}
`;
let isPlaces = true;
const MusiciansContainer = styled.section`
  width: 100vw;
  display: ${isPlaces ? 'none' : 'inherit'};
  height: 100vh;
  display: flex;
`;

export const Map = () => {
  //   return <p>Mapa</p>;
  const [places, setPlaces] = useState({});
  const [musician, setMusician] = useState([]);
  const [name, setName] = React.useState('');
  const fetchPlaces = async () => {
    axios({
      method: 'GET',
      url: 'https://api.aguaflorida.pe/api/total',
    }).then(({ data }) => {
      const newData = data.total;
      setPlaces(newData);
      console.log(newData);

    });
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const getMusiciansByLatLng = async(place)=>{

    axios({
      method: 'GET',
      url: `https://api.aguaflorida.pe/api/users/${place._id}`,
    }).then(({ data }) => {
      setMusician(data.data);
      if (!musician || musician.length === 0) {
         isPlaces = false;
       }
       const location = musician.location;
       axios.post(`https://api.aguaflorida.pe/api/users/location`, { location })
       .then(res => {
         console.log(res);
         console.log(res.data);

       })

    });
    

  }

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (!places || places.length === 0) {
   // isPlaces = false;
   console.log('hola')
    return null;
  }

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCPzQz0K77TBg7KX8mtBis5Q4sVE3JD2I8' }}
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
        {
                places.map((r) => ( 
                 
                      r.map((type) =>  
                      {
                        console.log(type)
                      })
                     
                  ))
        }
      </GoogleMapReact>

    </Wrapper>
  );
};
