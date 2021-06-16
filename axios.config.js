import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ? "http://localhost:3000" : "http://localhost:8000/api/"  ;

export default axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    
  
    }
});