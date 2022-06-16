import '../assets/css/App.css';
import Panel from '../components/Panel'

function App() {
  //
  return (
      <div className="bg-slate-500 h-screen w-full overflow-hidden flex flex-col items-center pt-10 pb-20 px-10 relative gap-y-5">
        <Panel />
      </div>
  );
}

export default App;
