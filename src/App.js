import './App.css';
import DisplayImages from './Components/DisplayImages';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let userId = localStorage.getItem('userId')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={userId === null ? <LandingPage /> : <DisplayImages />}></Route>
        <Route path='/yourpage' element={<DisplayImages />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
