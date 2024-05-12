const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://ip-blacklist-risk-detector.p.rapidapi.com/lookup',
    params: {
        ip: '151.234.197.35'
    },
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'ip-blacklist-risk-detector.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}