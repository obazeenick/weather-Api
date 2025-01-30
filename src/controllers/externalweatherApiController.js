import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

//const apiKey = process.env.apiKey;

export const fetchExternalData = async (req, res) => {
 
  const apiKey = process.env.apiKey;
   const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

       const city = req.query.city;

       if (!city) {
           return res.status(400).json({ error: 'City parameter is required' });
       }

       try {
           const response = await axios.get(baseUrl, {
               params: {
                   q: city,
                   appid: apiKey,
                   units: 'metric',
               },
           });

           const weatherData = response.data;
        
           res.json({
               city: weatherData.name,
               temperature: weatherData.main.temp,
               description: weatherData.weather[0].description,
           });
       } catch (error) {
           res.status(500).json({ error: 'Failed to fetch weather data' });
       }
  

  // OR Method 2 from external API source
  
 /*
  try {
 let city = "lagos";
  
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
           
    const weatherData = response.data;
    console.log(`The weather in ${city} is ${weatherData.weather[0].description} with a temperature of ${(weatherData.main.temp - 273.15).toFixed(2)}°C.`);
} catch (error) {
    console.error('Error fetching the weather data:', error) 
    next(error);
  
}
    */
    
    

};
