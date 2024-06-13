import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {DataProvider} from './Components/DataContext';
import HomePage from './Pages/HomePage';
import AddOfferingPage from './Pages/AddOfferingPage';
import AddOfferingContentPage from './Pages/AddOfferingContentPage';
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path="/addoffering" element={<AddOfferingPage/>}/>
            <Route path='/addofferingcontent' element = {<AddOfferingContentPage/>}/>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
