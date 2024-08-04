const axios = require('axios');

const MY_KEY = "544b148e36c58fb2eb65f673fb4381e1"
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                appid: MY_KEY,
                q: city
            }
        });

        if (response.data.error) {
            return { error: response.data.error.info };
        }
    //    console.log(response)
        
        return  response.data.current;
    } catch (error) {
        return { error: 'Unable to fetch weather data.' };
    }
};

module.exports = getWeather;
