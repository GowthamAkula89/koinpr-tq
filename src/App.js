import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {DataProvider} from './Components/DataContext';
function App() {
  return (
    <div className="App">
      <DataProvider>
        
      </DataProvider>
    </div>
  );
}

export default App;
