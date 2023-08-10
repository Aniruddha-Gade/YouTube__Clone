import axios from "axios";

const baseUrl = 'https://youtube138.p.rapidapi.com';

const options = {
    method: 'GET',

    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};



export const fetchDataFromApi = async (url) => {

    try {
        const { data } = await axios.get(`${baseUrl}/${url}`, options);
        // console.log('Inside Api.js -> ',data);
        return data;

    } catch (error) {
        console.error('Error fetching data:', error.message);

    }
}
