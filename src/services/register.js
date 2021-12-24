import axios from 'axios';
const musicians = () => {
  axios({
    method: "GET",
    url: `${process.env.API_AGUA_FLORIDA}/users`,
  }).then(async (response) => {
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export default {musicians}