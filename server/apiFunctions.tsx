import axios from "axios";

export interface CompanyType {
    id : number;
    name : string
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

export const addData = async (sendData: CompanyType) => {
    if (!sendData.name || !sendData.id) {
        throw new Error('Invalid company data');
    }
    const response = await axios.post("http://localhost:4444/api/data", sendData, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });
    return response.data;
}