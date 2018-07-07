import axios from 'axios';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

let apiURL = 'http://localhost:7777';

export const getRequest = (url) => {
  return axios
    .get(`${apiURL}${url}`, { headers })
    .then(resp => resp.data)
    .catch(err => err.response);
};

export const postRequest = (url, data) => {
  return axios.post(`${apiURL}${url}`, data, { headers });
};