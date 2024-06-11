import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {DataProvider} from './Components/DataContext';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />}/>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
