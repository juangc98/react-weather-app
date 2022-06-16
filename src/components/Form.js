import React, {useState} from 'react';

const Form = ({newLocation, myCoords}) => {
    // Estados
    const [city, setCity] = useState("");

    // onSubmit... send values to card omponent.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        if( typeof city === 'object' && city !== ''){
            console.log("my coords async");
            myCoords(city)
        } else if ( typeof city === 'string' && city !== '') {
            console.log("inside new location");
            newLocation(city);
        }
    }

    // Manejo de coordenadas
    const handleCoords = async(e) => {
        //console.log(coords);
        if(typeof city === 'object') return;
        //
        const reqCoords = await getCoords();
        setCity(reqCoords.coords);
        console.log("handleCoords");
    }
    // Solicitando coords con permiso...
    const getCoords = async (e) => {
        return new Promise((resolve, reject) => {
            if(!("geolocation" in navigator)) {
                reject(new Error('Geolocation is not available.'));
            }
            navigator.geolocation.getCurrentPosition(pos => {
                return resolve(pos);
            }, err => {
                reject(err);
            })
        })
    }

    // Componente
    return(
        <div className="relative mx-auto w-full max-w-md flex justify-center items-center p-2">
            <form id='location-form' onSubmit={handleSubmit} className="relative w-full flex flex-nowrap gap-x-3 ">
                <div className="input-group w-full relative inline-flex text-gray-800 bg-white rounded-full overflow-hidden" >
                    <select id="select" name="select" className="relative w-full py-3 px-5 text-lg appearance-none border-0">
                        <option for="select" name="mygeolocation" value="mygeolocation" 
                            onClick={ handleCoords }
                            >Mi ubicación</option>
                        <optgroup label="Ciudades">
                            <option for="select" name="Buenos Aires" onClick={(e) => setCity(e.target.value)} value="Buenos Aires">Buenos Aires</option>
                            <option for="select" name="Posadas" onClick={(e) => setCity(e.target.value)} value="Posadas">Posadas</option>
                            <option for="select" name="Salta" onClick={(e) => setCity(e.target.value)} value="Salta">Salta</option>
                            <option for="select" name="Mendoza" onClick={(e) => setCity(e.target.value)} value="Mendoza">Mendoza</option>
                            <option for="select" name="Ushuaia" onClick={(e) => setCity(e.target.value)} value="Ushuaia">Ushuaia</option>
                        </optgroup>
                    </select>
                    <button type='submit' className='absolute z-10 right-0 inset-y-0 block py-2 px-5 w-max text-gray-800 hover:bg-slate-900 hover:text-white transition-all ease-in-out' >Buscar</button>
                </div>
            </form>
        </div>
    )

}

export default Form;