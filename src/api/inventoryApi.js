import axios from "axios";

export const getInventoryData = async () => {
    const SPREADSHEET_ID = import.meta.env.VITE_APP_SPREADSHEET_ID;
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const range = '시트1!A1:B10';

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;

    try {
        const response = await axios.get(url);
        console.log(response.data.values);
        return response.data.values;
    } catch (error) {
        console.error('Error fetching inventory data', error);
        throw error;
    }
}