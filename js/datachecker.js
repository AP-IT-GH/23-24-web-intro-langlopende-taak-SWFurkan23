const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://email-data-leak-checker.p.rapidapi.com/emails',
    params: {
        email: 'info@domain.com'
    },
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'email-data-leak-checker.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}