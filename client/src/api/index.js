import Axios from 'axios';

const Api = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_ENDPOINT,
});

export default Api;
