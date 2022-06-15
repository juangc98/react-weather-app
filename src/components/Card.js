import React from 'react';
import LoadSpinner from './LoadSpinner';

const Card = ({loadingData, setData, weather, forecast}) => {

    //
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year ;
    //
    let url = "";
    let iconUrl = "";

    // When Loading....
    if(loadingData) {
        return  <div className='flex justify-center items-center w-full md:w-3/4 h-full m-auto relative' >
                     <LoadSpinner />
                 </div>
        
    }

    //Get Icon
    if(setData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png"

    }
    // CARD Data-Visualization
    return (
        <div className='flex justify-center items-center w-full md:w-3/4 h-full m-auto relative' >

            {
                setData === true ? (
                    <div className='w-full h-full flex flex-nowrap flex-col rounded-xl shadow-xl overflow-hidden' >
                        <div className='w-full h-full p-5 bg-white'>

                            <div className='flex flex-row'>                                
                                <div className='text-md lg:text-base !leading-snug'>
                                    <p>Actualmente</p>
                                    <h3>{weather.name}, {weather.sys.country}</h3>
                                </div>
                            </div>

                            
                            <div className='flex flex-row items-stretch'>
                                <h1 id='sense-temp' className='text-6xl lg:text-7xl font-semibold w-max'>
                                    {(weather.main.feels_like - 273.15).toFixed(1)}
                                </h1>
                                <div className='flex flex-col justify-around pl-1'>
                                    <span className='w-2 h-2 border-2 border-black rounded-full pb-1'></span>
                                    <span className='text-xl lg:text-3xl  leading-none'>C</span>
                                </div>
                            </div>

                            <div className='flex flex-row items-center gap-3 -mt-2'>
                                <div className='flex flex-row-reverse items-center'>
                                    <p>"{weather.weather[0].description}"</p>
                                    <div className='w-16 h-16 -m-1 flex relative justify-center items-center'>
                                        <img className='w-full h-full object-center object-contain' src={ iconUrl } alt="icon weather" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex flex-row flex-nowrap justify-between items-end pt-5'>
                                 <ul className='text-md lg:text-base !leading-snug'>
                                    <div className='flex flex-row items-center gap-x-1'>
                                        <div className='text-2xl'>
                                            🌡️
                                        </div>
                                        <div>
                                            <li className='font-bold'>{(weather.main.temp - 273.15).toFixed(1)} <span className='text-'>°C</span>  </li>
                                            <li className='text-sm'>{(weather.main.temp_min - 273.15).toFixed(1)} <span className='text-'>°C</span> / {(weather.main.temp_max - 273.15).toFixed(1)} <span className='text-'>°C</span>  </li>
                                        </div>
                                    </div>
                                    <li className=''>☁️ {weather.clouds.all}% </li>
                                    <li className=''>💧 {weather.main.humidity}% </li>
                                    <li className=''>💨 {(weather.wind.speed).toFixed(2)} <span className='text-'>m/s</span>  </li>
                                </ul>
                                <ul className='text-md lg:text-base !leading-snug text-right'>
                                    <li className=''>☀️ {weather.sys.sunrise}</li>
                                    <li className=''>🌒 {weather.sys.sunset}</li>
                                </ul>
                            </div>

                            
                        </div>
                        <div className='w-full h-full p-5 bg-gray-500'></div>
                    </div>
                ) : (
                    <h2 className="text-gray-200" >No hay datos disponibles.</h2>
                )
            }

        </div>
    );

}

export default Card;