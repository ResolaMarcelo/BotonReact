import logo from './logo.svg';
import './App.css';
import Clicker from './components/Clicker';

function App() {
  return (
    <div className="App">
       <Clicker stock="10" initial="1"  ></Clicker>
    </div>
  );
}

export default App;
