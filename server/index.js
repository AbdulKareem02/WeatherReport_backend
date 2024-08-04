const express = require('express');
const getWeather = require('./weatherService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/weather', async (request, response) => {
    const city = request.query.city;

    if (!city) {
        return response.status(400).send({ error: 'City is required' });
    }

    const weather = await getWeather(city);
    console.log(weather)

    if (weather.error) {
        return response.status(500).send({ error: weather.error });
    }

    // response.send(weather);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
