import axios from 'axios';
import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';

const Panel = () => {
    // API DATA
    const URL_WEATHER = process.env.REACT_APP_WEATHER_URL;
    const URL_FORECAST = process.env.REACT_APP_FORECAST_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    // STATES
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);
    // const [location, setLocation] = useState("");
    const [geolocation, setGeolocation] = useState({});

    // FUNCTIONS
    const getViaLocation = async(loc) => {
        setLoading(true);
        // ACTUAL WEATHER
        await axios.get(URL_WEATHER, {
            params: {
              // lat: -34.920345,
              // lon: -57.969559,
              q: loc,
              appid: API_KEY,
              lang: 'es'
            }
        })
        .then((weatherData) => {
            const myData = weatherData.data
            setWeather(myData);
            console.log(myData);
        })
        .catch(error => { 
            console.log(error);
            setLoading(false);
            setData(false);
        })
        // FUTURE FORECAST
        await axios.get(URL_FORECAST, {
            params: {
              q: loc,
              appid: API_KEY,
              lang: 'es'
            }
        })
        .then((forecastData) => {
            const myData = forecastData.data
            setForecast(myData);
            console.log(myData);
            setLoading(false);
            setData(true);
        })
        .catch(error => { 
            console.log(error);
            setLoading(false);
            setData(false);
        })
    }

    const getViaCoords = async(coords) => {
        setLoading(true);
        setGeolocation(coords);
        console.log(geolocation);
        // ACTUAL WEATHER
        await axios.get(URL_WEATHER, {
            params: {
              lat: coords.latitude,
              lon: coords.longitude,
              appid: API_KEY,
              lang: 'es'
            }
        })
        .then((weatherData) => {
            const myData = weatherData.data
            console.log(myData);
            setWeather(myData);
            console.log(myData);
        })
        .catch(error => { 
            console.log(error);
            setLoading(false);
            setData(false);
        })
        // FUTURE FORECAST
        await axios.get(URL_FORECAST, {
            params: {
              lat: coords.latitude,
              lon: coords.longitude,
              appid: API_KEY,
              lang: 'es'
            }
        })
        .then((forecastData) => {
            const myData = forecastData.data
            setForecast(myData);
            console.log(myData);
            setLoading(false);
            setData(true);
        })
        .catch(error => { 
            console.log(error);
            setLoading(false);
            setData(false);
        })
    }

    // Componente
    return(

        <React.Fragment>

            <Form
             newLocation = {getViaLocation}
             myCoords = {getViaCoords}
             />

            <Card
                setData = {data}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
            
        </React.Fragment>
        
    )
}

export default Panel;