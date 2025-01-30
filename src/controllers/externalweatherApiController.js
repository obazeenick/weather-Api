import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.apiKey;

export const fetchExternalData = async (req, res) => {
 
  /*
  try {
    //our external API endpoint
      
       const apiUrl = `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={API key}`;

    const response = await axios.get(apiUrl);

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
  
    */

  // OR Method 2 from external API source
  
 
  try {
 let city = "lagos";
  
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
           
    const weatherData = response.data;
    console.log(`The weather in ${city} is ${weatherData.weather[0].description} with a temperature of ${(weatherData.main.temp - 273.15).toFixed(2)}°C.`);
} catch (error) {
    console.error('Error fetching the weather data:', error) 
    next(error);
  
}
    
    
    

};
