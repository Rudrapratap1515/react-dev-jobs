import logo from './logo.svg';
import './App.css';
import Show from './components/ShowComponent'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Show />
      </div>
    </BrowserRouter>
  );
}

export default App;
