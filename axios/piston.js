import axios from "axios";


const piston = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});


export default piston