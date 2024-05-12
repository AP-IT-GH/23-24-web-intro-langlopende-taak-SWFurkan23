const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://random-password-generator-api.p.rapidapi.com/api/Password',
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'random-password-generator-api.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}