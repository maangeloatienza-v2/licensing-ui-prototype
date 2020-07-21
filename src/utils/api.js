import axios from 'axios';
import {getToken} from './commons';

export default axios.create({
  baseURL: "http://localhost:8000/api/",
  headers : {
    'Authorization' : `${getToken()}`,
    'Content-Type': 'application/json',
  },
  responseType: "json"
});