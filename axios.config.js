import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ? "http://localhost:3000" :"https://store-product-18b3f-default-rtdb.firebaseio.com/"  ;

export default axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});