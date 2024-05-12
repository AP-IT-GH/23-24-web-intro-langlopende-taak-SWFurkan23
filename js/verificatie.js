const axios = require('axios');

const options = {
    method: 'POST',
    url: 'https://simple-otp.p.rapidapi.com/',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'simple-otp.p.rapidapi.com'
    },
    data: {
        phoneNumber: '17739990172'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}