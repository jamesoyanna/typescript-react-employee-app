import axios from "axios";

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
let baseURL = "https://64b3b5bd0efb99d862684ae3.mockapi.io/api/"
if(!development) 
baseURL  ="https://64b3b5bd0efb99d862684ae3.mockapi.io/api/"

export default axios.create({
    baseURL
})