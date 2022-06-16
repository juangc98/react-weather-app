import React from 'react';
import LoadSpinner from './LoadSpinner';

const Card = ({loadingData, setData, weather, forecast}) => {

    //Neccesary variables
    let today = new Date();
    let day = Number(today.getDate());
    let month = today.getMonth();
    //let year = today.getFullYear();
    //let date = day + '/' + month + '/' + year ;
    //let actualHour = today.getHours();
    // WEATHER
    let url = "";
    let iconUrl = "";
    // FORECAST
    let allfc = null;
    let fc1 = null;
    let fc2 = null;
    let fc3 = null;
    let fc4 = null;
    let fc5 = null;

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
        allfc = forecast.list;
        fc1 = allfc.filter(e => Number(e.dt_txt.substring(8,10)) === day);
        fc2 = allfc.filter(e => Number(e.dt_txt.substring(8,10)) === (day + 1));
        fc3 = allfc.filter(e => Number(e.dt_txt.substring(8,10)) === (day + 2));
        fc4 = allfc.filter(e => Number(e.dt_txt.substring(8,10)) === (day + 3));
        fc5 = allfc.filter(e => Number(e.dt_txt.substring(8,10)) === (day + 4));
    }

    const Tabs = ({ color }) => {
        const [openTab, setOpenTab] = React.useState(1);
        return (
          <>
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-nowrap pt-3 pb-4 flex-row gap-2 overflow-x-auto"
                  role="tablist"
                >
                  <li className="-mb-px flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                       {day}/{month}
                    </a>
                  </li>
                  <li className="-mb-px flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                       {day + 1}/{month}
                    </a>
                  </li>
                  <li className="-mb-px flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                        (openTab === 3
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                       {day + 2}/{month}
                    </a>
                  </li>
                  <li className="-mb-px flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                        (openTab === 4
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                       {day + 3}/{month}
                    </a>
                  </li>
                  <li className="-mb-px flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal " +
                        (openTab === 5
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(5);
                      }}
                      data-toggle="tab"
                      href="#link5"
                      role="tablist"
                    >
                       {day + 4}/{month}
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <div className='flex flex-nowrap overflow-x-auto gap-x-2 my-1'>
                                {fc1.map(({ main, weather, dt_txt, dt }) => (
                                    <div key={dt} className='flex flex-col justify-start items-center p-2'>
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
                      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                        <div className='flex flex-nowrap overflow-x-auto my-1'>
                            {fc2.map(({ main, weather, dt_txt, dt }) => (
                                <div key={dt} className='flex flex-col justify-start items-center p-2'>
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
                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                            <div className='flex flex-nowrap overflow-x-auto my-1'>
                                {fc3.map(({ main, weather, dt_txt, dt }) => (
                                    <div key={dt} className='flex flex-col justify-start items-center p-2'>
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
                        <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                            <div className='flex flex-nowrap overflow-x-auto my-1'>
                                {fc4.map(({ main, weather, dt_txt, dt }) => (
                                    <div key={dt} className='flex flex-col justify-start items-center p-2'>
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
                        <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                            <div className='flex flex-nowrap overflow-x-auto my-1'>
                                {fc5.map(({ main, weather, dt_txt, dt }) => (
                                    <div key={dt} className='flex flex-col justify-start items-center p-2'>
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
            </div>
          </>
        );
      };

    // CARD Data-Visualization
    return (
        <div className='flex justify-center items-center w-full max-w-xl h-full m-auto relative' >

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
                                    <li className='inline-flex items-center md:justify-end font-bold'> 🌡️{(weather.main.temp - 273.15).toFixed(1)} <span className='text-'>°C</span>  </li>
                                    <li className='inline-flex items-center md:justify-end text-sm'> <span className='!leading-none font-bold !text-xl'> - </span> {(weather.main.temp_min - 273.15).toFixed(1)} <span className='text-'>°C</span> </li>
                                    <li className='inline-flex items-center md:justify-end text-sm'> <span className='!leading-none font-bold !text-xl'> + </span> {(weather.main.temp_max - 273.15).toFixed(1)} <span className='text-'>°C</span>  </li>
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
                            <Tabs color="pink" />
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