import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import Wishes from './components/Wishes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path='/wishes' element={<Wishes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
