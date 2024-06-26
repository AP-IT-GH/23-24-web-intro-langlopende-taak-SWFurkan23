const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://ip-to-location4.p.rapidapi.com/iplocation',
    params: {
        apikey: '<REQUIRED>'
    },
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'ip-to-location4.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}