import axios from "axios";
// import { config } from "process";



const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
});



export default $api