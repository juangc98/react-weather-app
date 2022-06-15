import React from 'react';
import LoadSpinner from './LoadSpinner';

const Card = ({loadingData, setData, weather, forecast}) => {

    //Neccesary variables
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year ;
    // WEATHER
    let url = "";
    let iconUrl = "";
    // FORECAST
    let actualHour = today.getHours();
    let lastOfDay = ((24 - actualHour) / 3).toFixed(0);
    const allfc = forecast.list;
    let fc1 = "";
    let fc2 = "";
    let fc3 = "";
    let fc4 = "";
    let fc5 = "";
    let fdate1 = "";
    let fdate2 = "";
    let fdate3 = "";
    let fdate4 = "";
    let fdate5 = "";


    // When Loading....
    if(loadingData) {
        return  <div className='flex justify-center items-center w-full md:w-3/4 h-full m-auto relative' >
                     <LoadSpinner />
                 </div>
        
    }

    //Get Icon
    if(setData){
        //WEATHER DATA
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        // FORECAST

        fc1 = allfc.slice(0, lastOfDay);
        // fc2 = allfc.slice(lastOfDay, lastOfDay + 8);
        // fc3 = allfc.slice(lastOfDay + 8, lastOfDay + 16);
        // fc4 = allfc.slice(lastOfDay + 16, lastOfDay + 24);
        // fc5 = allfc.slice(lastOfDay + 24, lastOfDay + 32);
        fdate1 = fc1[0].dt_txt.substring(8, 10) + "/" + fc1[0].dt_txt.substring(5, 7);
        // fdate2 = fc2[0].dt_txt.substring(8, 10) + "/" + fc2[0].dt_txt.substring(5, 7);
        // fdate3 = fc3[0].dt_txt.substring(8, 10) + "/" + fc3[0].dt_txt.substring(5, 7);
        // fdate4 = fc4[0].dt_txt.substring(8, 10) + "/" + fc4[0].dt_txt.substring(5, 7);
        // fdate5 = fc5[0].dt_txt.substring(8, 10) + "/" + fc5[0].dt_txt.substring(5, 7);
    }
    // CARD Data-Visualization
    return (
        <div className='flex justify-center items-center w-full md:w-3/4 h-full m-auto relative' >

            {
                setData === true ? (
                    <div className='w-full h-full flex flex-nowrap flex-col rounded-xl shadow-xl overflow-hidden' >
                        <div className='w-full h-full p-5 bg-white grid grid-cols-1 md:grid-cols-2'>

                            <div className='first-col flex flex-col h-full justify-between'>

                                <div className='text-md lg:text-base !leading-snug'>
                                    <p>Actualmente</p>
                                    <h3>{weather.name}, {weather.sys.country}</h3>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex items-center'>
                                        <div className='w-16 h-16 -m-3 flex relative justify-center items-center'>
                                            <img className='w-full h-full object-center object-contain' src={ iconUrl } alt="icon weather" />
                                        </div>
                                        <p>"{weather.weather[0].description}"</p>
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
                                    
                                </div>

                            </div>
                            
                            <div className='secon-col flex flex-row md:flex-col flex-nowrap justify-between md:justify-end items-end text-left md:text-right pt-5'>
                                 <ul className='text-md lg:text-base !leading-snug flex flex-col'>
                                    <li className='inline-flex items-center font-bold'> 🌡️{(weather.main.temp - 273.15).toFixed(1)} <span className='text-'>°C</span>  </li>
                                    <li className='inline-flex items-center text-sm'> <span className='!leading-none font-bold !text-xl'> - </span> {(weather.main.temp_min - 273.15).toFixed(1)} <span className='text-'>°C</span> </li>
                                    <li className='inline-flex items-center text-sm'> <span className='!leading-none font-bold !text-xl'> + </span> {(weather.main.temp_max - 273.15).toFixed(1)} <span className='text-'>°C</span>  </li>
                                    <li className=''>☁️ {weather.clouds.all}% </li>
                                </ul>
                                <ul className='text-md lg:text-base !leading-snug text-right'>
                                    <li className=''>💧 {weather.main.humidity}% </li>
                                    <li className=''>💨 {(weather.wind.speed).toFixed(2)} <span className='text-'>m/s</span>  </li>
                                    <li className=''>☀️ {weather.sys.sunrise}</li>
                                    <li className=''>🌒 {weather.sys.sunset}</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className='w-full h-full p-5 bg-gray-500 border-t border-gray-400'>
                            <div className='w-full h-full relative'>
                                <div className='absolute left-0 right-0 bottom-0 overflow-x-scroll'>
                                    <div className=''>
                                        <p className=''>Hoy {fdate1}</p>
                                        <div className='grid grid-cols-8 gap-x-2 my-1'>
                                            {fc1.map(({ main, weather, dt_txt, dt }) => (
                                                <div key={dt} className='flex flex-col justify-start items-center'>
                                                    <span className='text-sm'> {(main.temp- 273.15).toFixed(1)} </span>
                                                    <span className='-m-2'>
                                                        <img className='w-full h-full object-center object-contain' src={url + weather[0].icon + ".png"}  alt="icon weather" />
                                                    </span>
                                                    <div className='h-0.5 w-3/4 bg-gray-400 rounded-full'></div>
                                                    <span className='text-sm'> {dt_txt.substring(11, 16)} </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className=''>
                                        <p className=''>Hoy {fdate1}</p>
                                        <div className='grid grid-cols-8 gap-x-2 my-1'>
                                            {fc1.map(({ main, weather, dt_txt, dt }) => (
                                                <div key={dt} className='flex flex-col justify-start items-center'>
                                                    <span className='text-sm'> {(main.temp- 273.15).toFixed(1)} </span>
                                                    <span className='-m-2'>
                                                        <img className='w-full h-full object-center object-contain' src={url + weather[0].icon + ".png"}  alt="icon weather" />
                                                    </span>
                                                    <div className='h-0.5 w-3/4 bg-gray-400 rounded-full'></div>
                                                    <span className='text-sm'> {dt_txt.substring(11, 16)} </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className=''>
                                        <p className=''>Hoy {fdate1}</p>
                                        <div className='grid grid-cols-8 gap-x-2 my-1'>
                                            {fc1.map(({ main, weather, dt_txt, dt }) => (
                                                <div key={dt} className='flex flex-col justify-start items-center'>
                                                    <span className='text-sm'> {(main.temp- 273.15).toFixed(1)} </span>
                                                    <span className='-m-2'>
                                                        <img className='w-full h-full object-center object-contain' src={url + weather[0].icon + ".png"}  alt="icon weather" />
                                                    </span>
                                                    <div className='h-0.5 w-3/4 bg-gray-400 rounded-full'></div>
                                                    <span className='text-sm'> {dt_txt.substring(11, 16)} </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-gray-200" >No hay datos disponibles.</h2>
                )
            }

        </div>
    );

}

export default Card;