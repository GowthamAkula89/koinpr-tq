import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {DataProvider} from './Components/DataContext';
import HomePage from './Pages/HomePage';
import AddOfferingPage from './Pages/AddOfferingPage';
import AddOfferingContentPage from './Pages/AddOfferingContentPage';
import { SnackbarProvider } from 'notistack';
import CartPage from './Pages/CartPage';
import ReviewPage from './Pages/ReviewPage';
export const config = {
  endpoint: `https://koinpr-tq-ag.onrender.com/v1/offerings`
}
function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={2} autoHideDuration={2000}>
        <DataProvider>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path="/addoffering" element={<AddOfferingPage/>}/>
              <Route path='/addofferingcontent' element = {<AddOfferingContentPage/>}/>
              <Route path='/cart' element = {<CartPage/>}/>
              <Route path="/review" element = {<ReviewPage/>}/>
            </Routes>
          </Router>
        </DataProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
