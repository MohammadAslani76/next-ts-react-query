import axios from "axios";

export interface Company {
    id : number;
    title : string
}

export const fetchData = async () => {
    const response = await axios.get("http://localhost:4444/api/data",{
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    return response.data;
}

export const addData = async (sendData) => {
    const response = await axios.post("http://localhost:4444/api/data",sendData,{
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    return response.data;
}