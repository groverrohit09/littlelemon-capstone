import './App.css';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import Nav from './Nav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <><BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservations' element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
