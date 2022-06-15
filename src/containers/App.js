import '../assets/css/App.css';
import Panel from '../components/Panel'

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY

  // const [noData, setNoData] = useState('Buscando información...')
  // const [searchTerm, setSearchTerm] = useState('')
  // const [weatherData, setWeatherData] = useState([])
  // const [city, setCity] = useState('Locación desconocida')

  //
  return (
      <div className="bg-gray-400 h-screen w-full overflow-hidden flex flex-col items-center pt-10 pb-20 px-10 relative gap-y-5">
        <Panel />
      </div>
  );
}

export default App;
