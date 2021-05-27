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
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Map = () => {
  //   return <p>Mapa</p>;
  const [places, setPlaces] = useState([]);
  const [name, setName] = React.useState('');
  const fetchPlaces = async () => {
    axios({
      method: 'GET',
      url: 'https://api.aguaflorida.pe/api/users',
    }).then(({ data }) => {
      console.log(data);
      setPlaces(data.data);
    });
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (!places || places.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCPzQz0K77TBg7KX8mtBis5Q4sVE3JD2I8' }}
        defaultZoom={5.5}
        defaultCenter={[-10.046374, -77.042793]}
      >
        {places.map((place) => (
          <Marker
            key={place._id}
            text={place.fullName}
            lat={place.location.coordinates?.lat}
            lng={place.location.coordinates?.lng}
          />
        ))}
      </GoogleMapReact>
      <TableContainer component={Paper}>
        <TextField
          id='standard-name'
          label='Name'
          value={name}
          onChange={handleChange}
        />
        <Table aria-label='simple table'>
          {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
          <TableBody>
            {places.map((row) => (
              <TableRow key={row.fullName}>
                <TableCell component='th' scope='row'>
                  {row.fullName}
                </TableCell>
                {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};
